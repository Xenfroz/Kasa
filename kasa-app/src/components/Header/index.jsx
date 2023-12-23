import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Header.scss'

function Header() {
  return (
    <div className='header-container'>
        <img src={logo} alt='Logo Kasa' className='kasa-logo' />
        <nav className='header-container__nav'>
          <Link to="/">Accueil</Link>
          <Link to="/about">À propos</Link>
        </nav>
    </div>
  )
}

export default Header