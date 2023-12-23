import logo from '../../assets/logo-footer.png'
import './Footer.scss'

function Footer() {
    return (
      <div className='footer-container'>
            <img src={logo} alt='Logo Kasa' className='kasa-logo-footer' />
            <p>© 2020 Kasa. All rights reserved</p>
      </div>
    )
  }
  
  export default Footer