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
