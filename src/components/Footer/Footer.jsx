import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Logo & Links */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
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
            <nav className="footer-nav">
              <Link to="/contatti">Contact</Link>
              <Link to="/chi-siamo">About</Link>
              <a href="#">Careers</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4>Contatti</h4>
            <p>bari.via.sparano.10</p>
            <p>Tel: +39 333 333 3333</p>
            <p>bari.via.sparano.10</p>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h4>Iscriviti alla nostra Newsletter!</h4>
            <p>
              Invia il tuo progetto, i tuoi canali social: 
              valuteremo chi sei e cosa possiamo 
              costruire insieme.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="la tua email" 
                required 
              />
              <button type="submit" className="btn-newsletter">
                Iscriviti
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
