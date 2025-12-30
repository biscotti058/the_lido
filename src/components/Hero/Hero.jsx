import { useState, useEffect } from 'react'
import './Hero.css'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Carousel slides - 3 different images with same content
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
      alt: 'Costa pugliese con mare cristallino'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80',
      alt: 'Mare azzurro della Puglia'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=1920&q=80',
      alt: 'Spiaggia mediterranea'
    }
  ]

  // Auto-slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="hero" id="hero">
      {/* Carousel Background */}
      <div className="hero-carousel">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={index !== currentSlide}
          />
        ))}
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          CONSULENZA STRATEGICA<br />
          PER AZIENDE CON SEDE<br />
          IN PUGLIA
        </h1>
        <p className="hero-subtitle">
          The Lido supporta le aziende che affrontano crescita, cambiamento e decisioni complesse,
          offrendo strategia, posizionamento e consulenza per andare avanti con sicurezza.
        </p>
        <a href="#contatti" className="btn-primary hero-cta">
          Prenota una consulenza
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      {/* Carousel Indicators */}
      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Wave decoration at bottom - sand color */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            fill="#f7ede2"
            d="M0,50 C180,100 360,20 540,50 C720,80 900,30 1080,50 C1260,70 1350,40 1440,50 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
