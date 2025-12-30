import './Filosofia.css'

const Filosofia = () => {
  return (
    <section className="filosofia sand-pattern" id="filosofia">
      <div className="container">
        <div className="filosofia-grid">
          <div className="filosofia-content">
            <h2 className="decorative-title">LA NOSTRA FILOSOFIA</h2>
            <p>
              Trasformiamo gli elementi unici di un lido pugliese in metafore 
              strategiche, creando un linguaggio che definisce il nostro metodo 
              e il modo in cui lavoriamo.
            </p>
            <a href="#" className="btn-primary">
              Immergiti
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          <div className="filosofia-image">
            <img 
              src="https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=600&q=80" 
              alt="Trulli pugliesi"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Filosofia

