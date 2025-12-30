import './CosaFacciamo.css'

const CosaFacciamo = () => {
  const services = [
    { name: 'Business Development' },
    { name: 'Strategia e Posizionamento' },
    { name: 'Sviluppo' },
    { name: 'Advisory per Turismo & Hospitality' },
  ]

  return (
    <section className="cosa-facciamo" id="cosa-facciamo">
      <div className="container">
        <div className="cosa-facciamo-card">
          <h2 className="decorative-title">COSA FACCIAMO</h2>
          <p className="cosa-facciamo-intro">
            Consulenza strategica e business development per supportare 
            la crescita, il posizionamento e le decisioni nel lungo periodo.
          </p>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <span className="service-name">{service.name}</span>
              </div>
            ))}
          </div>

          <a href="#" className="btn-primary">
            Scopri di più
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CosaFacciamo
