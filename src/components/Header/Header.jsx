import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Chi siamo', href: '/chi-siamo' },
    { name: 'Cosa Facciamo', href: '/cosa-facciamo' },
    { name: 'Casi studio', href: '/#strategia' },
    { name: 'Filosofia', href: '/#filosofia' },
    { name: 'Contatti', href: '/contatti' },
  ]

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 5L35 25L55 30L35 35L30 55L25 35L5 30L25 25L30 5Z" fill="white"/>
              <circle cx="30" cy="30" r="8" fill="none" stroke="white" strokeWidth="2"/>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-name">the lido</span>
            <span className="logo-tagline">BUSINESS DEVELOPMENT COMPANY</span>
          </div>
        </Link>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.href.startsWith('/#') ? (
                  <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                    {link.name}
                  </a>
                ) : (
                  <Link to={link.href} onClick={() => setIsMenuOpen(false)}>
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-right">
          <Link to="/contatti" className="btn-consulenza" onClick={() => setIsMenuOpen(false)}>
            Consulenza
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </Link>
          
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="18" cy="6" r="1" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>

          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
