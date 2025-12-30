import { useEffect } from 'react'
import './Pages.css'

const ChiSiamoPage = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page-container">
      <div className="page-hero" style={{ background: '#5ec9d8' }}>
        <h1 className="page-title">Chi Siamo</h1>
      </div>
      
      <div className="page-content">
        <div className="container">
          <section className="page-section">
            <h2 className="section-title">La Nostra Storia</h2>
            <p>
              The Lido è una realtà di consulenza strategica nata in Puglia, che 
              supporta aziende e imprenditori nei momenti decisivi della crescita 
              aziendale: analisi, direzione strategica e comunicazione.
            </p>
            <p>
              Fondata con la visione di trasformare il potenziale delle aziende pugliesi 
              in crescita concreta e sostenibile, The Lido combina competenze strategiche 
              con una profonda conoscenza del territorio.
            </p>
          </section>

          <section className="page-section">
            <h2 className="section-title">La Nostra Missione</h2>
            <p>
              Accompagniamo le aziende nel loro percorso di crescita, offrendo 
              consulenza strategica personalizzata che tiene conto delle specificità 
              di ogni realtà imprenditoriale.
            </p>
            <p>
              Crediamo che ogni azienda abbia un potenziale unico da esprimere e 
              lavoriamo per trasformarlo in risultati concreti.
            </p>
          </section>

          <section className="page-section">
            <h2 className="section-title">I Nostri Valori</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Chiarezza</h3>
                <p>Comunicazione trasparente e obiettivi definiti</p>
              </div>
              <div className="value-card">
                <h3>Struttura</h3>
                <p>Metodo rigoroso e processi organizzati</p>
              </div>
              <div className="value-card">
                <h3>Crescita</h3>
                <p>Focus sui risultati e sviluppo sostenibile</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ChiSiamoPage
