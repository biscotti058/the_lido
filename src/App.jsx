import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage'
import ChiSiamoPage from './pages/ChiSiamoPage'
import CosaFacciamoPage from './pages/CosaFacciamoPage'
import ContattiPage from './pages/ContattiPage'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chi-siamo" element={<ChiSiamoPage />} />
          <Route path="/cosa-facciamo" element={<CosaFacciamoPage />} />
          <Route path="/contatti" element={<ContattiPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
