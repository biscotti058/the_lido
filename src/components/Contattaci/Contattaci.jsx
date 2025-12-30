import './Contattaci.css'

const Contattaci = () => {
  return (
    <section className="contattaci" id="contatti">
      <div className="contattaci-bg">
        <img 
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1920&q=80" 
          alt="Aperitivo in spiaggia"
        />
        <div className="contattaci-overlay"></div>
      </div>
      
      <div className="container contattaci-content">
        <h2 className="decorative-title white">
          RACCONTACI COSA<br />VUOI REALIZZARE.
        </h2>
        <a href="mailto:info@thelido.it" className="btn-secondary white-btn">
          Contattaci
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Contattaci

