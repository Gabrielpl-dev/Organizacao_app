import { sameDay } from '../lib/week.js'
import '../styles/week.css'

const DAY_LABELS = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB']

export default function WeekCalendar({ today, week }) {
  return (
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
  )
}
