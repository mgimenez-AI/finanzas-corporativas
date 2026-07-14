import { describe, expect, it } from 'vitest'
import { emptyProgress, loadProgress, PROGRESS_KEY, saveProgress } from './progress'

describe('progreso local', () => {
  it('guarda y recupera el progreso', () => {
    const data = { ...emptyProgress, readTopicCodes: ['1.1'], favoriteTopicCodes: ['7.3'] }
    const memory = new Map<string,string>(); const storage = { getItem: (key:string) => memory.get(key) ?? null, setItem: (key:string,value:string) => { memory.set(key,value) } }
    saveProgress(data, storage); expect(memory.has(PROGRESS_KEY)).toBe(true); expect(loadProgress(storage)).toEqual(data)
  })
})
