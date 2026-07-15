import { describe, expect, it } from 'vitest'
import { topics, units } from './syllabus'

describe('inventario oficial', () => {
  it('contiene nueve unidades y cuarenta subtemas', () => { expect(units).toHaveLength(9); expect(topics).toHaveLength(40) })
  it('no contiene identificadores duplicados', () => { expect(new Set(topics.map((topic) => topic.code)).size).toBe(40) })
  it('incorpora el Módulo 1 sin alterar el inventario', () => {
    const developed = topics.filter((topic) => topic.evidence.sourceIds.includes('fc-2026-modulo-1-objetivos-alcance'))
    expect(developed.map((topic) => topic.code)).toEqual(['1.1','1.2','1.3','2.2','6.3','6.4','6.5','7.2','7.4'])
    expect(developed.every((topic) => topic.status === 'sourced')).toBe(true)
    expect(topics.find((topic) => topic.code === '1.2')?.formulas[0].id).toBe('formula-eva-01')
  })
  it('mantiene sin desarrollar los temas no relacionados', () => {
    const unrelated = topics.filter((topic) => !topic.evidence.sourceIds.includes('fc-2026-modulo-1-objetivos-alcance'))
    expect(unrelated.every((topic) => topic.status === 'identified' && topic.theory.length === 0)).toBe(true)
  })
})
