import type { Progress } from '../content/types'

export const PROGRESS_KEY = 'finanzas-a71-progress-v1'
export const emptyProgress: Progress = { readTopicCodes: [], favoriteTopicCodes: [], questionAttempts: [], incorrectQuestionIds: [], mockExamResults: [] }

export function loadProgress(storage: Pick<Storage, 'getItem'> = localStorage): Progress {
  try { return { ...emptyProgress, ...JSON.parse(storage.getItem(PROGRESS_KEY) ?? '{}') } as Progress }
  catch { return structuredClone(emptyProgress) }
}

export function saveProgress(progress: Progress, storage: Pick<Storage, 'setItem'> = localStorage) {
  storage.setItem(PROGRESS_KEY, JSON.stringify(progress))
}

export function toggleCode(values: string[], code: string): string[] {
  return values.includes(code) ? values.filter((item) => item !== code) : [...values, code]
}
