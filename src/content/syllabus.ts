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

const module2Source = ['fc-2026-modulo-2-funcion-financiera']
const addModule2Source = (code: string) => {
  const item = units.flatMap((unit) => unit.topics).find((candidate) => candidate.code === code)
  if (!item) throw new Error(`No se encontró el tema ${code}`)
  item.status = 'sourced'
  if (!item.evidence.sourceIds.includes(module2Source[0])) item.evidence.sourceIds.push(...module2Source)
  item.pendingNotes = ['Contenido respaldado por presentaciones docentes de 2026. Pendiente de ejercicios, contraste con exámenes aplicables y aprobación expresa del usuario.']
  return item
}

addModule2Source('1.3').theory.push({
  id: 'theory-1-3-criterios-module2', heading: 'Criterio económico de las decisiones', sourceIds: module2Source, preliminary: true,
  markdown: `La decisión de inversión busca incorporar activos que, integrados a la organización, generen más dinero que su costo. Es una asignación de recursos a través del tiempo.

La decisión de financiamiento determina fuentes apropiadas para sostener las inversiones, obtenidas directamente o mediante mercados financieros. También exige considerar su plazo, por ejemplo corto o largo plazo. La presentación habla de fuentes “óptimas”, pero no desarrolla todavía un procedimiento para calcular esa combinación.

La política de dividendos decide cómo y cuándo remunerar al accionista. Distribuir recursos retribuye al propietario, pero también reduce los fondos que permanecen disponibles en la empresa.`
})

const topic21 = addModule2Source('2.1')
topic21.theory = [
  {
    id: 'theory-2-1-unidades', heading: 'Unidades superavitarias y deficitarias', sourceIds: module2Source, preliminary: true,
    markdown: `Los mercados financieros conectan unidades que disponen de fondos con unidades que necesitan obtenerlos.

Una unidad superavitaria posterga consumo presente y ofrece recursos. Una unidad deficitaria anticipa consumo o financia inversión mediante recursos recibidos. La presentación utiliza hogares o personas y empresas como ejemplos, respectivamente; no son categorías permanentes, porque cualquier agente puede cambiar de posición financiera.

El dinero fluye hacia la unidad deficitaria y, en sentido opuesto, se entrega un activo financiero (AF) que representa derechos para el proveedor de fondos y obligaciones para quien los recibe.`
  },
  {
    id: 'theory-2-1-funciones', heading: 'Funciones de los mercados financieros', sourceIds: module2Source, preliminary: true,
    markdown: `Los mercados financieros transfieren fondos desde unidades superavitarias hacia unidades deficitarias. De esta forma proveen financiamiento y facilitan procesos de inversión y crecimiento.

También hacen posible trasladar consumo entre momentos: el proveedor de fondos posterga consumo y el receptor lo anticipa. Esa transferencia intertemporal explica por qué una cantidad futura debe relacionarse con una cantidad presente mediante una tasa de descuento.`
  },
  {
    id: 'theory-2-1-intermediacion', heading: 'Relación directa e intermediación', sourceIds: module2Source, preliminary: true,
    markdown: `En una relación directa, la unidad deficitaria obtiene fondos y entrega activos financieros a los aportantes mediante el mercado.

La transferencia también puede canalizarse mediante intermediarios financieros. El módulo identifica bancos, fondos de inversión y compañías de seguros. No desarrolla todavía la transformación de plazos, la regulación ni la creación de dinero; esos contenidos no deben inferirse de este esquema introductorio.`
  },
  {
    id: 'theory-2-1-tipos-mercado', heading: 'Tipos de mercados financieros', sourceIds: module2Source, preliminary: true,
    markdown: `La presentación clasifica los mercados desde criterios diferentes, que pueden superponerse:

• Mercado de dinero o monetario: corto plazo.
• Mercado de capitales: financiamiento de largo plazo.
• Mercado de derivados: productos financieros complejos.
• Mercado de cambios o divisas: intercambio de monedas.
• Mercado de seguros: activos de cobertura.
• Mercado interbancario: préstamos entre bancos.
• Mercado primario: nuevas emisiones.
• Renta fija: instrumentos de deuda.
• Renta variable: acciones.

La diapositiva también asigna “nuevas emisiones” al mercado secundario. Esa redacción se registra como inconsistencia pendiente y no se incorpora como definición válida.`
  }
]
topic21.questions = [
  { id: 'question-2-1-01', type: 'multiple-choice', prompt: '¿Qué función cumplen los mercados financieros entre unidades superavitarias y deficitarias?', options: ['Canalizan fondos entre ambas', 'Eliminan todo riesgo financiero', 'Garantizan rentabilidad a los aportantes'], correctAnswer: 'Canalizan fondos entre ambas', explanation: 'Permiten transferir recursos desde quienes los ofrecen hacia quienes necesitan financiamiento.', sourceIds: module2Source },
  { id: 'question-2-1-02', type: 'multiple-choice', prompt: '¿Qué ocurre con el consumo de una unidad superavitaria cuando aporta fondos?', options: ['Posterga consumo presente', 'Anticipa consumo futuro', 'Elimina definitivamente su consumo'], correctAnswer: 'Posterga consumo presente', explanation: 'Entrega recursos actuales a cambio de derechos financieros vinculados con recursos futuros.', sourceIds: module2Source },
  { id: 'question-2-1-03', type: 'multiple-choice', prompt: '¿Cuál es un intermediario financiero mencionado en el módulo?', options: ['Banco', 'Mercado primario', 'Acción ordinaria'], correctAnswer: 'Banco', explanation: 'El material menciona bancos, fondos de inversión y compañías de seguros.', sourceIds: module2Source }
]

const topic22Module2 = addModule2Source('2.2')
topic22Module2.theory.push({
  id: 'theory-2-2-jerarquia-module2', heading: 'Jerarquía y ampliación de responsabilidades', sourceIds: module2Source, preliminary: true,
  markdown: `El organigrama docente ubica al gerente general (CEO) sobre el gerente financiero (CFO). Bajo el CFO aparecen las funciones de tesorería y controller.

El tesorero se relaciona con flujo de fondos, administración de créditos, decisiones de inversión y financiamiento, y planificación financiera. Estas tareas complementan las ya identificadas en el Módulo 1: gestión de efectivo, gastos de capital, relaciones bancarias y estrategia.

El controller se relaciona con contabilidad, sistemas de información, contabilidad de costos e impuestos. Se integran con estados financieros y procesamiento de datos mencionados en el Módulo 1. La estructura es ilustrativa: las responsabilidades pueden distribuirse de otro modo según la organización.`
})
topic22Module2.questions = [
  { id: 'question-2-2-01', type: 'multiple-choice', prompt: '¿Qué función se asocia con el tesorero en el organigrama del módulo?', options: ['Administración de créditos', 'Contabilidad de costos', 'Liquidación exclusiva de impuestos'], correctAnswer: 'Administración de créditos', explanation: 'El módulo asigna al tesorero flujo de fondos, créditos, decisiones financieras y planificación.', sourceIds: module2Source },
  { id: 'question-2-2-02', type: 'multiple-choice', prompt: '¿Qué función se asocia con el controller?', options: ['Sistemas de información', 'Selección exclusiva de inversiones', 'Intermediación bancaria'], correctAnswer: 'Sistemas de información', explanation: 'Contabilidad, sistemas de información, costos e impuestos aparecen bajo controller.', sourceIds: module2Source }
]

const topic43 = addModule2Source('4.3')
topic43.theory = [
  {
    id: 'theory-4-3-concepto', heading: 'Tasa de descuento y valor presente', sourceIds: module2Source, preliminary: true,
    markdown: `La tasa de descuento relaciona consumo presente y futuro y permite calcular el valor presente de importes futuros. Por eso constituye la base conceptual del Valor Presente Neto (VPN).

En el mercado se observan múltiples tasas, asociadas, entre otros factores, con geografía, sector, tiempo y riesgo de los flujos. No existe una tasa única que deba aplicarse automáticamente a toda decisión. La tasa relevante puede variar a través del tiempo.`
  },
  {
    id: 'theory-4-3-trr', heading: 'Tasa de Retorno Requerida', sourceIds: module2Source, preliminary: true,
    markdown: `La Tasa de Retorno Requerida (TRR) es la compensación que exige un proveedor de fondos por renunciar al consumo presente y asumir el riesgo de invertir en un activo específico.

También representa el costo de oportunidad de elegir un activo frente a alternativas disponibles. El mercado aporta referencias para observar una tasa libre de riesgo y premios por riesgo. La gerencia financiera debe determinar una TRR coherente con los flujos que evalúa.

El módulo no establece todavía cómo seleccionar la tasa libre de riesgo ni cómo estimar la prima. Tampoco define tratamiento de inflación, periodicidad o estructura temporal; esos aspectos permanecen pendientes.`
  },
  {
    id: 'theory-4-3-errores', heading: 'Cautelas de aplicación', sourceIds: module2Source, preliminary: true,
    markdown: `No debe utilizarse cualquier tasa observable sin relacionarla con las características y el riesgo de los flujos. Tampoco debe asumirse que la tasa es constante si el análisis requiere reconocer variaciones temporales.

La prima por riesgo no es una constante universal. La representación introductoria de este módulo no debe confundirse automáticamente con CAPM, costo de fondos propios o costo promedio del capital.`
  }
]
topic43.formulas = [{
  id: 'formula-trr-01', name: 'Tasa de Retorno Requerida', expression: 'k = Rf + p',
  variables: [
    { symbol: 'k', name: 'Tasa de retorno requerida', definition: 'Rendimiento exigido para compensar espera y riesgo.', unit: 'tasa por período' },
    { symbol: 'Rf', name: 'Tasa libre de riesgo', definition: 'Referencia de mercado para diferir consumo sin asumir el riesgo específico considerado.', unit: 'tasa por período' },
    { symbol: 'p', name: 'Premio por riesgo', definition: 'Compensación adicional exigida por el riesgo del activo o de sus flujos.', unit: 'tasa por período' }
  ],
  assumptions: ['Rf, p y k deben corresponder al mismo período y convención.', 'La fórmula es introductoria y no define el método de estimación de sus componentes.', 'La tasa debe ser coherente con riesgo, moneda e inflación de los flujos; estos ajustes se desarrollarán con materiales posteriores.'],
  interpretation: 'La rentabilidad requerida combina compensación por diferir consumo y compensación por riesgo.', sourceIds: module2Source
}]
topic43.questions = [
  { id: 'question-4-3-01', type: 'multiple-choice', prompt: '¿Qué representa la TRR para un proveedor de fondos?', options: ['Compensación por espera y riesgo', 'Una tasa contable histórica', 'La inflación observada exclusivamente'], correctAnswer: 'Compensación por espera y riesgo', explanation: 'Compensa la renuncia al consumo presente y el riesgo del activo específico.', sourceIds: module2Source },
  { id: 'question-4-3-02', type: 'multiple-choice', prompt: '¿Por qué no corresponde aplicar una misma tasa a cualquier flujo?', options: ['Porque las tasas se relacionan con características, tiempo y riesgo de los flujos', 'Porque el valor presente nunca utiliza tasas', 'Porque toda tasa debe ser cero'], correctAnswer: 'Porque las tasas se relacionan con características, tiempo y riesgo de los flujos', explanation: 'El módulo destaca que existen múltiples tasas y que pueden variar en el tiempo.', sourceIds: module2Source },
  { id: 'question-4-3-03', type: 'multiple-choice', prompt: 'En k = Rf + p, ¿qué representa p?', options: ['Premio por riesgo', 'Valor presente', 'Pago de dividendos'], correctAnswer: 'Premio por riesgo', explanation: 'Es la compensación adicional exigida por asumir riesgo.', sourceIds: module2Source }
]

const module3Source = ['fc-2026-modulo-3-elementos-valuacion']
const addModule3Source = (code: string) => {
  const item = units.flatMap((unit) => unit.topics).find((candidate) => candidate.code === code)
  if (!item) throw new Error(`No se encontró el tema ${code}`)
  item.status = 'sourced'
  if (!item.evidence.sourceIds.includes(module3Source[0])) item.evidence.sourceIds.push(...module3Source)
  item.pendingNotes = ['Contenido respaldado por el Módulo 3 de 2026. Pendiente de más ejercicios, contraste con exámenes aplicables y aprobación expresa del usuario.']
  return item
}

const topic31 = addModule3Source('3.1')
topic31.theory = [
  { id: 'theory-3-1-proceso', heading: 'Valuación, valor, precio y costo', sourceIds: module3Source, preliminary: true, markdown: `Valuar es asignar valor a una inversión o fuente de financiamiento mediante supuestos, estimaciones y técnicas. La valuación permite estimar creación de valor: una decisión resulta atractiva cuando el valor estimado supera su costo o precio.

Valor depende de beneficios económicos futuros medidos mediante flujos de fondos. Precio surge de una negociación entre partes dispuestas a intercambiar. Costo es el monto de recursos requerido para acceder al activo o instrumento. Los tres conceptos pueden diferir.` },
  { id: 'theory-3-1-absoluta', heading: 'Criterios de valuación absoluta', sourceIds: module3Source, preliminary: true, markdown: `Valor en libros: surge de registros y normas contables; en general no incorpora expectativas de ganancias futuras. Sus dificultades incluyen calidad de utilidades, flexibilidad normativa y posible manipulación de información.

Valor de liquidación: resulta de vender los activos y pagar los pasivos; puede ser nulo. Valora activos separados de la organización y puede surgir de remate o negociación. En general es inferior al valor en libros.

Valor de mercado: surge de oferta y demanda para activos o pasivos negociables. Tiende a ser más observable cuando existe liquidez. Los activos reales suelen ser específicos, con menos información y mayores costos de transacción; la similitud de activos financieros facilita comparaciones.

Valor justo: se basa en la capacidad de generar flujos futuros, se aplica a activos reales o financieros y requiere determinar flujos específicos. Es central para el VPN y la medición de creación de valor.` },
  { id: 'theory-3-1-relativa', heading: 'Valuación relativa y elección del método', sourceIds: module3Source, preliminary: true, markdown: `La valuación relativa supone que un activo debería guardar relación con lo que el mercado paga por un activo comparable. Utiliza múltiplos o ratios como P/E, P/BV y P/EBITDA.

Procedimiento: 1) identificar el activo a valorar; 2) seleccionar un comparable; 3) elegir una variable homogénea; 4) calcular el múltiplo del comparable; 5) aplicarlo a la variable del activo.

No existe un método universalmente mejor. La elección depende del ciclo de vida, mercado y sector, disponibilidad de comparables, tipo de activo —incluidos intangibles o maquinaria específica— y contexto de la valuación.` }
]
topic31.formulas = [{ id: 'formula-multiplo-01', name: 'Valuación mediante múltiplo comparable', expression: 'Valor_activo = (Valor_comparable / Variable_comparable) × Variable_activo', variables: [{ symbol: 'Valor_activo', name: 'Valor estimado', definition: 'Valor del activo objeto de análisis.', unit: 'moneda' }, { symbol: 'Valor_comparable', name: 'Valor del comparable', definition: 'Valor observado del activo comparable.', unit: 'moneda' }, { symbol: 'Variable_comparable', name: 'Variable del comparable', definition: 'Magnitud usada para construir el múltiplo.' }, { symbol: 'Variable_activo', name: 'Variable del activo', definition: 'Magnitud homogénea del activo a valorar.' }], assumptions: ['El comparable y la variable deben ser económicamente comparables.', 'Las unidades y definiciones de la variable deben ser consistentes.'], interpretation: 'Aplica al activo el múltiplo observado en un comparable.', sourceIds: module3Source }]
topic31.examples = [{ id: 'example-multiplo-uruguaycom', title: 'Acción valorada mediante P/E', prompt: 'URUGUAYCOM tiene ganancias por acción de 34 y se usa como comparable una acción con P/E 18.', steps: ['Identificar P/E comparable = 18.', 'Identificar ganancias por acción del activo = 34.', 'Multiplicar 18 × 34.'], result: 'Valor estimado = 612.', interpretation: 'El resultado depende de que el comparable y sus expectativas sean adecuados.', sourceIds: module3Source }]
topic31.questions = [{ id: 'question-3-1-01', type: 'multiple-choice', prompt: '¿Cuál concepto depende de una negociación entre partes?', options: ['Precio','Valor','Costo contable exclusivamente'], correctAnswer: 'Precio', explanation: 'El módulo separa precio negociado de valor económico y costo de acceso.', sourceIds: module3Source }, { id: 'question-3-1-02', type: 'multiple-choice', prompt: '¿Qué exige primero una valuación relativa?', options: ['Identificar activo y comparable','Suponer que todo activo vale en libros','Ignorar el sector'], correctAnswer: 'Identificar activo y comparable', explanation: 'La comparabilidad es condición central del procedimiento.', sourceIds: module3Source }]

const topic32 = addModule3Source('3.2')
topic32.theory = [{ id: 'theory-3-2-modelo', heading: 'Modelo básico por flujos esperados', sourceIds: module3Source, preliminary: true, markdown: `El valor de un activo es el valor presente de los flujos de caja que se espera genere durante un período relevante. El modelo usa base caja y se aparta de magnitudes puramente devengadas, aunque algunas normas contables admiten flujos descontados.

Sus fundamentos son: flujos esperados específicos; ubicación temporal de cada flujo; y tasa de descuento coherente. La tasa recoge valor tiempo del dinero y riesgo de la actividad. Una inconsistencia entre flujo, período, moneda, inflación o riesgo y la tasa invalida la comparación.` }]
topic32.formulas = [{ id: 'formula-valor-flujos-01', name: 'Valor presente de flujos esperados', expression: 'V0 = Σ[j=1..n] Fj / (1 + k)^j', variables: [{ symbol: 'V0', name: 'Valor actual', definition: 'Valor del activo en el momento cero.', unit: 'moneda' }, { symbol: 'Fj', name: 'Flujo esperado', definition: 'Flujo de caja esperado al final del período j.', unit: 'moneda' }, { symbol: 'k', name: 'Tasa de descuento', definition: 'Tasa de retorno requerida coherente con el flujo.', unit: 'tasa por período' }, { symbol: 'n', name: 'Horizonte relevante', definition: 'Cantidad de períodos considerados.', unit: 'períodos' }], assumptions: ['Los flujos ocurren al final de cada período.', 'k y los flujos usan la misma periodicidad, moneda y base nominal o real.'], interpretation: 'Suma cada flujo esperado expresado en moneda del momento cero.', sourceIds: module3Source }]
topic32.questions = [{ id: 'question-3-2-01', type: 'multiple-choice', prompt: '¿Qué tres elementos sostienen la valuación por flujos?', options: ['Flujos esperados, tiempo y tasa de descuento','Precio, costo histórico y utilidad contable','Solo dividendos'], correctAnswer: 'Flujos esperados, tiempo y tasa de descuento', explanation: 'Son los fundamentos explícitos del modelo.', sourceIds: module3Source }]

const topic33 = addModule3Source('3.3')
topic33.theory = [
  { id: 'theory-3-3-credito-bono', heading: 'Créditos, préstamos y bonos', sourceIds: module3Source, preliminary: true, markdown: `El valor de un crédito es el valor presente de los pagos que debe y se espera que realice el deudor. Hipotecas, créditos al consumo y ventas en cuotas pueden representarse como cuotas iguales.

El valor de un préstamo o bono es el valor presente de intereses y amortizaciones de capital. Si intereses y capital se pagan conjuntamente, cada flujo total debe descontarse en su fecha.` },
  { id: 'theory-3-3-acciones', heading: 'Valuación de acciones', sourceIds: module3Source, preliminary: true, markdown: `Una acción mantenida indefinidamente vale el presente de todos los dividendos esperados. Si se vende en n, vale el presente de dividendos hasta n más el precio de venta esperado.

Con dividendos perpetuos que crecen a tasa constante g, el modelo de crecimiento exige k > g. Para crecimiento diferencial se descuentan los dividendos del período supernormal y se suma, descontado, el valor terminal calculado cuando comienza el crecimiento estable.` },
  { id: 'theory-3-3-empresa', heading: 'Valuación de empresa y patrimonio', sourceIds: module3Source, preliminary: true, markdown: `Debe distinguirse valor de activos operativos y valor del patrimonio: Valor activos = Valor deudas + Valor patrimonio; por tanto, patrimonio = activos - deudas.

El patrimonio puede estimarse por valor de acción multiplicado por cantidad de acciones, especialmente en empresas maduras con política de dividendos, o por flujo libre para propietarios cuando no existe patrón estable de ganancias/dividendos o el mercado es menos desarrollado.

El flujo libre para activos operativos queda disponible para acreedores y propietarios después de inversión en capital de trabajo y activos fijos. El flujo para patrimonio deduce servicio de deuda e incorpora su efecto fiscal. El valor residual debe agregarse en ambos enfoques.` },
  { id: 'theory-3-3-flujo-libre', heading: 'Procedimiento para construir el flujo libre', sourceIds: module3Source, preliminary: true, markdown: `Ventas menos costo de ventas, gastos operativos y depreciaciones produce resultado operativo antes de impuestos. Se resta impuesto sobre resultado operativo y se suman depreciaciones/amortizaciones para obtener flujo operativo. Luego se restan inversiones en capital de trabajo y activos fijos.

Ese flujo valora activos operativos y se descuenta al CPC. Para valorar patrimonio se restan intereses y amortizaciones y se suma el efecto fiscal del servicio de deuda; se descuenta a la TRR de fondos propios.` }
]
topic33.formulas = [
  { id: 'formula-anualidad-credito-01', name: 'Crédito con cuotas constantes', expression: 'VP = C × [1 - 1/(1+k)^n] / k', variables: [{ symbol: 'VP', name: 'Valor presente', definition: 'Valor actual del crédito.', unit: 'moneda' }, { symbol: 'C', name: 'Cuota', definition: 'Pago constante por período.', unit: 'moneda' }, { symbol: 'k', name: 'Tasa', definition: 'Tasa de descuento por período.' }, { symbol: 'n', name: 'Cantidad de cuotas', definition: 'Número de pagos.' }], assumptions: ['Cuotas iguales, vencidas y periódicas.', 'k corresponde al período de la cuota.'], interpretation: 'Valora una anualidad de pagos iguales.', sourceIds: module3Source },
  { id: 'formula-bono-01', name: 'Préstamo o bono', expression: 'VP = Σ[t=1..n] (I_t + C_t) / (1+k)^t', variables: [{ symbol: 'I_t', name: 'Interés', definition: 'Interés pagado en t.', unit: 'moneda' }, { symbol: 'C_t', name: 'Capital', definition: 'Amortización de capital en t.', unit: 'moneda' }, { symbol: 'k', name: 'Tasa requerida', definition: 'Tasa por período.' }, { symbol: 'n', name: 'Plazo', definition: 'Cantidad de períodos.' }], assumptions: ['Se incluyen todos los pagos contractuales esperados.'], interpretation: 'Descuenta intereses y capital en sus fechas.', sourceIds: module3Source },
  { id: 'formula-accion-tenencia-01', name: 'Acción con venta final', expression: 'V0 = Σ[t=1..n] D_t/(1+k)^t + P_n/(1+k)^n', variables: [{ symbol: 'D_t', name: 'Dividendo', definition: 'Dividendo esperado en t.' }, { symbol: 'P_n', name: 'Precio final', definition: 'Precio esperado de venta en n.' }, { symbol: 'k', name: 'TRR', definition: 'Tasa requerida del accionista.' }, { symbol: 'n', name: 'Horizonte', definition: 'Período de venta.' }], assumptions: ['Dividendos y precio son expectativas.', 'La tasa es coherente con el riesgo patrimonial.'], interpretation: 'Suma dividendos y precio final descontados.', sourceIds: module3Source },
  { id: 'formula-gordon-01', name: 'Dividendos con crecimiento constante', expression: 'V0 = D1 / (k - g)', variables: [{ symbol: 'D1', name: 'Dividendo siguiente', definition: 'Dividendo esperado en el período 1.' }, { symbol: 'k', name: 'TRR', definition: 'Tasa requerida.' }, { symbol: 'g', name: 'Crecimiento', definition: 'Tasa constante perpetua.' }], assumptions: ['k > g.', 'El crecimiento es constante y perpetuo.'], interpretation: 'Valora una perpetuidad creciente.', sourceIds: module3Source },
  { id: 'formula-identidad-empresa-01', name: 'Identidad de valor de la empresa', expression: 'Valor_activos = Valor_deudas + Valor_patrimonio', variables: [{ symbol: 'Valor_activos', name: 'Activos operativos', definition: 'Valor de los activos.' }, { symbol: 'Valor_deudas', name: 'Deudas', definition: 'Valor de obligaciones financieras.' }, { symbol: 'Valor_patrimonio', name: 'Patrimonio', definition: 'Valor residual de propietarios.' }], assumptions: ['Los componentes se miden en la misma fecha y criterio.'], interpretation: 'El patrimonio es el valor residual después de deudas.', sourceIds: module3Source }
]
topic33.questions = [{ id: 'question-3-3-01', type: 'multiple-choice', prompt: '¿Qué integra el valor de una acción vendida en n?', options: ['Dividendos hasta n y precio final descontados','Solo precio actual','Solo valor en libros'], correctAnswer: 'Dividendos hasta n y precio final descontados', explanation: 'Ambas fuentes de efectivo pertenecen al accionista.', sourceIds: module3Source }, { id: 'question-3-3-02', type: 'multiple-choice', prompt: '¿Qué condición exige Gordon?', options: ['k > g','g > k','k = 0'], correctAnswer: 'k > g', explanation: 'Es el supuesto señalado para convergencia del valor.', sourceIds: module3Source }, { id: 'question-3-3-03', type: 'multiple-choice', prompt: '¿Qué se resta para pasar del valor de activos al patrimonio?', options: ['Valor de deudas','Dividendos futuros exclusivamente','Depreciación acumulada exclusivamente'], correctAnswer: 'Valor de deudas', explanation: 'El patrimonio es el valor residual.', sourceIds: module3Source }]

addModule3Source('4.3').theory.push({ id: 'theory-4-3-coherencia-module3', heading: 'Tasa coherente con el objeto valorado', sourceIds: module3Source, preliminary: true, markdown: `La tasa debe corresponder a los aportantes y al flujo: los flujos para propietarios se descuentan a la TRR de fondos propios; los flujos disponibles para todos los financiadores se descuentan al costo promedio del capital. La TRR es el costo de oportunidad de una alternativa de riesgo similar.` })

addModule3Source('6.3').theory.push({ id: 'theory-6-3-flujos-deuda-module3', heading: 'Flujo del acreedor y costo para el deudor', sourceIds: module3Source, preliminary: true, markdown: `La deuda exige amortización y compensación mediante intereses. Intereses, amortizaciones y comisiones forman el flujo del acreedor; su TIR aproxima la TRR exigida. Para obtener el costo de deuda de la empresa se consideran además gastos e impuestos en el flujo del deudor. Condiciones como plazo, gracia, apoyo en cuenta y garantías afectan el costo.` })
addModule3Source('6.4').theory.push({ id: 'theory-6-4-riesgo-residual-module3', heading: 'Costo de oportunidad y riesgo residual', sourceIds: module3Source, preliminary: true, markdown: `Los propietarios reciben derechos de propiedad y soportan el riesgo residual de empresa o proyecto. Su TRR es el rendimiento abandonado en una alternativa de riesgo similar. Economía, sector, actividad, competencia, innovación, management, estructura operativa y de costos, endeudamiento y regulación pueden afectar el rendimiento exigido.` })
const topic65Module3 = addModule3Source('6.5')
topic65Module3.theory.push({ id: 'theory-6-5-cpc-module3', heading: 'Costo promedio del capital', sourceIds: module3Source, preliminary: true, markdown: `La TRR de las inversiones combina el costo de deuda kd y el costo de fondos propios ke, ponderados por su participación en el financiamiento total. El módulo denomina esta tasa Costo Promedio del Capital (CPC) y la identifica con WACC.` })
topic65Module3.formulas = [{ id: 'formula-wacc-01', name: 'Costo promedio del capital', expression: 'CPC = kd × D/(D+FP) + ke × FP/(D+FP)', variables: [{ symbol: 'CPC', name: 'Costo promedio del capital', definition: 'TRR de los activos financiados.' }, { symbol: 'kd', name: 'Costo de deuda', definition: 'Costo de fondos de terceros.' }, { symbol: 'ke', name: 'Costo de fondos propios', definition: 'TRR de propietarios.' }, { symbol: 'D', name: 'Deuda', definition: 'Monto de fondos de terceros.' }, { symbol: 'FP', name: 'Fondos propios', definition: 'Monto patrimonial.' }], assumptions: ['Los ponderadores suman uno.', 'Los costos y montos corresponden a una misma fecha y base.', 'El módulo no incorpora aquí un ajuste fiscal explícito en la fórmula.'], interpretation: 'Promedia costos de las fuentes según su peso financiero.', sourceIds: module3Source }]

export const topics = units.flatMap((unit) => unit.topics)
