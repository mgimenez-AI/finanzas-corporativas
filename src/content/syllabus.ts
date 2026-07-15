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

const module4Source = ['fc-2026-modulo-4-decisiones-inversion']
const module4UncertaintySource = ['fc-2026-modulo-4-incertidumbre']
const addModule4Source = (code: string, sourceIds = module4Source) => {
  const item = units.flatMap((unit) => unit.topics).find((candidate) => candidate.code === code)
  if (!item) throw new Error(`No se encontró el tema ${code}`)
  item.status = 'sourced'
  for (const sourceId of sourceIds) if (!item.evidence.sourceIds.includes(sourceId)) item.evidence.sourceIds.push(sourceId)
  item.pendingNotes = ['Contenido respaldado por materiales docentes de la Unidad 4. Pendiente de soluciones oficiales de los casos, práctica adicional, contraste con exámenes y aprobación del usuario.']
  return item
}

const topic41 = addModule4Source('4.1')
topic41.theory = [
  { id: 'theory-4-1-vpn-tir', heading: 'VPN y TIR', sourceIds: module4Source, preliminary: true, markdown: `El Valor Presente Neto es el valor presente de los flujos derivados de la inversión, descontados a su TRR, menos la inversión inicial. Se acepta cuando VPN ≥ 0 y se ordena por mayor VPN. Admite flujos no normales y tasas diferentes, pero no expresa el tamaño de la inversión.

La TIR es la tasa que iguala el valor presente de los flujos con la inversión. Se acepta cuando TIR ≥ TRR. Con patrón normal suele existir una raíz; cambios múltiples de signo pueden producir TIR múltiples o falta de solución útil. Tampoco resuelve satisfactoriamente proyectos con tasas requeridas distintas.` },
  { id: 'theory-4-1-bc-repago', heading: 'Relación beneficio-costo y repago', sourceIds: module4Source, preliminary: true, markdown: `La relación beneficio-costo divide el valor presente de beneficios entre el valor presente de la inversión. Se acepta cuando es mayor que uno.

El repago mide el tiempo necesario para recuperar la inversión. Es simple, pero la versión tradicional ignora valor tiempo, flujos posteriores y distribución interna; puede aceptar VPN negativo o rechazar VPN positivo y no es una medida de rentabilidad. El repago ajustado descuenta los flujos antes de acumularlos.` },
  { id: 'theory-4-1-reinversion-fisher', heading: 'Reinversión, conflictos y Fisher', sourceIds: module4Source, preliminary: true, markdown: `La TIR supone reinversión de flujos intermedios a la propia TIR; el VPN supone reinversión a la TRR, criterio más conservador cuando TRR < TIR.

VPN, TIR y B/C coinciden sobre aceptar una inversión individual convencional, pero pueden ordenar distinto proyectos excluyentes. El conflicto aparece si las curvas VPN-TRR se cruzan en el cuadrante relevante y la TRR es menor que la tasa de Fisher. Fisher es la TIR de los flujos incrementales. Ante contradicción se elige el mayor VPN.` },
  { id: 'theory-4-1-terminal', heading: 'Enfoque terminal', sourceIds: module4Source, preliminary: true, markdown: `El enfoque terminal explicita una tasa de reinversión: capitaliza los flujos intermedios hasta el fin de la vida útil, obtiene un valor terminal y calcula VPN terminal y TIR terminal. Coincide con VPN si la reinversión ocurre a TRR y con TIR si ocurre a la propia TIR.` }
]
topic41.formulas = [
  { id: 'formula-vpn-01', name: 'Valor Presente Neto', expression: 'VPN = Σ[t=1..n] F_t/(1+k_t)^t - I0', variables: [{ symbol: 'F_t', name: 'Flujo', definition: 'Flujo neto del período t.' }, { symbol: 'k_t', name: 'Tasa', definition: 'TRR aplicable al flujo.' }, { symbol: 'I0', name: 'Inversión inicial', definition: 'Desembolso en cero.' }, { symbol: 'n', name: 'Vida útil', definition: 'Horizonte del proyecto.' }], assumptions: ['Flujos y tasas son coherentes en moneda, inflación, riesgo y período.'], interpretation: 'Mide valor creado en moneda del momento cero.', sourceIds: module4Source },
  { id: 'formula-tir-01', name: 'Tasa Interna de Retorno', expression: '0 = Σ[t=1..n] F_t/(1+TIR)^t - I0', variables: [{ symbol: 'TIR', name: 'Tasa interna', definition: 'Tasa que hace VPN cero.' }, { symbol: 'F_t', name: 'Flujo', definition: 'Flujo del período.' }, { symbol: 'I0', name: 'Inversión', definition: 'Desembolso inicial.' }, { symbol: 'n', name: 'Vida', definition: 'Cantidad de períodos.' }], assumptions: ['La interpretación requiere revisar el patrón de signos.'], interpretation: 'Expresa la tasa implícita del flujo.', sourceIds: module4Source },
  { id: 'formula-bc-01', name: 'Relación beneficio-costo', expression: 'B/C = VP(beneficios) / VP(inversión)', variables: [{ symbol: 'VP(beneficios)', name: 'Beneficios actualizados', definition: 'Valor presente de flujos positivos.' }, { symbol: 'VP(inversión)', name: 'Inversión actualizada', definition: 'Valor presente de desembolsos.' }], assumptions: ['Beneficios e inversión usan la misma tasa.'], interpretation: 'Indica beneficios presentes por unidad invertida.', sourceIds: module4Source }
]
topic41.questions = [{ id: 'question-4-1-01', type: 'multiple-choice', prompt: 'Ante conflicto entre VPN y TIR en proyectos excluyentes, ¿qué criterio prevalece?', options: ['Mayor VPN','Mayor TIR siempre','Menor inversión siempre'], correctAnswer: 'Mayor VPN', explanation: 'Es la solución general indicada por el módulo.', sourceIds: module4Source }, { id: 'question-4-1-02', type: 'multiple-choice', prompt: '¿Qué supuesto de reinversión usa la TIR?', options: ['Reinversión a la propia TIR','Reinversión a cero','Reinversión a inflación'], correctAnswer: 'Reinversión a la propia TIR', explanation: 'Es la condición implícita comparada con la TRR del VPN.', sourceIds: module4Source }]

const topic42 = addModule4Source('4.2')
topic42.theory = [
  { id: 'theory-4-2-principios', heading: 'Principios para formular flujos', sourceIds: module4Source, preliminary: true, markdown: `Base caja: se consideran cobros y pagos, porque disponibilidad y fecha crean valor. Los bienes propios afectados al proyecto ingresan por su costo de oportunidad.

Criterio incremental: flujo con proyecto menos flujo sin proyecto. Deben incluirse repercusiones positivas o negativas sobre actividades interdependientes.

La vida útil es el horizonte relevante y al final se computa valor residual. Para evaluar la inversión en sí misma se excluyen financiamiento, intereses, amortizaciones y dividendos.` },
  { id: 'theory-4-2-modelos', heading: 'Modelos de flujo', sourceIds: module4Source, preliminary: true, markdown: `El enfoque inversión mide rentabilidad independiente del financiamiento y descuenta al CPC. El enfoque del accionista o residual incorpora intereses, amortizaciones y aportes propios, y descuenta a la TRR patrimonial. El modelo de repago organiza flujos para identificar cuándo se recupera la inversión inicial.

Variables docentes: ventas, costos, depreciaciones, gastos preliminares, inversiones y valores residuales deben tratarse incrementalmente y después de efectos tributarios cuando corresponda.` }
]
topic42.formulas = [{ id: 'formula-incremental-01', name: 'Regla con-sin', expression: 'Flujo incremental = Flujo con proyecto - Flujo sin proyecto', variables: [{ symbol: 'Flujo con proyecto', name: 'Escenario con inversión', definition: 'Cobros y pagos si se ejecuta.' }, { symbol: 'Flujo sin proyecto', name: 'Escenario base', definition: 'Cobros y pagos sin ejecutarla.' }], assumptions: ['Ambos escenarios usan el mismo horizonte y convenciones.'], interpretation: 'Aísla los efectos atribuibles al proyecto.', sourceIds: module4Source }]
topic42.questions = [{ id: 'question-4-2-01', type: 'multiple-choice', prompt: '¿Debe incluirse un bien propio usado por el proyecto?', options: ['Sí, por su costo de oportunidad','No, porque no se compra','Solo por valor contable'], correctAnswer: 'Sí, por su costo de oportunidad', explanation: 'Su uso impide otra aplicación del recurso.', sourceIds: module4Source }]

addModule4Source('4.3').theory.push({ id: 'theory-4-3-indicadores-module4', heading: 'La tasa en los indicadores de inversión', sourceIds: module4Source, preliminary: true, markdown: `El VPN y B/C descuentan a la TRR. El enfoque inversión usa CPC; el residual usa TRR de fondos propios. El repago ajustado también usa descuento. La elección de tasa puede alterar el orden entre proyectos y debe ser coherente con el flujo.` })

const topic44 = addModule4Source('4.4')
topic44.theory = [
  { id: 'theory-4-4-corrientes', heading: 'Precios corrientes', sourceIds: module4Source, preliminary: true, markdown: `Se proyecta cada ingreso y egreso usando su índice específico, reconociendo cambios en precios relativos. Luego pueden deflactarse los flujos con un índice representativo del poder de compra de la empresa. Deben incluirse pérdidas por exposición de activos monetarios y mantener explícita la hipótesis de estructura financiera.` },
  { id: 'theory-4-4-constantes', heading: 'Precios constantes', sourceIds: module4Source, preliminary: true, markdown: `Se expresan flujos a precios del momento cero y se descuentan con tasas reales. El enfoque supone precios relativos constantes, movimientos compatibles de precios, costos, revaluaciones e intereses, ausencia de rubros monetarios, equivalencia de renta económica y fiscal y estructura financiera constante. Si esos supuestos no se cumplen, el enfoque simplificado puede distorsionar el valor.` },
  { id: 'theory-4-4-casos', heading: 'Casos docentes pendientes de solución', sourceIds: ['fc-2026-modulo-4-ejemplos'], preliminary: true, markdown: `El lote incluye un caso de reemplazo de maquinaria con venta del activo viejo, efecto fiscal, depreciación y ahorros, y un caso de inflación con IPC, índice salarial, índice de costos, capital de trabajo monetario, PAM y deflactación. No se suministran soluciones; quedan registrados como material pendiente y no como ejemplos resueltos.` }
]
topic44.questions = [{ id: 'question-4-4-01', type: 'multiple-choice', prompt: '¿Qué tasa corresponde a flujos en moneda constante?', options: ['Tasa real','Cualquier tasa nominal','TIR histórica'], correctAnswer: 'Tasa real', explanation: 'Debe mantenerse coherencia real-real.', sourceIds: module4Source }]

const topic45 = addModule4Source('4.5', module4UncertaintySource)
topic45.theory = [
  { id: 'theory-4-5-riesgo', heading: 'Riesgo e incertidumbre', sourceIds: module4UncertaintySource, preliminary: true, markdown: `En riesgo se identifican eventos, dimensiones y probabilidades, permitiendo distribuciones objetivas. En incertidumbre se conocen eventos pero no sus probabilidades, por lo que se usan distribuciones subjetivas. La normal es útil pero puede sobreutilizarse y no representar asimetría, curtosis o colas.` },
  { id: 'theory-4-5-aproximaciones', heading: 'Aproximaciones al tratamiento', sourceIds: module4UncertaintySource, preliminary: true, markdown: `Pronósticos conservadores usan valores pesimistas, con arbitrariedad y posible efecto multiplicador. Estimación a varios niveles usa pesimista, normal y optimista sin probabilidades.

Tasa ajustada agrega riesgo a la tasa, con dificultad para estimar la prima. Equivalencia a certeza corrige cada flujo incierto y luego descuenta a Rf, pero el factor es difícil de determinar.

Sensibilidad cambia variables individualmente, detecta factores cruciales, pero depende del analista, ignora probabilidades e interrelaciones. Escenarios cambian simultáneamente variables correlacionadas e incluyen factores micro y macro, pero tampoco asignan necesariamente probabilidades.` },
  { id: 'theory-4-5-arboles', heading: 'Árboles de decisiones', sourceIds: module4UncertaintySource, preliminary: true, markdown: `Representan decisiones secuenciales, alternativas, resultados y probabilidades. Se calcula VPN cierto o esperado de cada alternativa y se selecciona la de mayor VPN esperado, retrocediendo desde resultados futuros hacia los nodos de decisión.` },
  { id: 'theory-4-5-simulacion', heading: 'Hertz y Monte Carlo', sourceIds: module4UncertaintySource, preliminary: true, markdown: `Hertz desagrega variables de mercado, inversión y costos, asigna distribuciones —frecuentemente discretas como simplificación—, calcula VPN/TIR por alternativa y obtiene su distribución.

Monte Carlo identifica variables críticas, distribuciones y correlaciones; genera conjuntamente valores aleatorios compatibles, calcula un flujo e indicador por escenario y repite miles de veces. El histograma aproxima la distribución, permitiendo media, percentiles, dispersión y probabilidad de inconveniencia. Ignorar correlaciones altera la desviación del indicador; el sentido depende de signos y correlación.` }
]
topic45.questions = [{ id: 'question-4-5-01', type: 'multiple-choice', prompt: '¿Qué diferencia central separa riesgo e incertidumbre?', options: ['Conocer probabilidades de los eventos','Usar siempre VPN','Tener flujos negativos'], correctAnswer: 'Conocer probabilidades de los eventos', explanation: 'En riesgo se conocen; en incertidumbre no.', sourceIds: module4UncertaintySource }, { id: 'question-4-5-02', type: 'multiple-choice', prompt: '¿Qué debe respetar una simulación Monte Carlo conjunta?', options: ['Distribuciones y correlaciones','Solo promedios','Solo escenarios pesimistas'], correctAnswer: 'Distribuciones y correlaciones', explanation: 'Ambas determinan el comportamiento conjunto.', sourceIds: module4UncertaintySource }]

const module51Source = ['fc-2026-modulo-5-1-riesgo']
const module52Source = ['fc-2026-modulo-5-2-portafolio']
const module53Source = ['fc-2026-modulo-5-3-capm']
const addModule5Source = (code: string, sourceIds: string[]) => {
  const item = units.flatMap((unit) => unit.topics).find((candidate) => candidate.code === code)
  if (!item) throw new Error(`No se encontró el tema ${code}`)
  item.status = 'sourced'
  for (const sourceId of sourceIds) if (!item.evidence.sourceIds.includes(sourceId)) item.evidence.sourceIds.push(sourceId)
  item.pendingNotes = ['Contenido respaldado por las presentaciones docentes de la Unidad 5. Pendiente de práctica adicional, contraste con exámenes y aprobación del usuario.']
  return item
}

const topic51 = addModule5Source('5.1', [...module51Source, ...module52Source])
topic51.theory = [
  { id: 'theory-5-1-concepto', heading: 'Riesgo e incertidumbre financiera', sourceIds: module51Source, preliminary: true, markdown: `En finanzas, riesgo es la variación respecto de lo esperado, tanto pérdidas como ganancias, derivada de no conocer el futuro. Toda empresa asume riesgos para crear valor y la exposición condiciona el rendimiento requerido. La cantidad aceptada depende de la actitud individual frente al riesgo.` },
  { id: 'theory-5-1-factores', heading: 'Factores y primas de riesgo', sourceIds: module51Source, preliminary: true, markdown: `Los factores pueden ser operativos, tecnológicos, geopolíticos, financieros —tasas, tipo de cambio y precios—, crediticios o regulatorios. Los modelos agrupan riesgos propios del activo y riesgos de mercado. La prima es la compensación adicional exigida por asumirlos y se agrega a la tasa libre de riesgo.` },
  { id: 'theory-5-1-sistematico', heading: 'Riesgo sistemático y no sistemático', sourceIds: module52Source, preliminary: true, markdown: `El riesgo sistemático proviene del mercado, afecta a todos los activos con distinta intensidad y no se elimina diversificando. El riesgo no sistemático o idiosincrático es propio del activo o empresa; al no correlacionarse plenamente entre inversiones, tiende a desaparecer en un portafolio suficientemente diversificado. El mercado no recompensa un riesgo que puede eliminarse sin costo.` }
]
topic51.formulas = [{ id: 'formula-trr-prima-5-01', name: 'TRR y prima de riesgo', expression: 'k = Rf + P', variables: [{ symbol: 'k', name: 'TRR', definition: 'Tasa de retorno requerida.' }, { symbol: 'Rf', name: 'Tasa libre de riesgo', definition: 'Retorno de referencia sin riesgo de crédito en el marco utilizado.' }, { symbol: 'P', name: 'Prima de riesgo', definition: 'Compensación adicional por los riesgos asumidos.' }], assumptions: ['La referencia y la inversión deben ser coherentes en plazo y moneda.'], interpretation: 'El riesgo se incorpora al rendimiento exigido mediante primas.', sourceIds: module51Source }]

const topic52 = addModule5Source('5.2', module51Source)
topic52.theory = [
  { id: 'theory-5-2-tradeoff', heading: 'Rendimiento esperado y riesgo', sourceIds: module51Source, preliminary: true, markdown: `El rendimiento puede analizarse ex ante —esperado— o ex post —realizado—. Inversores aversos al riesgo requieren mayor rendimiento esperado para aceptar mayor riesgo. Los mercados aportan precios, retornos históricos, tasas de referencia y comportamiento conjunto, pero los rendimientos y su variabilidad no son estables en el tiempo.` },
  { id: 'theory-5-2-medidas', heading: 'Medidas estadísticas', sourceIds: module51Source, preliminary: true, markdown: `La media aritmética resume el retorno periódico; la geométrica refleja mejor el crecimiento acumulado. Varianza y desvío estándar miden dispersión alrededor de la media; el coeficiente de variación relativiza la dispersión respecto del retorno medio. Covarianza y correlación describen el movimiento conjunto. La normal es una aproximación útil, pero no garantiza que los retornos futuros sigan esa distribución.` },
  { id: 'theory-5-2-volatilidad', heading: 'Efecto de la volatilidad', sourceIds: module51Source, preliminary: true, markdown: `A igual media aritmética, una mayor dispersión reduce la media geométrica y el valor compuesto final. Por eso la volatilidad tiene un efecto negativo sobre la acumulación, aunque el desvío estándar es solo una primera aproximación al riesgo financiero.` }
]
topic52.formulas = [
  { id: 'formula-retorno-esperado-01', name: 'Retorno medio esperado', expression: 'E(Rj) = Σ[t=1..n] Rj,t / n', variables: [{ symbol: 'Rj,t', name: 'Retorno observado', definition: 'Rendimiento del activo j en t.' }, { symbol: 'n', name: 'Observaciones', definition: 'Cantidad de períodos.' }, { symbol: 'E(Rj)', name: 'Retorno esperado', definition: 'Media estimada del rendimiento.' }], assumptions: ['Las observaciones reciben igual peso.'], interpretation: 'Usa la media muestral como estimador del retorno esperado.', sourceIds: module51Source },
  { id: 'formula-varianza-retorno-01', name: 'Varianza muestral del retorno', expression: 's²j = Σ(Rj,t - R̄j)² / (n - 1)', variables: [{ symbol: 's²j', name: 'Varianza', definition: 'Dispersión muestral.' }, { symbol: 'Rj,t', name: 'Retorno', definition: 'Observación del período.' }, { symbol: 'R̄j', name: 'Media', definition: 'Retorno promedio.' }, { symbol: 'n', name: 'Observaciones', definition: 'Tamaño de la muestra.' }], assumptions: ['Se estima una varianza poblacional desde una muestra.'], interpretation: 'Mayor varianza implica mayor dispersión histórica.', sourceIds: module51Source },
  { id: 'formula-cv-retorno-01', name: 'Coeficiente de variación', expression: 'CVj = σj / R̄j', variables: [{ symbol: 'CVj', name: 'Coeficiente de variación', definition: 'Riesgo relativo.' }, { symbol: 'σj', name: 'Desvío estándar', definition: 'Dispersión del retorno.' }, { symbol: 'R̄j', name: 'Retorno medio', definition: 'Media usada como escala.' }], assumptions: ['El retorno medio debe permitir una interpretación económica válida del cociente.'], interpretation: 'Compara dispersión por unidad de retorno medio.', sourceIds: module51Source }
]
topic52.questions = [{ id: 'question-5-2-01', type: 'multiple-choice', prompt: 'A igual media aritmética, ¿qué efecto tiene una mayor volatilidad sobre el crecimiento compuesto?', options: ['Reduce el valor final esperado por capitalización','No tiene ningún efecto','Siempre aumenta la media geométrica'], correctAnswer: 'Reduce el valor final esperado por capitalización', explanation: 'La dispersión abre una brecha entre media aritmética y geométrica.', sourceIds: module51Source }]

const topic53 = addModule5Source('5.3', module52Source)
topic53.theory = [
  { id: 'theory-5-3-portafolio', heading: 'Portafolios y diversificación', sourceIds: module52Source, preliminary: true, markdown: `Un portafolio combina activos con pesos relativos, rendimientos esperados, riesgos y plazo. Su retorno es el promedio ponderado de los retornos; su riesgo depende además de covarianzas. Siempre que la correlación sea menor que uno existe beneficio de diversificación; con correlación -1 puede existir una combinación de riesgo nulo.` },
  { id: 'theory-5-3-frontera', heading: 'Frontera eficiente y portafolio óptimo', sourceIds: module52Source, preliminary: true, markdown: `Markowitz busca minimizar riesgo para un retorno dado o maximizar retorno para un riesgo dado. Los portafolios por debajo del de mínima varianza están dominados; el tramo superior forma la frontera eficiente. El portafolio óptimo es la tangencia entre esa frontera y la curva de indiferencia más alta alcanzable, por lo que depende de la aversión individual al riesgo.` }
]
topic53.formulas = [
  { id: 'formula-retorno-portafolio-01', name: 'Retorno esperado del portafolio', expression: 'E(Rp) = Σ xi E(Ri)', variables: [{ symbol: 'E(Rp)', name: 'Retorno del portafolio', definition: 'Media ponderada esperada.' }, { symbol: 'xi', name: 'Peso', definition: 'Participación del activo i.' }, { symbol: 'E(Ri)', name: 'Retorno del activo', definition: 'Rendimiento esperado individual.' }], assumptions: ['Los pesos suman uno.'], interpretation: 'El retorno se combina linealmente por participaciones.', sourceIds: module52Source },
  { id: 'formula-varianza-portafolio-2-01', name: 'Varianza de portafolio de dos activos', expression: 'σp² = x²σA² + (1-x)²σB² + 2x(1-x)ρABσAσB', variables: [{ symbol: 'σp²', name: 'Varianza del portafolio', definition: 'Riesgo total de la combinación.' }, { symbol: 'x', name: 'Peso de A', definition: 'Participación del activo A.' }, { symbol: 'σA', name: 'Desvío de A', definition: 'Riesgo individual de A.' }, { symbol: 'σB', name: 'Desvío de B', definition: 'Riesgo individual de B.' }, { symbol: 'ρAB', name: 'Correlación', definition: 'Movimiento conjunto normalizado.' }], assumptions: ['El peso de B es 1-x.'], interpretation: 'La correlación determina el beneficio de diversificar.', sourceIds: module52Source },
  { id: 'formula-correlacion-01', name: 'Coeficiente de correlación', expression: 'ρAB = Cov(RA,RB) / (σA σB)', variables: [{ symbol: 'ρAB', name: 'Correlación', definition: 'Coeficiente entre -1 y 1.' }, { symbol: 'Cov(RA,RB)', name: 'Covarianza', definition: 'Variación conjunta.' }, { symbol: 'σA', name: 'Desvío A', definition: 'Dispersión de A.' }, { symbol: 'σB', name: 'Desvío B', definition: 'Dispersión de B.' }], assumptions: ['Los desvíos son no nulos.'], interpretation: 'Normaliza la covarianza para comparar relaciones.', sourceIds: module52Source }
]
topic53.questions = [{ id: 'question-5-3-01', type: 'multiple-choice', prompt: '¿Cuándo aporta diversificación un portafolio de dos activos?', options: ['Cuando la correlación es menor que 1','Solo cuando la correlación es 1','Solo si ambos retornos son iguales'], correctAnswer: 'Cuando la correlación es menor que 1', explanation: 'El desvío del portafolio queda por debajo del promedio ponderado individual.', sourceIds: module52Source }]

const topic54 = addModule5Source('5.4', module53Source)
topic54.theory = [
  { id: 'theory-5-4-rmc', heading: 'Recta del Mercado de Capitales', sourceIds: module53Source, preliminary: true, markdown: `Al combinar el activo libre de riesgo con portafolios riesgosos se obtienen rectas. La dominante es tangente a la frontera de Markowitz en el portafolio de mercado M y constituye la nueva frontera eficiente. Su pendiente es el premio por unidad de riesgo total.` },
  { id: 'theory-5-4-separacion', heading: 'Teorema de separación', sourceIds: module53Source, preliminary: true, markdown: `La decisión se separa en seleccionar el portafolio riesgoso eficiente M y luego combinarlo con el activo libre de riesgo según preferencias. Con peso en M menor que uno se presta; igual a uno se mantiene M; mayor que uno implica endeudarse a la tasa libre de riesgo bajo los supuestos del modelo.` },
  { id: 'theory-5-4-caracteristica', heading: 'Recta característica y beta', sourceIds: module53Source, preliminary: true, markdown: `La recta característica relaciona mediante regresión el retorno de un activo con el del mercado. Alfa es la intersección, beta la sensibilidad al mercado y el error recoge riesgo no sistemático. Beta cero corresponde al activo libre de riesgo; menor que uno, defensivo; igual a uno, mercado; mayor que uno, agresivo.` }
]
topic54.formulas = [
  { id: 'formula-rmc-01', name: 'Recta del Mercado de Capitales', expression: 'E(Rp) = Rf + [(E(Rm)-Rf)/σm] σp', variables: [{ symbol: 'E(Rp)', name: 'Retorno del portafolio', definition: 'Retorno esperado eficiente.' }, { symbol: 'Rf', name: 'Tasa libre de riesgo', definition: 'Intersección de la recta.' }, { symbol: 'E(Rm)', name: 'Retorno del mercado', definition: 'Retorno esperado de M.' }, { symbol: 'σm', name: 'Riesgo del mercado', definition: 'Desvío de M.' }, { symbol: 'σp', name: 'Riesgo del portafolio', definition: 'Desvío total de P.' }], assumptions: ['P combina el activo libre de riesgo y M.'], interpretation: 'Precio por unidad de riesgo total en portafolios eficientes.', sourceIds: module53Source },
  { id: 'formula-recta-caracteristica-01', name: 'Recta característica', expression: 'Ri = αi + βi Rm + εi', variables: [{ symbol: 'Ri', name: 'Retorno del activo', definition: 'Rendimiento observado de i.' }, { symbol: 'αi', name: 'Alfa', definition: 'Intersección estimada.' }, { symbol: 'βi', name: 'Beta', definition: 'Sensibilidad al mercado.' }, { symbol: 'Rm', name: 'Retorno del mercado', definition: 'Rendimiento del portafolio M.' }, { symbol: 'εi', name: 'Error', definition: 'Componente idiosincrático.' }], assumptions: ['Relación lineal estimada para un período y mercado definidos.'], interpretation: 'Separa el componente asociado al mercado del específico.', sourceIds: module53Source },
  { id: 'formula-beta-01', name: 'Beta', expression: 'βi = Cov(Ri,Rm) / Var(Rm)', variables: [{ symbol: 'βi', name: 'Beta del activo', definition: 'Indicador de riesgo sistemático.' }, { symbol: 'Cov(Ri,Rm)', name: 'Covarianza con mercado', definition: 'Movimiento conjunto.' }, { symbol: 'Var(Rm)', name: 'Varianza del mercado', definition: 'Dispersión de M.' }], assumptions: ['Mercado y período de estimación están definidos.'], interpretation: 'Mide la respuesta del activo a cambios del mercado.', sourceIds: module53Source }
]

const topic55 = addModule5Source('5.5', module53Source)
topic55.theory = [
  { id: 'theory-5-5-capm', heading: 'CAPM y Línea del Mercado de Valores', sourceIds: module53Source, preliminary: true, markdown: `El CAPM estima el retorno requerido de equilibrio como tasa libre de riesgo más prima de mercado por beta. La Línea del Mercado de Valores aplica a activos individuales y portafolios, eficientes o no. Un activo por encima de la línea ofrece más retorno que el requerido por su beta; el ajuste de precios debería llevarlo al equilibrio bajo los supuestos del modelo.` },
  { id: 'theory-5-5-supuestos', heading: 'Supuestos y alcance', sourceIds: module53Source, preliminary: true, markdown: `Supone mercados eficientes, inversores aversos al riesgo, expectativas homogéneas, horizonte común, ausencia de impuestos y costos de transacción y capacidad de prestar o endeudarse a Rf. La RMC usa desvío total y solo portafolios eficientes; la LMV usa beta y sirve para cualquier activo.` },
  { id: 'theory-5-5-desempeno', heading: 'Medidas de desempeño', sourceIds: module53Source, preliminary: true, markdown: `Sharpe mide exceso de retorno por desvío total; Treynor, por beta; alfa de Jensen mide el retorno por encima del predicho por CAPM. Deben compararse carteras con bases temporales y referencias coherentes.` }
]
topic55.formulas = [
  { id: 'formula-capm-01', name: 'CAPM', expression: 'E(Ri) = Rf + [E(Rm)-Rf] βi', variables: [{ symbol: 'E(Ri)', name: 'Retorno requerido', definition: 'Rendimiento de equilibrio del activo.' }, { symbol: 'Rf', name: 'Tasa libre de riesgo', definition: 'Retorno sin riesgo del modelo.' }, { symbol: 'E(Rm)-Rf', name: 'Prima de mercado', definition: 'Premio por riesgo sistemático unitario.' }, { symbol: 'βi', name: 'Beta', definition: 'Cantidad de riesgo sistemático.' }], assumptions: ['Se mantienen los supuestos del CAPM.'], interpretation: 'Solo el riesgo sistemático recibe prima.', sourceIds: module53Source },
  { id: 'formula-beta-portafolio-01', name: 'Beta del portafolio', expression: 'βp = Σ xi βi', variables: [{ symbol: 'βp', name: 'Beta del portafolio', definition: 'Riesgo sistemático agregado.' }, { symbol: 'xi', name: 'Peso', definition: 'Participación del activo.' }, { symbol: 'βi', name: 'Beta individual', definition: 'Sensibilidad del activo.' }], assumptions: ['Los pesos suman uno.'], interpretation: 'Beta se agrega como promedio ponderado.', sourceIds: module53Source },
  { id: 'formula-sharpe-01', name: 'Índice de Sharpe', expression: 'Sharpe = (Rp - Rf) / σp', variables: [{ symbol: 'Rp', name: 'Retorno del portafolio', definition: 'Rendimiento evaluado.' }, { symbol: 'Rf', name: 'Tasa libre de riesgo', definition: 'Referencia.' }, { symbol: 'σp', name: 'Desvío total', definition: 'Riesgo total del portafolio.' }], assumptions: ['Retornos y riesgo comparten período.'], interpretation: 'Exceso de retorno por unidad de riesgo total.', sourceIds: module53Source },
  { id: 'formula-treynor-01', name: 'Índice de Treynor', expression: 'Treynor = (Rp - Rf) / βp', variables: [{ symbol: 'Rp', name: 'Retorno del portafolio', definition: 'Rendimiento evaluado.' }, { symbol: 'Rf', name: 'Tasa libre de riesgo', definition: 'Referencia.' }, { symbol: 'βp', name: 'Beta del portafolio', definition: 'Riesgo sistemático.' }], assumptions: ['Beta es una medida pertinente para la cartera.'], interpretation: 'Exceso de retorno por unidad de riesgo sistemático.', sourceIds: module53Source }
]
topic55.questions = [{ id: 'question-5-5-01', type: 'multiple-choice', prompt: '¿Qué riesgo remunera el CAPM?', options: ['El riesgo sistemático medido por beta','Todo riesgo idiosincrático','Solo la varianza contable'], correctAnswer: 'El riesgo sistemático medido por beta', explanation: 'El riesgo diversificable no recibe prima en equilibrio.', sourceIds: module53Source }]

export const topics = units.flatMap((unit) => unit.topics)
