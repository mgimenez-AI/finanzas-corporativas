import type { Topic, Unit } from './types'

const pending = 'Contenido académico pendiente de incorporar y contrastar con materiales oficiales del curso.'
const topic = (code: string, unitCode: string, officialTitle: string, programPage: number, canonicalTitle = officialTitle, editorialNote?: string): Topic => ({
  code, unitCode, officialTitle, canonicalTitle, programPage, editorialNote, status: 'identified',
  theory: [], formulas: [], examples: [], exercises: [], questions: [],
  evidence: { sourceIds: ['programa-a71-2026'], examEvidenceIds: [] }, pendingNotes: [pending]
})

export const units: Unit[] = [
  { code: '1', officialTitle: 'OBJETIVOS Y ALCANCE DE LAS FINANZAS', canonicalTitle: 'Objetivos y alcance de las finanzas', topics: [
    topic('1.1','1','Introducción a las Finanzas Corporativas',4), topic('1.2','1','Objetivos. Evolución y medición',4), topic('1.3','1','Alcance. Las principales decisiones financieras',4)] },
  { code: '2', officialTitle: 'LA FUNCIÓN FINANCIERA EN LAS EMPRESAS', canonicalTitle: 'La función financiera en las empresas', topics: [
    topic('2.1','2','La empresa y su relación con los mercados financieros',4), topic('2.2','2','La administración financiera.',4,'La administración financiera','Se omite el punto final únicamente en la navegación; se conserva en el título oficial.')] },
  { code: '3', officialTitle: 'ELEMENTOS DE VALUACIÓN', canonicalTitle: 'Elementos de valuación', topics: [
    topic('3.1','3','Diferentes criterios de valuación',4), topic('3.2','3','Modelo básico de valuación a través de flujos de fondos',4), topic('3.3','3','Aplicaciones',4)] },
  { code: '4', officialTitle: 'DECISIONES DE INVERSIÓN', canonicalTitle: 'Decisiones de inversión', topics: [
    topic('4.1','4','Criterios para el análisis de decisiones de inversión',4), topic('4.2','4','Definición y caracterización de flujos de fondos',4), topic('4.3','4','La tasa de descuento',4), topic('4.4','4','Análisis en condiciones inflacionarias',4), topic('4.5','4','Análisis de inversiones en condiciones de incertidumbre',4)] },
  { code: '5', officialTitle: 'EL RIESGO EN FINANZAS', canonicalTitle: 'El riesgo en finanzas', topics: [
    topic('5.1','5','Riesgo e incertidumbre',4), topic('5.2','5','Riesgo y rendimiento',4), topic('5.3','5','Teoría del portafolio. Diversificación',4), topic('5.4','5','Teoría del mercado de capitales',4), topic('5.5','5','Capital Asset Pricing Model',4)] },
  { code: '6', officialTitle: 'DECISIONES DE FINANCIAMIENTO', canonicalTitle: 'Decisiones de financiamiento', topics: [
    topic('6.1','6','Principales decisiones de financiamiento',4), topic('6.2','6','Efecto leverage',4), topic('6.3','6','Determinación del costo de los fondos prestados',4), topic('6.4','6','Determinación del costo de los fondos propios',4), topic('6.5','6','Tasa de costo del capital',4)] },
  { code: '7', officialTitle: 'ESTRUCTURA FINANCIERA', canonicalTitle: 'Estructura financiera', topics: [
    topic('7.1','7','Mercados perfectos y mercados eficientes',4), topic('7.2','7','Creación de valor',4), topic('7.3','7','Teoría de Modigliani y Miller',4), topic('7.4','7','Imperfecciones de mercado y su impacto en la estructura financiera',4), topic('7.5','7','Teoría Tradicional de Financiamiento de la Empresa',4), topic('7.6','7','Modelo General de Financiamiento',4),
    topic('7.7','7','Modelo de Donaldson',5), topic('7.8','7','Modelo de Crecimiento Autosostenido',5), topic('7.9','7','Determinación de necesidades adicionales de fondos',5), topic('7.10','7','Inversión, financiamiento y dividendos. Políticas activas y políticas residuales',5)] },
  { code: '8', officialTitle: 'FINANZAS DE CORTO PLAZO', canonicalTitle: 'Finanzas de corto plazo', topics: [
    topic('8.1','8','Concepto de capital de trabajo. Componentes y medición',5), topic('8.2','8','Liquidez',5), topic('8.3','8','Gestión de activos y pasivos corriente',5,'Gestión de activos y pasivos corrientes','El programa dice “pasivos corriente”. La navegación usa concordancia gramatical sin alterar el metadato oficial.')] },
  { code: '9', officialTitle: 'INSTRUMENTOS DERIVADOS', canonicalTitle: 'Instrumentos derivados', aliases: ['Instrumentos financieros derivados'], topics: [
    topic('9.1','9','Opciones',5), topic('9.2','9','Futuros',5), topic('9.3','9','Otros instrumentos',5), topic('9.4','9','Gestión de riesgos',5)] }
]

export const topics = units.flatMap((unit) => unit.topics)
