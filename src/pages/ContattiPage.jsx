import { useState, useEffect } from 'react'
import './Pages.css'

const ContattiPage = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    azienda: '',
    messaggio: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Grazie per averci contattato! Ti risponderemo al più presto.')
    setFormData({
      nome: '',
      email: '',
      telefono: '',
      azienda: '',
      messaggio: ''
    })
  }

  return (
    <div className="page-container">
      <div className="page-hero" style={{ background: '#5ec9d8' }}>
        <h1 className="page-title">Contatti</h1>
      </div>
      
      <div className="page-content">
        <div className="container">
          <section className="page-section intro-section">
            <p className="intro-text">
              Raccontaci cosa vuoi realizzare. Siamo pronti ad ascoltarti 
              e a costruire insieme il tuo percorso di crescita.
            </p>
          </section>

          <div className="contatti-grid">
            <section className="contact-form-section">
              <h2 className="section-title">Scrivici</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nome">Nome e Cognome *</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="telefono">Telefono</label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="azienda">Azienda</label>
                    <input
                      type="text"
                      id="azienda"
                      name="azienda"
                      value={formData.azienda}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group full-width">
                  <label htmlFor="messaggio">Messaggio *</label>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    rows="5"
                    value={formData.messaggio}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary">
                  Invia messaggio
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </form>
            </section>

            <section className="contact-info-section">
              <h2 className="section-title">Contatti Diretti</h2>
              
              <div className="contact-info-card">
                <h3>📍 Sede</h3>
                <p>Via Sparano, 10<br />70121 Bari (BA)<br />Italia</p>
              </div>

              <div className="contact-info-card">
                <h3>📞 Telefono</h3>
                <p>+39 333 333 3333</p>
              </div>

              <div className="contact-info-card">
                <h3>✉️ Email</h3>
                <p>info@thelido.it</p>
              </div>

              <div className="contact-info-card">
                <h3>🕐 Orari</h3>
                <p>Lunedì - Venerdì<br />09:00 - 18:00</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContattiPage
