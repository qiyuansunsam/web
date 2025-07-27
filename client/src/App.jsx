import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'var(--secondary-black)',
              color: 'var(--primary-white)',
              border: '1px solid var(--metallic-dark)'
            }
          }}
        />
      </div>
    </Router>
  )
}

export default App