export const academicStatuses = ['identified', 'draft', 'sourced', 'practiced', 'exam-validated', 'verified'] as const
export type AcademicStatus = typeof academicStatuses[number]

export interface SourceRef { id: string; title: string; type: 'official-program' | 'course-material' | 'presentation' | 'practice' | 'exam' | 'teacher-note' | 'bibliography'; authors?: string[]; edition?: string; year?: number; locator?: string; access?: 'metadata-only' | 'available' }
export interface Variable { symbol: string; name: string; definition: string; unit?: string }
export interface Formula { id: string; name: string; expression: string; variables: Variable[]; assumptions: string[]; interpretation: string; sourceIds: string[] }
export interface TheorySection { id: string; heading: string; markdown: string; sourceIds: string[]; preliminary: boolean; technicalDemo?: boolean }
export interface SolvedExample { id: string; title: string; prompt: string; steps: string[]; result: string; interpretation: string; sourceIds: string[]; technicalDemo?: boolean }
export interface Exercise { id: string; prompt: string; solution: string; sourceIds: string[]; technicalDemo?: boolean }
export interface Question { id: string; type: 'multiple-choice' | 'true-false' | 'short-answer'; prompt: string; options?: string[]; correctAnswer: string; explanation: string; sourceIds: string[]; technicalDemo?: boolean }
export interface AcademicEvidence { sourceIds: string[]; examEvidenceIds: string[]; userApproval?: { approved: true; approvedAt: string; note: string } }
export interface Topic { code: string; unitCode: string; officialTitle: string; canonicalTitle: string; programPage: number; editorialNote?: string; status: AcademicStatus; theory: TheorySection[]; formulas: Formula[]; examples: SolvedExample[]; exercises: Exercise[]; questions: Question[]; evidence: AcademicEvidence; pendingNotes: string[] }
export interface Unit { code: string; officialTitle: string; canonicalTitle: string; aliases?: string[]; topics: Topic[] }
export interface QuizAttempt { questionId: string; answer: string; correct: boolean; answeredAt: string }
export interface MockExamResult { id: string; correct: number; total: number; completedAt: string }
export interface Progress { readTopicCodes: string[]; favoriteTopicCodes: string[]; questionAttempts: QuizAttempt[]; incorrectQuestionIds: string[]; mockExamResults: MockExamResult[] }
