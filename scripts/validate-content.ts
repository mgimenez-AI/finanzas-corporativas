import { units } from '../src/content/syllabus.ts'
import { sources } from '../src/content/sources.ts'
import { validateContent } from '../src/lib/validateContent.ts'

const errors = validateContent(units, sources)
if (errors.length) {
  console.error(`Validación de contenido fallida (${errors.length}):`)
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}
console.log(`Contenido válido: ${units.length} unidades y ${units.flatMap((unit) => unit.topics).length} subtemas oficiales.`)
