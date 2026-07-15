# Reglas de validación

## Estados académicos

- `identified`: inventariado desde el programa.
- `draft`: contenido preliminar aún no suficientemente contrastado.
- `sourced`: fuentes identificadas y vinculadas.
- `practiced`: ejemplos o ejercicios resueltos y preguntas.
- `exam-validated`: evidencia concreta de examen anterior asociada.
- `verified`: aprobado expresamente por el usuario.

Los estados no avanzan automáticamente. Las comprobaciones técnicas solo aceptan o rechazan datos.

## Errores bloqueantes

- Una cantidad distinta de 9 unidades o 40 subtemas.
- Ausencia de cualquiera de los códigos oficiales o códigos duplicados.
- Títulos vacíos o estados no permitidos.
- Fórmulas sin variables completas.
- Preguntas sin respuesta correcta o explicación.
- Respuesta de opción múltiple ausente de sus opciones.
- Ejercicios sin solución.
- Fuentes incompletas, inexistentes o sin localizador cuando corresponda.
- `exam-validated` sin evidencia de examen.
- `verified` sin aprobación explícita del usuario.
- Identificadores duplicados de fuentes, fórmulas, ejemplos, ejercicios o preguntas.
- Referencias a fuentes inexistentes desde evidencia académica, teoría, fórmulas, ejemplos, ejercicios o preguntas.
- Fórmulas sin id, nombre, expresión, interpretación, variables completas o fuente.
- Secciones teóricas sin id y, salvo marcadores técnicos, sin título, contenido o fuente.
- Ejemplos sin id y, salvo demostraciones técnicas, sin resultado, interpretación o fuente.
- Ejercicios sin id, sin solución o, salvo demostraciones técnicas, sin fuente.
- Preguntas sin id, respuesta correcta, explicación o, salvo demostraciones técnicas, sin fuente.

Los enlaces de navegación se construyen desde identificadores existentes y una ruta desconocida vuelve al inicio. En futuras incorporaciones Markdown se añadirá una comprobación específica de enlaces dentro del texto.

Los placeholders curriculares siguen siendo válidos porque sus colecciones académicas están vacías y su evidencia curricular apunta al programa oficial. Una validación correcta no cambia el estado académico de ningún tema.

## Aprobación explícita

Debe incluir `approved: true`, fecha y nota. Codex no puede agregar este registro sin una aprobación concreta del usuario para el tema correspondiente.
