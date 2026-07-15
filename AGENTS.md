# Instrucciones para agentes

## Prioridades

1. Cobertura controlable de los 40 subtemas oficiales.
2. Exactitud académica y fuentes trazables.
3. Estabilidad, tablet y offline.
4. Cuestionarios y simulacros.

## Reglas académicas

- No inventar teoría, fórmulas, ejemplos, soluciones ni atribuciones.
- No copiar ni subir PDFs, libros, presentaciones o exámenes fuente.
- El programa define inventario, no profundidad.
- Registrar fuentes y localizadores sin inventar páginas.
- Solo el usuario puede aprobar el estado `verified`.
- Un placeholder permanece `identified`; las pruebas técnicas deben llevar `technicalDemo: true`.
- Documentar ambigüedades en `docs/DECISIONS.md`.

## Flujo de trabajo

- No modificar `main` directamente.
- Trabajar mediante ramas y pull requests sin fusión automática.
- Antes de publicar ejecutar `npm run lint`, `npm run test`, `npm run validate:content` y `npm run build`.
- Mantener contenido en `src/content` y presentación en componentes separados.
