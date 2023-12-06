import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Logement from './pages/Logement'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'


ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Logement/:logementName" element={<Logement />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  )