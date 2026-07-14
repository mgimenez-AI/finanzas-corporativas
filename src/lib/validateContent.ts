import { academicStatuses, type Question, type SourceRef, type Topic, type Unit } from '../content/types'

const expectedCodes = ['1.1','1.2','1.3','2.1','2.2','3.1','3.2','3.3','4.1','4.2','4.3','4.4','4.5','5.1','5.2','5.3','5.4','5.5','6.1','6.2','6.3','6.4','6.5','7.1','7.2','7.3','7.4','7.5','7.6','7.7','7.8','7.9','7.10','8.1','8.2','8.3','9.1','9.2','9.3','9.4']

export function validateContent(units: Unit[], sources: SourceRef[]): string[] {
  const errors: string[] = []
  const topics = units.flatMap((unit) => unit.topics)
  const codes = topics.map((topic) => topic.code)
  const sourceIds = new Set(sources.map((source) => source.id))

  if (units.length !== 9) errors.push(`Se esperaban 9 unidades; se encontraron ${units.length}.`)
  if (topics.length !== 40) errors.push(`Se esperaban 40 subtemas; se encontraron ${topics.length}.`)
  for (const code of expectedCodes) if (!codes.includes(code)) errors.push(`Falta el subtema oficial ${code}.`)
  for (const code of new Set(codes)) if (codes.filter((item) => item === code).length > 1) errors.push(`Código duplicado: ${code}.`)
  for (const topic of topics) validateTopic(topic, sourceIds, errors)
  for (const source of sources) {
    if (!source.id || !source.title || !source.type) errors.push('Existe una referencia de fuente incompleta.')
    if (source.type !== 'bibliography' && !source.locator) errors.push(`La fuente ${source.id} carece de localizador.`)
  }
  return errors
}

function validateTopic(topic: Topic, sourceIds: Set<string>, errors: string[]) {
  if (!topic.officialTitle.trim()) errors.push(`El tema ${topic.code} no tiene título.`)
  if (!academicStatuses.includes(topic.status)) errors.push(`Estado inválido en ${topic.code}: ${topic.status}.`)
  for (const id of topic.evidence.sourceIds) if (!sourceIds.has(id)) errors.push(`Fuente inexistente ${id} en ${topic.code}.`)
  for (const formula of topic.formulas) {
    if (!formula.variables.length) errors.push(`La fórmula ${formula.id} no define variables.`)
    for (const variable of formula.variables) if (!variable.symbol || !variable.name || !variable.definition) errors.push(`Variable incompleta en ${formula.id}.`)
  }
  for (const question of topic.questions) validateQuestion(question, topic.code, errors)
  for (const exercise of topic.exercises) if (!exercise.solution.trim()) errors.push(`Ejercicio ${exercise.id} sin solución en ${topic.code}.`)
  if (topic.status === 'exam-validated' && !topic.evidence.examEvidenceIds.length) errors.push(`${topic.code} está exam-validated sin evidencia de examen.`)
  if (topic.status === 'verified' && !topic.evidence.userApproval?.approved) errors.push(`${topic.code} está verified sin aprobación explícita del usuario.`)
}

function validateQuestion(question: Question, topicCode: string, errors: string[]) {
  if (!question.correctAnswer.trim()) errors.push(`Pregunta ${question.id} sin respuesta correcta en ${topicCode}.`)
  if (!question.explanation.trim()) errors.push(`Pregunta ${question.id} sin explicación en ${topicCode}.`)
  if (question.type === 'multiple-choice' && !question.options?.includes(question.correctAnswer)) errors.push(`La respuesta de ${question.id} no está entre sus opciones.`)
}
