import '../styles/app.css'

const DAY_LABELS = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB']
const MONTHS = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

function getWeekDates(reference = new Date()) {
  const sunday = new Date(reference)
  sunday.setHours(0, 0, 0, 0)
  sunday.setDate(reference.getDate() - reference.getDay())
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(sunday)
    d.setDate(sunday.getDate() + i)
    return d
  })
}

function sameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function formatRange(dates) {
  const first = dates[0]
  const last = dates[6]
  if (first.getMonth() === last.getMonth()) {
    return `${first.getDate()} – ${last.getDate()} de ${MONTHS[first.getMonth()]}`
  }
  return `${first.getDate()} ${MONTHS[first.getMonth()]} – ${last.getDate()} ${MONTHS[last.getMonth()]}`
}

function getGreeting() {
  const h = new Date().getHours()
  if (h >= 5 && h < 12) return 'Bom dia'
  if (h >= 12 && h < 18) return 'Boa tarde'
  return 'Boa noite'
}

export default function Home() {
  const today = new Date()
  const week = getWeekDates(today)

  return (
    <main className="page">
      <p className="greeting">{getGreeting()}</p>

      <header className="header">
        <span className="eyebrow">— semana —</span>
        <h1 className="range">{formatRange(week)}</h1>
      </header>

      <div className="divider" />

      <section className="week" aria-label="Dias da semana">
        {week.map((date, i) => (
          <article
            key={date.toISOString()}
            className={`day${sameDay(date, today) ? ' day--today' : ''}`}
            style={{ animationDelay: `${200 + i * 60}ms` }}
          >
            <span className="day__label">{DAY_LABELS[i]}</span>
            <span className="day__number">{date.getDate()}</span>
          </article>
        ))}
      </section>
    </main>
  )
}
