import { useMemo, useState } from 'react'
import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom'
import { topics, units } from './content/syllabus'
import { sources } from './content/sources'
import type { AcademicStatus, Progress, Topic } from './content/types'
import { emptyProgress, loadProgress, saveProgress, toggleCode } from './lib/progress'

const statusLabels: Record<AcademicStatus, string> = {
  identified: 'Identificado', draft: 'Borrador', sourced: 'Con fuentes', practiced: 'Practicado',
  'exam-validated': 'Contrastado con examen', verified: 'Verificado por el usuario'
}

function useProgressState() {
  const [progress, setProgress] = useState<Progress>(() => typeof localStorage === 'undefined' ? emptyProgress : loadProgress())
  const update = (next: Progress) => { setProgress(next); saveProgress(next) }
  return [progress, update] as const
}

export default function App() {
  const [progress, setProgress] = useProgressState()
  return <div className="app-shell">
    <header><Link to="/" className="brand"><span>A71</span><strong>Finanzas Corporativas</strong></Link><div className="exam"><small>Examen</small><b>17/07/2026 · 18:00</b></div></header>
    <Routes>
      <Route path="/" element={<Dashboard progress={progress} />} />
      <Route path="/tema/:code" element={<TopicPage progress={progress} setProgress={setProgress} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    <footer>Herramienta personal de estudio · FCEA-Udelar · El estado académico es independiente de las validaciones técnicas.</footer>
  </div>
}

function Dashboard({ progress }: { progress: Progress }) {
  const [filter, setFilter] = useState<'all' | AcademicStatus>('all')
  const visibleUnits = useMemo(() => units.map((unit) => ({ ...unit, topics: unit.topics.filter((topic) => filter === 'all' || topic.status === filter) })).filter((unit) => unit.topics.length), [filter])
  return <main>
    <section className="hero">
      <div><p className="eyebrow">Plan 2012 · FCEA-Udelar</p><h1>Mapa de estudio verificable</h1><p>El programa oficial está inventariado por completo. El desarrollo académico se incorporará por lotes y no se considera validado hasta tu aprobación.</p></div>
      <div className="coverage"><strong>40/40</strong><span>subtemas identificados</span><small>{progress.readTopicCodes.length} leídos · {progress.favoriteTopicCodes.length} favoritos</small></div>
    </section>
    <section className="notice" role="status"><b>Base académica en preparación.</b> El inventario oficial está completo; algunos temas ya contienen material preliminar con fuentes y los restantes continúan pendientes.</section>
    <div className="toolbar"><h2>Unidades del programa</h2><label>Filtrar por estado <select value={filter} onChange={(event) => setFilter(event.target.value as 'all' | AcademicStatus)}><option value="all">Todos</option>{Object.entries(statusLabels).map(([key,label]) => <option key={key} value={key}>{label}</option>)}</select></label></div>
    <div className="unit-grid">{visibleUnits.map((unit) => <section className="unit-card" key={unit.code}><div className="unit-heading"><span>{unit.code.padStart(2,'0')}</span><div><h3>{unit.canonicalTitle}</h3><small>{unit.topics.length} subtemas</small></div></div><ol>{unit.topics.map((topic) => <li key={topic.code}><Link to={`/tema/${topic.code}`}><span><b>{topic.code}</b> {topic.canonicalTitle}</span><Status status={topic.status} /></Link></li>)}</ol></section>)}</div>
  </main>
}

function Status({ status }: { status: AcademicStatus }) { return <span className={`status status-${status}`}>{statusLabels[status]}</span> }

function TopicPage({ progress, setProgress }: { progress: Progress; setProgress: (value: Progress) => void }) {
  const { code } = useParams(); const topic = topics.find((item) => item.code === code)
  if (!topic) return <Navigate to="/" replace />
  const read = progress.readTopicCodes.includes(topic.code); const favorite = progress.favoriteTopicCodes.includes(topic.code)
  const update = (field: 'readTopicCodes' | 'favoriteTopicCodes') => setProgress({ ...progress, [field]: toggleCode(progress[field], topic.code) })
  return <main className="topic-page"><Link to="/" className="back">← Volver al mapa</Link>
    <div className="topic-header"><div><p className="eyebrow">Unidad {topic.unitCode} · Subtema {topic.code}</p><h1>{topic.canonicalTitle}</h1><p className="official">Título oficial: {topic.officialTitle}</p></div><Status status={topic.status} /></div>
    <div className="topic-actions"><button className={read ? 'active' : ''} onClick={() => update('readTopicCodes')}>{read ? '✓ Leído' : 'Marcar como leído'}</button><button className={favorite ? 'active' : ''} onClick={() => update('favoriteTopicCodes')}>{favorite ? '★ Favorito' : '☆ Añadir a favoritos'}</button></div>
    {topic.status === 'identified'
      ? <section className="warning"><h2>Contenido académico pendiente</h2><p>Este registro confirma la presencia del tema en el programa oficial. Todavía no contiene desarrollo suficientemente contrastado con materiales docentes.</p></section>
      : <section className="warning"><h2>Contenido preliminar con fuentes</h2><p>Este tema incorpora materiales docentes identificados, pero todavía requiere contraste práctico, evidencia de exámenes aplicables y aprobación expresa del usuario.</p></section>}
    {topic.editorialNote && <section><h2>Nota editorial</h2><p>{topic.editorialNote}</p></section>}
    {topic.theory.map((section) => <section key={section.id} className="academic-section"><h2>{section.heading}</h2><div className="academic-text">{section.markdown}</div>{section.preliminary && <small className="preliminary">Contenido preliminar · no verificado</small>}</section>)}
    {topic.formulas.length > 0 && <section><h2>Fórmulas</h2>{topic.formulas.map((formula) => <article className="formula-card" key={formula.id}><h3>{formula.name}</h3><code>{formula.expression}</code><p>{formula.interpretation}</p><h4>Variables</h4><dl>{formula.variables.map((variable) => <div key={variable.symbol}><dt>{variable.symbol}</dt><dd>{variable.definition}{variable.unit ? ` (${variable.unit})` : ''}</dd></div>)}</dl><h4>Supuestos y cautelas</h4><ul>{formula.assumptions.map((assumption) => <li key={assumption}>{assumption}</li>)}</ul></article>)}</section>}
    {topic.questions.length > 0 && <section><h2>Preguntas de comprensión</h2><p className="question-note">Preguntas originales de la aplicación, no extraídas de exámenes oficiales.</p>{topic.questions.map((question) => <details className="question-card" key={question.id}><summary>{question.prompt}</summary>{question.options && <ul>{question.options.map((option) => <li key={option}>{option}</li>)}</ul>}<p><b>Respuesta:</b> {question.correctAnswer}</p><p>{question.explanation}</p></details>)}</section>}
    <Coverage topic={topic} />
    <section><h2>Trazabilidad</h2><dl><div><dt>Fuentes</dt><dd>{topic.evidence.sourceIds.map((id) => sources.find((source) => source.id === id)?.title ?? id).join('; ')}</dd></div><div><dt>Programa</dt><dd>Contenido desagregado, página {topic.programPage}</dd></div><div><dt>Estado</dt><dd>{statusLabels[topic.status]}</dd></div><div><dt>Pendiente</dt><dd>{topic.pendingNotes.join(' ')}</dd></div></dl></section>
  </main>
}

function Coverage({ topic }: { topic: Topic }) {
  const cells = [['Programa', true],['Teoría',!!topic.theory.length],['Fórmulas',!!topic.formulas.length],['Ejemplos',!!topic.examples.length],['Ejercicios',!!topic.exercises.length],['Preguntas',!!topic.questions.length],['Examen',!!topic.evidence.examEvidenceIds.length]] as const
  return <section><h2>Matriz de cobertura</h2><div className="coverage-row">{cells.map(([label,done]) => <div key={label}><span>{done ? '✓' : '—'}</span><small>{label}</small></div>)}</div></section>
}
