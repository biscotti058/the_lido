import './ChiSiamo.css'

const ChiSiamo = () => {
  return (
    <section className="chi-siamo sand-pattern" id="chi-siamo">
      <div className="container">
        <div className="chi-siamo-card">
          <div className="chi-siamo-image">
            <img 
              src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=600&q=80" 
              alt="Occhiali da sole sulla spiaggia"
            />
          </div>
          <div className="chi-siamo-content">
            <h2 className="decorative-title">CHI SIAMO</h2>
            <p>
              The Lido è una realtà di consulenza strategica nata in Puglia, che 
              supporta aziende e imprenditori nei momenti decisivi della crescita 
              aziendale: analisi, direzione strategica e comunicazione.
            </p>
            <a href="#" className="btn-secondary">
              Scopri di più
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChiSiamo

