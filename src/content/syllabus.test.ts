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
    const moduleSources = new Set(['fc-2026-modulo-1-objetivos-alcance', 'fc-2026-modulo-2-funcion-financiera', 'fc-2026-modulo-3-elementos-valuacion', 'fc-2026-modulo-4-decisiones-inversion', 'fc-2026-modulo-4-ejemplos', 'fc-2026-modulo-4-incertidumbre', 'fc-2026-modulo-5-1-riesgo', 'fc-2026-modulo-5-2-portafolio', 'fc-2026-modulo-5-3-capm', 'fc-2026-modulo-6-financiamiento-apalancamiento', 'fc-2026-modulo-7-1-estructura', 'fc-2026-modulo-7-2-modelos', 'fc-2026-modulo-8-dividendos', 'fc-2026-modulo-10-derivados-1', 'fc-modulo-10-derivados-2', 'fc-2026-modulo-9-finanzas-corto-plazo'])
    const unrelated = topics.filter((topic) => !topic.evidence.sourceIds.some((sourceId) => moduleSources.has(sourceId)))
    expect(unrelated.every((topic) => topic.status === 'identified' && topic.theory.length === 0)).toBe(true)
  })
  it('incorpora el Módulo 2 solo en los temas aprobados', () => {
    const developed = topics.filter((topic) => topic.evidence.sourceIds.includes('fc-2026-modulo-2-funcion-financiera'))
    expect(developed.map((topic) => topic.code)).toEqual(['1.3','2.1','2.2','4.3'])
    expect(developed.every((topic) => topic.status === 'sourced')).toBe(true)
    expect(topics.find((topic) => topic.code === '4.3')?.formulas[0].id).toBe('formula-trr-01')
  })
  it('incorpora el Módulo 3 en valuación y relaciones explícitas', () => {
    const developed = topics.filter((topic) => topic.evidence.sourceIds.includes('fc-2026-modulo-3-elementos-valuacion'))
    expect(developed.map((topic) => topic.code)).toEqual(['3.1','3.2','3.3','4.3','6.3','6.4','6.5'])
    expect(developed.every((topic) => topic.status === 'sourced')).toBe(true)
    expect(topics.find((topic) => topic.code === '3.3')?.formulas.length).toBeGreaterThanOrEqual(5)
  })
  it('incorpora el Módulo 4 solo en decisiones de inversión', () => {
    const main = topics.filter((topic) => topic.evidence.sourceIds.includes('fc-2026-modulo-4-decisiones-inversion'))
    const uncertainty = topics.filter((topic) => topic.evidence.sourceIds.includes('fc-2026-modulo-4-incertidumbre'))
    expect(main.map((topic) => topic.code)).toEqual(['4.1','4.2','4.3','4.4'])
    expect(uncertainty.map((topic) => topic.code)).toEqual(['4.5'])
    expect([...main, ...uncertainty].every((topic) => topic.status === 'sourced')).toBe(true)
  })
  it('incorpora las tres partes del Módulo 5 en los cinco temas de riesgo', () => {
    const ids = new Set(['fc-2026-modulo-5-1-riesgo', 'fc-2026-modulo-5-2-portafolio', 'fc-2026-modulo-5-3-capm'])
    const developed = topics.filter((topic) => topic.evidence.sourceIds.some((id) => ids.has(id)))
    expect(developed.map((topic) => topic.code)).toEqual(['5.1','5.2','5.3','5.4','5.5'])
    expect(developed.every((topic) => topic.status === 'sourced')).toBe(true)
    expect(topics.find((topic) => topic.code === '5.5')?.formulas.some((formula) => formula.id === 'formula-capm-01')).toBe(true)
  })
  it('incorpora el Módulo 6 solo donde aporta contenido explícito', () => {
    const developed = topics.filter((topic) => topic.evidence.sourceIds.includes('fc-2026-modulo-6-financiamiento-apalancamiento'))
    expect(developed.map((topic) => topic.code)).toEqual(['6.1','6.2','6.3','6.5'])
    expect(topics.find((topic) => topic.code === '6.2')?.formulas).toHaveLength(4)
  })
  it('cubre los diez temas oficiales de estructura financiera', () => {
    const ids = new Set(['fc-2026-modulo-7-1-estructura', 'fc-2026-modulo-7-2-modelos', 'fc-2026-modulo-8-dividendos'])
    const developed = topics.filter((topic) => topic.evidence.sourceIds.some((id) => ids.has(id)))
    expect(developed.map((topic) => topic.code)).toEqual(['7.1','7.2','7.3','7.4','7.5','7.6','7.7','7.8','7.9','7.10'])
    expect(developed.every((topic) => topic.status === 'sourced')).toBe(true)
  })
  it('incorpora derivados en los cuatro temas oficiales de la Unidad 9', () => {
    const ids = new Set(['fc-2026-modulo-10-derivados-1', 'fc-modulo-10-derivados-2'])
    const developed = topics.filter((topic) => topic.evidence.sourceIds.some((id) => ids.has(id)))
    expect(developed.map((topic) => topic.code)).toEqual(['9.1','9.2','9.3','9.4'])
    expect(developed.every((topic) => topic.status === 'sourced')).toBe(true)
  })
  it('incorpora Finanzas de corto plazo solo en la Unidad 8', () => {
    const developed = topics.filter((topic) => topic.evidence.sourceIds.includes('fc-2026-modulo-9-finanzas-corto-plazo'))
    expect(developed.map((topic) => topic.code)).toEqual(['8.1','8.2','8.3'])
    expect(developed.every((topic) => topic.status === 'sourced')).toBe(true)
    expect(developed.every((topic) => topic.formulas.length > 0 && topic.examples.length > 0 && topic.questions.length > 0)).toBe(true)
  })
  it('tiene una fuente docente en los cuarenta subtemas', () => {
    expect(topics.every((topic) => topic.status !== 'identified' && topic.evidence.sourceIds.length > 1)).toBe(true)
  })
})
