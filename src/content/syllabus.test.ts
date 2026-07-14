import { describe, expect, it } from 'vitest'
import { topics, units } from './syllabus'

describe('inventario oficial', () => {
  it('contiene nueve unidades y cuarenta subtemas', () => { expect(units).toHaveLength(9); expect(topics).toHaveLength(40) })
  it('no contiene identificadores duplicados', () => { expect(new Set(topics.map((topic) => topic.code)).size).toBe(40) })
})
