# Finanzas Corporativas A71

Aplicación personal de estudio para Finanzas Corporativas, código A71, Plan 2012, FCEA-Udelar. Esta primera entrega contiene la base técnica, el inventario oficial y el sistema de control de cobertura; **no es contenido académicamente completo**.

## Estado

- 9 unidades y 40 subtemas identificados desde el programa vigente de marzo de 2026.
- Todos los temas comienzan en estado `identified`.
- React, TypeScript, Vite, HashRouter y PWA.
- Progreso guardado exclusivamente en el navegador.
- Sin backend, cuentas, APIs ni calculadoras financieras.

## Uso local

Requiere una versión activa LTS de Node.js.

```bash
npm install
npm run dev
```

Comprobación completa:

```bash
npm run lint
npm run test
npm run validate:content
npm run build
npm run preview
```

## Contenido y validación

El inventario está en `src/content/syllabus.ts`. Las reglas académicas y técnicas se describen en `docs/VALIDATION_RULES.md`. Los materiales fuente no se incorporan al repositorio; solo se registran metadatos y contenido original resumido.

## Offline

El service worker se genera en el build. La aplicación debe abrirse al menos una vez con conexión para instalarse y precargar sus recursos. Cuando termina la preparación offline, muestra un aviso sobrio. Si hay una versión nueva, solicita confirmación y, al aceptar, llama a la función `updateSW` del registro para activar el nuevo service worker y recargar con sus recursos.

El manifiesto incorpora iconos originales A71 de 192 × 192 y 512 × 512, más una variante maskable de 512 × 512. No utilizan marcas institucionales. La instalación, el aviso offline y el ciclo de actualización deben comprobarse manualmente sobre el origen HTTPS publicado; el build y las pruebas unitarias no reproducen por completo el ciclo de vida del navegador.

El progreso local puede perderse si se borran los datos del navegador y no se sincroniza entre dispositivos.

## GitHub Pages

La aplicación usa el prefijo `/finanzas-corporativas/` y rutas hash. El workflow despliega `dist/` desde `main` cuando las validaciones terminan correctamente.
