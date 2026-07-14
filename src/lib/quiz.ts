import type { Question, QuizAttempt } from '../content/types'

export function answerQuestion(question: Question, answer: string, now = new Date()): QuizAttempt {
  return { questionId: question.id, answer, correct: answer === question.correctAnswer, answeredAt: now.toISOString() }
}
