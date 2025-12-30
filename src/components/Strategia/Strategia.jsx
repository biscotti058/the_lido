import './Strategia.css'

const Strategia = () => {
  const cases = [
    {
      image: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=400&q=80',
      label: 'CHIAREZZA'
    },
    {
      image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=400&q=80',
      label: 'STRUTTURA'
    },
    {
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&q=80',
      label: 'CRESCITA'
    }
  ]

  return (
    <section className="strategia" id="strategia">
      <div className="container strategia-content">
        <h2 className="decorative-title">DALLA STRATEGIA ALLA CRESCITA</h2>
        <p className="strategia-subtitle">
          Come chiarezza e struttura si traducono in una crescita reale per le aziende
        </p>

        <div className="cases-grid">
          {cases.map((item, index) => (
            <div key={index} className="case-card">
              <div className="case-image">
                <img src={item.image} alt={item.label} />
              </div>
              <span className="case-label">{item.label}</span>
            </div>
          ))}
        </div>

        <a href="#" className="btn-secondary">
          Scopri i casi studio
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Strategia
