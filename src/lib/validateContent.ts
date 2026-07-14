import { academicStatuses, type Question, type SourceRef, type Topic, type Unit } from '../content/types'

const expectedCodes = ['1.1','1.2','1.3','2.1','2.2','3.1','3.2','3.3','4.1','4.2','4.3','4.4','4.5','5.1','5.2','5.3','5.4','5.5','6.1','6.2','6.3','6.4','6.5','7.1','7.2','7.3','7.4','7.5','7.6','7.7','7.8','7.9','7.10','8.1','8.2','8.3','9.1','9.2','9.3','9.4']

export function validateContent(units: Unit[], sources: SourceRef[]): string[] {
  const errors: string[] = []
  const topics = units.flatMap((unit) => unit.topics)
  const codes = topics.map((topic) => topic.code)
  const allSourceIds = sources.map((source) => source.id)
  const sourceIds = new Set(allSourceIds)

  if (units.length !== 9) errors.push(`Se esperaban 9 unidades; se encontraron ${units.length}.`)
  if (topics.length !== 40) errors.push(`Se esperaban 40 subtemas; se encontraron ${topics.length}.`)
  for (const code of expectedCodes) if (!codes.includes(code)) errors.push(`Falta el subtema oficial ${code}.`)
  reportDuplicates(codes, 'Código de tema', errors)
  reportDuplicates(allSourceIds, 'Identificador de fuente', errors)
  reportDuplicates(topics.flatMap((topic) => topic.formulas.map((item) => item.id)), 'Identificador de fórmula', errors)
  reportDuplicates(topics.flatMap((topic) => topic.examples.map((item) => item.id)), 'Identificador de ejemplo', errors)
  reportDuplicates(topics.flatMap((topic) => topic.exercises.map((item) => item.id)), 'Identificador de ejercicio', errors)
  reportDuplicates(topics.flatMap((topic) => topic.questions.map((item) => item.id)), 'Identificador de pregunta', errors)

  for (const source of sources) {
    if (!source.id.trim() || !source.title.trim() || !source.type) errors.push('Existe una referencia de fuente incompleta.')
    if (source.type !== 'bibliography' && !source.locator?.trim()) errors.push(`La fuente ${source.id} carece de localizador.`)
  }
  for (const topic of topics) validateTopic(topic, sourceIds, errors)
  return errors
}

function reportDuplicates(ids: string[], label: string, errors: string[]) {
  const seen = new Set<string>()
  for (const id of ids) {
    if (id && seen.has(id)) errors.push(`${label} duplicado: ${id}.`)
    seen.add(id)
  }
}

function validateSourceIds(ids: string[], sourceIds: Set<string>, context: string, errors: string[], required = true) {
  if (required && !ids.length) errors.push(`${context} sin fuente.`)
  for (const id of ids) if (!sourceIds.has(id)) errors.push(`Fuente inexistente ${id} en ${context}.`)
}

function validateTopic(topic: Topic, sourceIds: Set<string>, errors: string[]) {
  if (!topic.officialTitle.trim()) errors.push(`El tema ${topic.code} no tiene título.`)
  if (!academicStatuses.includes(topic.status)) errors.push(`Estado inválido en ${topic.code}: ${topic.status}.`)
  validateSourceIds(topic.evidence.sourceIds, sourceIds, `evidencia académica de ${topic.code}`, errors)

  for (const section of topic.theory) {
    const context = `sección teórica ${section.id || '(sin id)'} de ${topic.code}`
    if (!section.id.trim()) errors.push(`Sección teórica sin id en ${topic.code}.`)
    if (!section.technicalDemo && (!section.heading.trim() || !section.markdown.trim())) errors.push(`${context} sin título o contenido.`)
    validateSourceIds(section.sourceIds, sourceIds, context, errors, !section.technicalDemo)
  }
  for (const formula of topic.formulas) {
    const context = `fórmula ${formula.id || '(sin id)'} de ${topic.code}`
    if (!formula.id.trim() || !formula.name.trim() || !formula.expression.trim() || !formula.interpretation.trim()) errors.push(`${context} sin id, nombre, expresión o interpretación.`)
    if (!formula.variables.length) errors.push(`${context} no define variables.`)
    for (const variable of formula.variables) if (!variable.symbol.trim() || !variable.name.trim() || !variable.definition.trim()) errors.push(`Variable incompleta en ${context}.`)
    validateSourceIds(formula.sourceIds, sourceIds, context, errors)
  }
  for (const example of topic.examples) {
    const context = `ejemplo ${example.id || '(sin id)'} de ${topic.code}`
    if (!example.id.trim()) errors.push(`Ejemplo sin id en ${topic.code}.`)
    if (!example.technicalDemo && (!example.result.trim() || !example.interpretation.trim())) errors.push(`${context} sin resultado o interpretación.`)
    validateSourceIds(example.sourceIds, sourceIds, context, errors, !example.technicalDemo)
  }
  for (const exercise of topic.exercises) {
    const context = `ejercicio ${exercise.id || '(sin id)'} de ${topic.code}`
    if (!exercise.id.trim()) errors.push(`Ejercicio sin id en ${topic.code}.`)
    if (!exercise.solution.trim()) errors.push(`${context} sin solución.`)
    validateSourceIds(exercise.sourceIds, sourceIds, context, errors, !exercise.technicalDemo)
  }
  for (const question of topic.questions) validateQuestion(question, topic, sourceIds, errors)
  if (topic.status === 'exam-validated' && !topic.evidence.examEvidenceIds.length) errors.push(`${topic.code} está exam-validated sin evidencia de examen.`)
  if (topic.status === 'verified' && !topic.evidence.userApproval?.approved) errors.push(`${topic.code} está verified sin aprobación explícita del usuario.`)
}

function validateQuestion(question: Question, topic: Topic, sourceIds: Set<string>, errors: string[]) {
  const context = `pregunta ${question.id || '(sin id)'} de ${topic.code}`
  if (!question.id.trim()) errors.push(`Pregunta sin id en ${topic.code}.`)
  if (!question.correctAnswer.trim()) errors.push(`${context} sin respuesta correcta.`)
  if (!question.explanation.trim()) errors.push(`${context} sin explicación.`)
  if (question.type === 'multiple-choice' && !question.options?.includes(question.correctAnswer)) errors.push(`La respuesta de ${context} no está entre sus opciones.`)
  validateSourceIds(question.sourceIds, sourceIds, context, errors, !question.technicalDemo)
}
