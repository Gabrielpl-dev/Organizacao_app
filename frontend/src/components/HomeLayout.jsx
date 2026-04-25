import { NavLink, Outlet, useLocation } from 'react-router-dom'
import WeekCalendar from './WeekCalendar.jsx'
import { getWeekDates, formatRange, getGreeting } from '../lib/week.js'
import '../styles/home-layout.css'

function topbarLinkClass({ isActive }) {
  return `home-topbar__link${isActive ? ' home-topbar__link--active' : ''}`
}

export default function HomeLayout() {
  const { pathname } = useLocation()
  const isIndex = pathname === '/'
  const today = new Date()
  const week = getWeekDates(today)

  return (
    <>
      <nav className="home-topbar" aria-label="Categorias">
        <NavLink to="/cabelo" className={topbarLinkClass}>cabelo</NavLink>
        <NavLink to="/rosto" className={topbarLinkClass}>rosto</NavLink>
        <NavLink to="/roupa" className={topbarLinkClass}>roupa</NavLink>
      </nav>

      <div className={`home-shell ${isIndex ? 'home-shell--full' : 'home-shell--compact'}`}>
        <div className="home-shell__intro" aria-hidden={!isIndex}>
          <p className="greeting">{getGreeting()}</p>
          <header className="header">
            <span className="eyebrow">— semana —</span>
            <h1 className="range">{formatRange(week)}</h1>
          </header>
          <div className="divider" />
        </div>

        <div className="home-shell__week">
          <WeekCalendar today={today} week={week} />
        </div>

        <div className="home-shell__content">
          <Outlet />
        </div>
      </div>
    </>
  )
}
