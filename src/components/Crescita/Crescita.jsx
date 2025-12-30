import './Crescita.css'

const Crescita = () => {
  return (
    <section className="crescita sand-pattern" id="crescita">
      <div className="container">
        <div className="crescita-content">
          <h2 className="decorative-title">INSIEME VERSO LA TUA CRESCITA</h2>
          <p className="crescita-text">
            Una conversazione dedicata a fare chiarezza, definire le priorità, 
            ed esplorare come visione e potenziale possano tradursi in una 
            crescita reale e sostenibile.
          </p>
          <p className="crescita-text-small">
            Una consulenza privata e mirata per comprendere contesto, obiettivi 
            e reali opportunità di crescita.
          </p>
          <a href="#contatti" className="btn-primary">
            Parliamone
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Crescita

