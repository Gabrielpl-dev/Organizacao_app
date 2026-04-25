import { NavLink, useLocation } from 'react-router-dom'
import '../styles/navbar.css'

const HOME_PATHS = ['/', '/cabelo', '/rosto', '/roupa']

function HomeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="nav-icon"
      aria-hidden="true"
    >
      <path d="M4.5 12.8V20a1 1 0 001 1H9.5v-4.5h5V21H19a1 1 0 001-1v-7.2L12 5.8l-7.5 7z" />
      <path
        d="M2.5 13.2L12 4.2l9.5 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CoinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="nav-icon" aria-hidden="true">
      <defs>
        <mask id="coin-mask">
          <circle cx="12" cy="12" r="10" fill="white" />
          <text
            x="12"
            y="16.8"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="14"
            fontWeight="900"
            fill="black"
          >
            $
          </text>
        </mask>
      </defs>
      <circle cx="12" cy="12" r="10" fill="currentColor" mask="url(#coin-mask)" />
    </svg>
  )
}

function navLinkClass({ isActive }) {
  return `nav-link${isActive ? ' nav-link--active' : ''}`
}

export default function Navbar() {
  const { pathname } = useLocation()
  const homeActive = HOME_PATHS.includes(pathname)

  return (
    <nav className="navbar">
      <NavLink
        to="/"
        end
        aria-label="Início"
        className={`nav-link${homeActive ? ' nav-link--active' : ''}`}
      >
        <HomeIcon />
      </NavLink>
      <NavLink to="/financas" aria-label="Finanças" className={navLinkClass}>
        <CoinIcon />
      </NavLink>
    </nav>
  )
}
