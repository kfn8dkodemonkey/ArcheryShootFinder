import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle, view, setView }) => {
  
  return (
    <header
      style={{
        margin: `0 auto`,
        padding: `var(--space-4) var(--size-gutter)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
      }}
    >
      <Link
        to="/"
        style={{
          fontSize: `var(--font-md)`,
          fontWeight: `bold`,
          textDecoration: `none`,
          color: `var(--color-primary)`,
        }}
      >
        🏹 {siteTitle}
      </Link>
      <nav>
        <ul className="nav nav-pills gap-2 justify-content-center">
            <li className="nav-item">
              <button className={`nav-link ${view === 'map' ? 'active' : ''}`} onClick={() => setView('map')}>
                <i className="bi bi-map"></i> Map
              </button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${view === 'list' ? 'active' : ''}`} onClick={() => setView('list')}>
                <i className="bi bi-list-ul"></i> List
              </button>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${view === 'calendar' ? 'active' : ''}`} onClick={() => setView('calendar')}>
                <i className="bi bi-calendar3"></i> Calendar
              </button>
            </li>
          </ul>
      </nav>
      </header>
    );
  }

export default Header