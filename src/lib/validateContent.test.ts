import { describe, expect, it } from 'vitest'
import { units } from '../content/syllabus'
import { sources } from '../content/sources'
import type { Exercise, Formula, Question, TheorySection } from '../content/types'
import { validateContent } from './validateContent'

const theory = (sourceIds: string[]): TheorySection => ({ id: 'theory-test', heading: 'Contenido de prueba', markdown: 'Texto estructurado para probar el validador.', sourceIds, preliminary: true })
const formula = (sourceIds: string[]): Formula => ({ id: 'formula-test', name: 'Fórmula de prueba', expression: 'x = y', variables: [{ symbol: 'x', name: 'Resultado', definition: 'Variable técnica de prueba.' }], assumptions: [], interpretation: 'Interpretación técnica de prueba.', sourceIds })
const question = (id: string, sourceIds: string[]): Question => ({ id, type: 'multiple-choice', prompt: 'Contenido técnico de prueba.', options: ['A','B'], correctAnswer: 'A', explanation: 'Explicación técnica de prueba.', sourceIds })
const exercise = (id: string): Exercise => ({ id, prompt: 'Contenido técnico de prueba.', solution: 'Solución técnica de prueba.', sourceIds: ['programa-a71-2026'] })

describe('validación de contenido', () => {
  it('acepta el inventario base', () => expect(validateContent(units, sources)).toEqual([]))

  it('detecta un subtema ausente', () => {
    const broken = structuredClone(units); broken[0].topics.pop()
    expect(validateContent(broken, sources).some((error) => error.includes('1.3'))).toBe(true)
  })

  it('detecta códigos de tema duplicados', () => {
    const broken = structuredClone(units); broken[0].topics[1].code = '1.1'
    expect(validateContent(broken, sources).some((error) => error.includes('Código de tema duplicado'))).toBe(true)
  })

  it('detecta una fuente interna inexistente', () => {
    const broken = structuredClone(units); broken[0].topics[0].theory.push(theory(['fuente-inexistente']))
    expect(validateContent(broken, sources).some((error) => error.includes('Fuente inexistente fuente-inexistente'))).toBe(true)
  })

  it('detecta identificadores de fuente duplicados', () => {
    const duplicatedSources = structuredClone(sources); duplicatedSources.push(structuredClone(sources[0]))
    expect(validateContent(units, duplicatedSources).some((error) => error.includes('Identificador de fuente duplicado'))).toBe(true)
  })

  it('detecta una pregunta con fuente inexistente', () => {
    const broken = structuredClone(units); broken[0].topics[0].questions.push(question('question-missing-source', ['no-existe']))
    expect(validateContent(broken, sources).some((error) => error.includes('Fuente inexistente no-existe en pregunta'))).toBe(true)
  })

  it('detecta una fórmula con fuente inexistente', () => {
    const broken = structuredClone(units); broken[0].topics[0].formulas.push(formula(['no-existe']))
    expect(validateContent(broken, sources).some((error) => error.includes('Fuente inexistente no-existe en fórmula'))).toBe(true)
  })

  it('detecta identificadores duplicados de preguntas', () => {
    const broken = structuredClone(units); broken[0].topics[0].questions.push(question('question-duplicate', ['programa-a71-2026']), question('question-duplicate', ['programa-a71-2026']))
    expect(validateContent(broken, sources).some((error) => error.includes('Identificador de pregunta duplicado'))).toBe(true)
  })

  it('detecta identificadores duplicados de ejercicios', () => {
    const broken = structuredClone(units); broken[0].topics[0].exercises.push(exercise('exercise-duplicate'), exercise('exercise-duplicate'))
    expect(validateContent(broken, sources).some((error) => error.includes('Identificador de ejercicio duplicado'))).toBe(true)
  })

  it('detecta contenido académico sin fuente', () => {
    const broken = structuredClone(units); broken[0].topics[0].theory.push(theory([]))
    expect(validateContent(broken, sources).some((error) => error.includes('sección teórica theory-test') && error.includes('sin fuente'))).toBe(true)
  })
})
