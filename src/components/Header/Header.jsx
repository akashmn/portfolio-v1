import React from 'react'
import './Header.css'
import CTA from './CTA.jsx'
import MyImage from '../../assets/my-image1.png'
import HeaderSocials from './HeaderSocials.jsx'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Akash M Nandan</h1>
        <h5 className="text-light">FRONTEND DEVELOPER ||  UI/UX DESIGNER</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={MyImage} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default Header