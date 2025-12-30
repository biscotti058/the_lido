import { useEffect } from 'react'
import './Pages.css'

const CosaFacciamoPage = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const services = [
    {
      title: 'Business Development',
      description: 'Sviluppiamo strategie di crescita per espandere il tuo business, identificando nuove opportunità di mercato e partnership strategiche.',
      icon: '📈'
    },
    {
      title: 'Strategia e Posizionamento',
      description: 'Definiamo il posizionamento strategico della tua azienda, differenziandoti dalla concorrenza e creando un vantaggio competitivo sostenibile.',
      icon: '🎯'
    },
    {
      title: 'Sviluppo',
      description: 'Accompagniamo la crescita della tua azienda con piani di sviluppo strutturati e misurabili.',
      icon: '🚀'
    },
    {
      title: 'Advisory per Turismo & Hospitality',
      description: 'Consulenza specializzata per il settore turistico e dell\'ospitalità, con focus sul territorio pugliese.',
      icon: '🏨'
    }
  ]

  return (
    <div className="page-container">
      <div className="page-hero" style={{ background: '#5ec9d8' }}>
        <h1 className="page-title">Cosa Facciamo</h1>
      </div>
      
      <div className="page-content">
        <div className="container">
          <section className="page-section intro-section">
            <p className="intro-text">
              Consulenza strategica e business development per supportare 
              la crescita, il posizionamento e le decisioni nel lungo periodo.
            </p>
          </section>

          <section className="page-section">
            <div className="services-page-grid">
              {services.map((service, index) => (
                <div key={index} className="service-page-card">
                  <span className="service-icon">{service.icon}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="page-section">
            <h2 className="section-title">Il Nostro Approccio</h2>
            <p>
              Lavoriamo a stretto contatto con i nostri clienti, comprendendo 
              a fondo le loro esigenze e costruendo soluzioni su misura. 
              Il nostro metodo si basa su tre pilastri fondamentali:
            </p>
            <ul className="approach-list">
              <li><strong>Ascolto:</strong> Comprendiamo le tue esigenze e i tuoi obiettivi</li>
              <li><strong>Analisi:</strong> Studiamo il mercato e identifichiamo le opportunità</li>
              <li><strong>Azione:</strong> Implementiamo strategie concrete e misurabili</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default CosaFacciamoPage
