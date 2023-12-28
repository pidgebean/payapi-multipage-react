import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/shared/desktop/logo.svg'
import menu from '../../assets/shared/mobile/menu.svg'
import close from '../../assets/shared/mobile/close.svg'

export default function Navbar() {
  return (
    <div className='navbar'>
      <button className='menu-btn'>
        <img src={menu} alt="" />
        <div className='menu'>
          <img src={close} alt="" />
          <hr />
          <div className='site-links'>
            <NavLink to='/pricing'>
              <button>Pricing</button>
            </NavLink>
            <NavLink to='/about'>
              <button>About</button>
            </NavLink>
            <NavLink to='/contact'>
              <button>Contact</button>
            </NavLink>
          </div>
          
        </div>
      </button>
      
      <div className='navbar-left'>
        <NavLink to='/'>
          <img src={logo} alt="" className='logo'/>
        </NavLink>
        <div className='page-links'>
          <NavLink to='/pricing' >
            <button className='nav-btn pricing'>Pricing</button>
          </NavLink>
          <NavLink to='/about' >
            <button className='nav-btn about'>About</button>
          </NavLink>
          <NavLink to='/contact' >
            <button className='nav-btn about'>Contact</button>
          </NavLink>
        </div>
        
      </div>
      <div className='navbar-right'>
        <NavLink to='/contact'>
          <button className='nav-btn demo'>Schedule a Demo</button>
        </NavLink>
      </div>

      
    </div>
  )
}
