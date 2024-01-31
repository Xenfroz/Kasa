import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import './Header.scss'

function Header() {
  return (
    <div className='header-container'>
        <img src={logo} alt='Logo Kasa' className='kasa-logo' />
        <nav className='header-container__nav'>
          <NavLink to="/" activeClassName="active">Accueil</NavLink>
          <NavLink to="/about" activeClassName="active">À propos</NavLink>
        </nav>
    </div>
  )
}

export default Header