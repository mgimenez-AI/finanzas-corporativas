# Registro de decisiones

## D-001 — Inicialización excepcional

Se autorizó un único commit mínimo directo en `main` porque el repositorio estaba vacío. Después se creó `setup/base-proyecto`; ningún desarrollo posterior se realiza directamente en `main`.

## D-002 — Rutas

Se usa `HashRouter` para tolerar recargas y enlaces internos bajo el subdirectorio de GitHub Pages sin reglas de reescritura.

## D-003 — Contenido tipado

La primera base usa módulos TypeScript en `src/content`: permiten verificar referencias y modelos junto con validación semántica propia. La teoría futura admite campos Markdown sin mezclarla con componentes visuales.

## D-004 — Unidad 9

Título canónico: “Instrumentos derivados”. Se conserva como alias la formulación sintética “Instrumentos financieros derivados”.

## D-005 — Redacción 8.3

El título oficial se conserva como “Gestión de activos y pasivos corriente”. La navegación muestra “Gestión de activos y pasivos corrientes” y expone la nota editorial; no se altera silenciosamente el metadato oficial.

## D-006 — Punto final en 2.2

El programa contiene “La administración financiera.”. El metadato oficial conserva el punto y la navegación lo omite por consistencia editorial.

## D-007 — PWA

Se usa generación de service worker y precaché del build. El primer acceso requiere conexión; las actualizaciones pueden no estar disponibles hasta recuperar conectividad. El usuario recibe un aviso antes de recargar una versión nueva.

## D-008 — Estado local

`localStorage` cubre leído, favoritos, intentos, errores y simulacros. No hay sincronización; borrar los datos del sitio elimina el progreso.

## D-009 — Dependencias

React: interfaz; React Router: rutas hash; Vite y plugin React: build; vite-plugin-pwa: manifest/service worker; TypeScript: modelos; ESLint: calidad; Vitest, jsdom y Testing Library: pruebas; tsx: validador ejecutable. KaTeX queda previsto, pero no se añade hasta incorporar fórmulas para evitar una dependencia prematura.

## D-010 — Actualización y disponibilidad offline

El retorno `updateSW` de `registerSW` se conserva y se invoca cuando el usuario acepta el aviso de nueva versión. `onOfflineReady` confirma que los recursos quedaron preparados. Las funciones de decisión tienen pruebas unitarias; la instalación, el evento real del service worker y la actualización entre dos despliegues requieren comprobación manual en HTTPS.

## D-011 — Iconos PWA

Se incorporan iconos PNG originales A71 en 192 × 192, 512 × 512 y una variante maskable 512 × 512, derivados de un SVG fuente propio. Usan fondo azul académico, líneas doradas y texto crema, sin logos ni marcas de terceros. El manifiesto usa rutas relativas para que Vite aplique correctamente la base `/finanzas-corporativas/`.

## D-012 — Trazabilidad profunda

`validate:content` valida los `sourceIds` de evidencia académica, teoría, fórmulas, ejemplos, ejercicios y preguntas contra el catálogo general. También bloquea identificadores duplicados y campos académicos obligatorios. Estas reglas no promueven estados académicos.

## D-013 — Incorporación del Módulo 1 de 2026

La presentación `fc-2026-modulo-1-objetivos-alcance` desarrolla principalmente 1.1-1.3 y aporta conexiones introductorias explícitas con 2.2, 6.3-6.5, 7.2 y 7.4. Solo esos temas reciben contenido. Las menciones históricas de otros modelos no sustituyen sus módulos específicos.

La evaluación incluida en la presentación se trata como contexto del curso 2026, no como regla del examen libre del 17/07/2026. Las atribuciones bibliográficas incompletas a Damodaran, Brealey/Myers/Allen y Dumrauf se referencian mediante la presentación hasta disponer de metadatos suficientes.

Los temas intervenidos pasan a `sourced`, no a `practiced`, `exam-validated` ni `verified`. La pregunta abierta “finanzas sostenibles (¿finanzas sociales?)” se conserva como cautela y no como equivalencia afirmada.

## D-014 — Presentación del contenido académico

La vista de tema renderiza las secciones teóricas, fórmulas y preguntas ya contenidas en el modelo tipado. Mantiene un aviso visible de contenido preliminar y diferencia las preguntas originales de la aplicación de las preguntas de examen.

## D-015 — Incorporación del Módulo 2 de 2026

La presentación `fc-2026-modulo-2-funcion-financiera` desarrolla 2.1 y 4.3 y amplía 1.3 y 2.2. Solo esos cuatro temas reciben la nueva fuente. La fórmula `k = Rf + p` se registra como relación introductoria; no se infiere un método para estimar la tasa libre de riesgo o el premio por riesgo.

La diapositiva 13 etiqueta tanto el mercado primario como el secundario con “nuevas emisiones”. Se conserva constancia de la redacción, pero no se incorpora la segunda mención como definición académica válida hasta contar con aclaración docente. No se corrige silenciosamente.

Dumrauf (2013) se registra como bibliografía secundaria `metadata-only`, con los localizadores indicados por la presentación. Los temas continúan como máximo en `sourced`.

## D-016 — Incorporación del Módulo 3 de 2026

La presentación `fc-2026-modulo-3-elementos-valuacion` desarrolla 3.1-3.3 y aporta contenido explícito a 4.3 y 6.3-6.5. Se integran las fórmulas visibles en las diapositivas y se mantienen sus supuestos: Gordon requiere `k > g`; el CPC mostrado no incluye ajuste fiscal explícito.

La mención `P/EBITDA` se conserva como terminología de la presentación, pero se documenta la necesidad de precisar su definición con materiales posteriores. La tabla de múltiplos de Damodaran se trata como ilustración fechada, no como dato estable ni fuente de parámetros para la aplicación.

## D-017 — Incorporación del Módulo 4 de 2026

Se incorporan por separado la presentación general de decisiones de inversión, los dos enunciados prácticos y la presentación específica de incertidumbre. El contenido se limita a 4.1-4.5 y conserva el tratamiento docente: el VPN prima al elegir proyectos mutuamente excluyentes y la tasa de Fisher es la TIR del flujo incremental.

Los casos de reemplazo de maquinaria e inversión con inflación no contienen soluciones. Por ello no se crean ejemplos resueltos ni ejercicios con respuestas inferidas; solo se documenta el conocimiento que exigen y la validación pendiente. Las convenciones de PAM, indexación, impuestos y redondeo deberán contrastarse con soluciones o pautas docentes.

El lote mantiene los temas en `sourced`. No asigna `practiced`, `exam-validated` ni `verified`, y las preguntas incorporadas son originales de la aplicación, no reproducciones de evaluaciones.

## D-018 — Incorporación del Módulo 5 de 2026

Las tres presentaciones se integran como un único recorrido: fundamentos y medición en 5.1-5.2, teoría del portafolio en 5.3 y mercado de capitales/CAPM en 5.4-5.5. Se conservan las diferencias entre RMC —riesgo total y portafolios eficientes— y LMV —beta y cualquier activo—.

Los datos históricos, índices y capturas fechadas se tratan como ilustraciones, no como insumos estables. Los ejemplos docentes se sintetizan conceptualmente y no se presentan como ejercicios oficiales. El lote permanece en `sourced`; no se promueve automáticamente ningún estado académico.

## D-019 — Incorporación del Módulo 6 de 2026

La presentación desarrolla 6.1-6.3 y aporta una relación explícita a 6.5. El efecto leverage se enseña como amplificación del ROE, pero la aplicación documenta que el diferencial favorable no sustituye la comparación con el costo de capital ni una evaluación integral del riesgo.

Los ejemplos se usan para interpretar las fórmulas, sin copiar tablas extensas. No se atribuye cobertura nueva a 6.4 porque este archivo no desarrolla por separado la estimación de fondos propios; se conserva allí el contenido previo trazado a los módulos 3 y 5.

## D-020 — Estructura financiera y numeración de dividendos

Las partes 7.1 y 7.2 cubren 7.1-7.9. El archivo docente “Módulo 8 Política de Dividendos” se integra en 7.10 porque el programa oficial ubica allí inversiones, financiamiento y dividendos; no se confunde con la Unidad 8 oficial de finanzas de corto plazo.

M&M, teoría tradicional y trade-off se mantienen como marcos distintos con sus supuestos. Las menciones a normativa, impuestos y evidencia de mercado se documentan como material docente sujeto a vigencia. Todos los temas quedan como máximo en `sourced`.

## D-021 — Incorporación de instrumentos derivados

Los archivos denominados Módulo 10 se asignan a la Unidad 9 oficial, coherente con sus portadas internas. Se integran opciones, futuros, forwards, swaps y gestión de riesgos sin incorporar calculadoras ni posiciones recomendadas.

No se corrigen silenciosamente tres ambigüedades: long put tiene ganancia acotada si el subyacente no puede ser negativo; short call equilibra en strike más prima; y el no intercambio de principal caracteriza al swap de tasa simple, no necesariamente al de moneda. Se enseña la relación estándar y se deja la diferencia visible para confirmación docente.

## D-022 — Incorporación de Finanzas de corto plazo

El archivo docente “Módulo 9” se asigna a 8.1-8.3 según el programa oficial; su numeración no desplaza derivados de la Unidad 9. Se integran exclusivamente esos tres temas y no se modifican unidades relacionadas solo por los ratios transversales de las últimas diapositivas.

Se conservan y explicitan las siguientes diferencias: la política moderada no garantiza CTN cero si activos corrientes permanentes se financian a largo plazo; los semáforos aparecen rojos aunque el texto califica algunos ratios favorablemente; la brecha no define con precisión su convención de signo; `CCP` y `CCCP` se alternan; Ventas/Activos totales está rotulado como activos fijos; y el CCFG informado como 4.420 no concilia con los saldos, que dan 4.381.

La aplicación usa fórmulas técnicamente consistentes y conserva una nota editorial sobre la redacción docente. Los tres temas pasan a `sourced`, no a `practiced`, `exam-validated` ni `verified`.
