import { describe, expect, it } from 'vitest'
import type { Question } from '../content/types'
import { answerQuestion } from './quiz'

const technicalDemo: Question = { id: 'demo-tecnica', type: 'multiple-choice', prompt: 'Pregunta técnica de prueba; no constituye contenido académico.', options: ['A','B'], correctAnswer: 'B', explanation: 'Verifica el mecanismo de corrección, no conocimientos de Finanzas.', sourceIds: [], technicalDemo: true }
describe('cuestionarios', () => {
  it('evalúa una respuesta de demostración técnica', () => expect(answerQuestion(technicalDemo, 'B', new Date('2026-07-14T00:00:00Z')).correct).toBe(true))
})
