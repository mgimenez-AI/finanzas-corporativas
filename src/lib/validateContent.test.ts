import { describe, expect, it } from 'vitest'
import { units } from '../content/syllabus'
import { sources } from '../content/sources'
import { validateContent } from './validateContent'

describe('validación de contenido', () => {
  it('acepta el inventario base', () => expect(validateContent(units, sources)).toEqual([]))
  it('detecta un subtema ausente', () => {
    const broken = structuredClone(units); broken[0].topics.pop()
    expect(validateContent(broken, sources).some((error) => error.includes('1.3'))).toBe(true)
  })
  it('detecta duplicados', () => {
    const broken = structuredClone(units); broken[0].topics[1].code = '1.1'
    expect(validateContent(broken, sources).some((error) => error.includes('duplicado'))).toBe(true)
  })
})
