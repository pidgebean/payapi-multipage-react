import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/shared/desktop/logo.svg'

import facebook from '../../assets/shared/desktop/facebook.svg'
import twitter from '../../assets/shared/desktop/twitter.svg'
import linkedIn from '../../assets/shared/desktop/linkedin.svg'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='left'>
        <NavLink to='/'><img src={logo} alt="" className='logo'/></NavLink>
        <div className='page-links'>
          <NavLink to='/pricing'>
            <button className='footer-btn pricing'>Pricing</button>
          </NavLink>
          <NavLink to='/about'>
            <button className='footer-btn about'>About</button>
          </NavLink>
          <NavLink to='/contact'>
            <button className='footer-btn contact'>Contact</button>
          </NavLink>
        </div>
        
      </div>
      <div className='social-links'>
        <a href="https://www.facebook.com/" target='_blank' rel='noreferrer'>
          <img src={facebook} alt="" />
        </a>
        <a href="https://twitter.com/?lang=en" target='_blank' rel='noreferrer'>
          <img src={twitter} alt="" />
        </a>
        <a href="https://www.linkedin.com/feed/" target='_blank' rel='noreferrer'>
          
          <img src={linkedIn} alt="" />
        </a>
      </div>
    </div>
  )
}
