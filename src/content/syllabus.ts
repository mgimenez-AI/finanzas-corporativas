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

const module1Source = ['fc-2026-modulo-1-objetivos-alcance']
const sourcedTopic = (code: string) => {
  const item = units.flatMap((unit) => unit.topics).find((candidate) => candidate.code === code)
  if (!item) throw new Error(`No se encontró el tema ${code}`)
  item.status = 'sourced'
  item.evidence.sourceIds.push(...module1Source)
  item.pendingNotes = ['Contenido incorporado desde el Módulo 1 de 2026. Pendiente de contraste práctico, exámenes aplicables y aprobación expresa del usuario.']
  return item
}

const topic11 = sourcedTopic('1.1')
topic11.theory = [
  {
    id: 'theory-1-1-definicion', heading: 'Qué estudian las finanzas', sourceIds: module1Source, preliminary: true,
    markdown: `Las finanzas estudian la asignación intertemporal de recursos en un entorno incierto. El tiempo, el riesgo y la incertidumbre son inseparables de las decisiones sobre dinero y capital.

Las organizaciones económicas y los mercados financieros facilitan esa asignación de recursos. Su función permite que los agentes trasladen recursos entre momentos y contribuye a la creación de valor para quienes toman decisiones financieras.

La disciplina se relaciona con la economía y la administración, pero no se limita a dinero y mercados: también estudia las decisiones de las personas que participan en ellos.`
  },
  {
    id: 'theory-1-1-tipos', heading: 'Tipos de finanzas', sourceIds: module1Source, preliminary: true,
    markdown: `• Finanzas personales: decisiones de individuos y familias.
• Finanzas corporativas: decisiones financieras de empresas.
• Finanzas públicas: administración de recursos del Estado.
• Finanzas internacionales: relaciones entre países y mercados globales.
• Finanzas sostenibles o sociales: denominación planteada de forma abierta en el material docente.
• Finanzas conductuales: estudian cómo el comportamiento influye en las decisiones financieras.`
  },
  {
    id: 'theory-1-1-conceptos', heading: 'Conceptos fundamentales y disciplinas auxiliares', sourceIds: module1Source, preliminary: true,
    markdown: `Flujo de caja: interesa el momento y la magnitud de las entradas y salidas de dinero.

Valor tiempo del dinero: una misma cantidad no tiene el mismo valor en fechas diferentes.

Riesgo y rentabilidad: a mayor riesgo percibido, los inversores exigen mayor rentabilidad.

Diversificación: distribuir la exposición entre activos evita concentrar todo el riesgo en una única fuente.

Inflación: produce pérdida de poder adquisitivo y cambios en precios relativos.

La contabilidad registra y resume operaciones y aporta estados financieros e información de gestión. La Matemática Financiera permite comparar flujos de diferentes fechas. La Estadística permite analizar datos e incertidumbre mediante medidas y probabilidades.`
  },
  {
    id: 'theory-1-1-evolucion', heading: 'Evolución de las finanzas', sourceIds: module1Source, preliminary: true,
    markdown: `La disciplina evolucionó desde un enfoque operativo y descriptivo hacia uno científico y analítico.

• Fines del siglo XIX-1920: tesorería, contabilidad, administración de fondos, operaciones y aspectos legales.
• 1920-década de 1950: financiamiento, liquidez, solvencia, presupuestos y costo de capital.
• Décadas de 1950-1970: asignación de recursos bajo riesgo, mercados de capitales y valor de la firma.
• Década de 1980-actualidad: valoración y gestión del riesgo, derivados, creación de valor, agencia, gobierno corporativo y control.

El enfoque moderno integra economía, matemática y estadística. Entre sus desarrollos se encuentran la teoría de carteras, la separación entre activo libre de riesgo y cartera riesgosa, CAPM, mercados eficientes, arbitraje, estructura de capital y valuación de opciones.`
  },
  {
    id: 'theory-1-1-funcion-digital', heading: 'Evolución tecnológica de la función financiera', sourceIds: module1Source, preliminary: true,
    markdown: `La presentación organiza la evolución tecnológica en capas acumulativas: desde contabilidad básica; gestión financiera y presupuestación; sistemas ERP, modelización y tableros; procesos y analítica; hasta una función basada en nube, big data, inteligencia artificial, ciberseguridad y blockchain.

Esta clasificación describe tendencias de la función financiera. No implica que todas las organizaciones se encuentren en la misma etapa.`
  }
]
topic11.questions = [
  { id: 'question-1-1-01', type: 'multiple-choice', prompt: '¿Qué combinación caracteriza mejor el objeto de las finanzas según el módulo?', options: ['Asignación intertemporal de recursos bajo incertidumbre', 'Registro histórico de operaciones exclusivamente', 'Determinación de impuestos exclusivamente'], correctAnswer: 'Asignación intertemporal de recursos bajo incertidumbre', explanation: 'El tiempo, los recursos, el riesgo y la incertidumbre estructuran el campo financiero.', sourceIds: module1Source },
  { id: 'question-1-1-02', type: 'multiple-choice', prompt: '¿Qué disciplina auxiliar permite comparar flujos ubicados en momentos diferentes?', options: ['Matemática Financiera', 'Contabilidad', 'Derecho societario'], correctAnswer: 'Matemática Financiera', explanation: 'La Matemática Financiera aporta técnicas para valorar flujos en fechas distintas.', sourceIds: module1Source }
]

const topic12 = sourcedTopic('1.2')
topic12.theory = [
  {
    id: 'theory-1-2-objetivo', heading: 'Objetivo contemporáneo de las Finanzas Corporativas', sourceIds: module1Source, preliminary: true,
    markdown: `El propósito es maximizar el valor de mercado de la empresa en términos del capital de sus propietarios —acciones o cuotas sociales— sujeto a restricciones.

La formulación no ignora a los demás grupos de interés: deben considerarse las limitaciones y compromisos derivados de las obligaciones con empleados, clientes, proveedores, acreedores, mercados, autoridades y comunidad.

Maximizar ganancias contables no equivale necesariamente a maximizar valor. El valor también depende del momento de los flujos, su riesgo y el costo de los recursos utilizados.`
  },
  {
    id: 'theory-1-2-medicion', heading: 'Medición de la creación de valor', sourceIds: module1Source, preliminary: true,
    markdown: `El módulo distingue dos perspectivas introductorias:

• VPN positivo: criterio individual y ex ante que considera la vida útil de una decisión o proyecto.
• EVA: criterio global y ex post referido a un ejercicio económico.

El EVA compara el beneficio operativo neto de impuestos generado por los activos con el costo de financiar esos activos. Un resultado positivo indica creación de valor bajo esta métrica; uno negativo indica destrucción de valor.`
  }
]
topic12.formulas = [{
  id: 'formula-eva-01', name: 'Valor Económico Agregado', expression: 'EVA_t = BONDI_t - k_t × A*_(t-1)',
  variables: [
    { symbol: 'EVA_t', name: 'Valor Económico Agregado', definition: 'Valor creado o destruido durante el período t.', unit: 'moneda' },
    { symbol: 'BONDI_t', name: 'Beneficio operativo neto de impuestos', definition: 'Beneficio operativo generado por los activos, neto de impuestos, durante t.', unit: 'moneda' },
    { symbol: 'k_t', name: 'Costo promedio del capital', definition: 'Costo de las fuentes financieras que sostienen los activos durante t.', unit: 'tasa por período' },
    { symbol: 'A*_(t-1)', name: 'Activos operativos netos iniciales', definition: 'Activos operativos netos financiados al comienzo del período.', unit: 'moneda' }
  ],
  assumptions: ['BONDI, costo de capital y activos deben corresponder al mismo período y unidad monetaria.', 'El módulo presenta el resultado operativo y la tasa efectiva como estimadores contables; su ajuste detallado queda pendiente de materiales específicos.'],
  interpretation: 'Mide si el rendimiento operativo después de impuestos supera el costo de financiar los activos operativos.', sourceIds: module1Source
}]
topic12.questions = [
  { id: 'question-1-2-01', type: 'multiple-choice', prompt: '¿Por qué maximizar ganancias no garantiza maximizar el valor?', options: ['Porque el valor también considera tiempo, riesgo y costo del capital', 'Porque las ganancias nunca contienen información financiera', 'Porque el valor solo depende de los dividendos pagados'], correctAnswer: 'Porque el valor también considera tiempo, riesgo y costo del capital', explanation: 'Dos resultados iguales pueden tener distinto momento, riesgo o capital comprometido.', sourceIds: module1Source },
  { id: 'question-1-2-02', type: 'multiple-choice', prompt: '¿Cuándo indica creación de valor la métrica EVA?', options: ['Cuando BONDI supera el costo de financiar los activos', 'Siempre que haya utilidad contable positiva', 'Cuando los activos son mayores que las deudas'], correctAnswer: 'Cuando BONDI supera el costo de financiar los activos', explanation: 'EVA descuenta del BONDI el cargo por el capital empleado.', sourceIds: module1Source }
]

const topic13 = sourcedTopic('1.3')
topic13.theory = [
  {
    id: 'theory-1-3-decisiones', heading: 'Las tres decisiones financieras principales', sourceIds: module1Source, preliminary: true,
    markdown: `Inversión: decide en qué activos invertir, su plazo y su clase o tipo.

Financiamiento: selecciona fuentes, determina la mezcla entre ellas y considera sus costos.

Dividendos: decide cuánto distribuir o retener, cuándo hacerlo y mediante qué forma de pago.

Las tres decisiones se conectan con el objetivo de crear valor y no deben analizarse como compartimentos aislados.`
  },
  {
    id: 'theory-1-3-mercados', heading: 'Decisiones de inversión y de financiamiento', sourceIds: module1Source, preliminary: true,
    markdown: `Como comparación general, las decisiones de inversión suelen desarrollarse en mercados reales, con productos más específicos, mayores costos de transacción y menor disponibilidad de información. Las decisiones de financiamiento suelen desarrollarse en mercados financieros, con productos más estandarizados, menores costos de transacción y más información.

Estas son tendencias comparativas presentadas por la cátedra, no reglas universales sin excepciones.`
  },
  {
    id: 'theory-1-3-regla-valor', heading: 'Cómo contribuye cada decisión al valor', sourceIds: module1Source, preliminary: true,
    markdown: `La decisión de inversión busca activos cuyo rendimiento esperado supere una tasa mínima coherente con su riesgo y financiamiento.

La decisión de financiamiento busca una combinación de deuda y fondos propios que favorezca el valor y cuya estructura se corresponda con los activos.

La decisión de dividendos devuelve efectivo a los propietarios cuando no existen oportunidades capaces de alcanzar la tasa mínima requerida. La devolución puede adoptar, entre otras formas, dividendos o recompra de acciones.`
  }
]
topic13.questions = [
  { id: 'question-1-3-01', type: 'multiple-choice', prompt: '¿Cuáles son las tres decisiones financieras principales?', options: ['Inversión, financiamiento y dividendos', 'Producción, ventas y contabilidad', 'Liquidez, impuestos y auditoría'], correctAnswer: 'Inversión, financiamiento y dividendos', explanation: 'El módulo organiza el alcance de las Finanzas Corporativas alrededor de esas tres decisiones.', sourceIds: module1Source },
  { id: 'question-1-3-02', type: 'multiple-choice', prompt: '¿Cuándo sugiere el esquema introductorio devolver efectivo a los propietarios?', options: ['Cuando no hay oportunidades que alcancen la tasa mínima requerida', 'Siempre que exista efectivo en caja', 'Únicamente cuando no exista deuda'], correctAnswer: 'Cuando no hay oportunidades que alcancen la tasa mínima requerida', explanation: 'La distribución se vincula con las oportunidades actuales y potenciales de inversión.', sourceIds: module1Source }
]

const topic22 = sourcedTopic('2.2')
topic22.theory = [{
  id: 'theory-2-2-organizacion', heading: 'Organización de la función financiera', sourceIds: module1Source, preliminary: true,
  markdown: `En la estructura ilustrativa del módulo, el director financiero (CFO) conduce la política financiera y el planeamiento corporativo.

El tesorero se vincula con gestión del efectivo, gastos de capital, relaciones con bancos, planificación financiera y estrategia. El controller se vincula con contabilidad, estados financieros, impuestos, costos y procesamiento de datos.

Es una estructura funcional típica y no implica que todas las organizaciones distribuyan las responsabilidades exactamente del mismo modo.`
}]

for (const [code, heading, markdown] of [
  ['6.3', 'Fondos de terceros', 'Las deudas financieras de corto y largo plazo constituyen fondos de terceros y generan un costo de deuda, representado como kd. Su determinación completa requiere el módulo específico.'],
  ['6.4', 'Fondos propios', 'El patrimonio representa fondos propios y tiene un costo de oportunidad, representado como ke. Su determinación completa requiere el módulo específico.'],
  ['6.5', 'Costo promedio del capital', 'El costo promedio del capital, k, integra el costo de las fuentes de terceros y de los fondos propios que financian los activos. En este módulo se usa como cargo de capital del EVA; su cálculo detallado queda pendiente.'],
  ['7.2', 'Creación de valor y EVA', 'La creación de valor exige comparar los beneficios generados por los activos con el costo de financiarlos. El módulo introduce el VPN como criterio ex ante y el EVA como medida global ex post. El desarrollo y la fórmula completa se encuentran también en el tema 1.2.'],
  ['7.4', 'Agencia y grupos de interés', 'La empresa puede concebirse como un conjunto de contratos formales e implícitos entre partes con intereses diferentes. El módulo identifica posibles conflictos entre accionistas y administradores, y entre administradores y acreedores financieros. La formulación precisa se contrastará con el módulo específico.']
] as const) {
  const item = sourcedTopic(code)
  item.theory = [{ id: `theory-${code.replace('.', '-')}-module1`, heading, markdown, sourceIds: module1Source, preliminary: true }]
}

export const topics = units.flatMap((unit) => unit.topics)
