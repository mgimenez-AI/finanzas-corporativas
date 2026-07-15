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
