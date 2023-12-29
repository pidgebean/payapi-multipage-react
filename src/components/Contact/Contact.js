import React from 'react'
import './Contact.css'
import { NavLink } from 'react-router-dom'

import tesla from '../../assets/shared/desktop/tesla.svg'
import microsoft from '../../assets/shared/desktop/microsoft.svg'
import hewlett from '../../assets/shared/desktop/hewlett-packard.svg'
import oracle from '../../assets/shared/desktop/oracle.svg'
import google from '../../assets/shared/desktop/google.svg'
import nividia from '../../assets/shared/desktop/nvidia.svg'


export default function Contact() {
  return (
    <div className='contact'>
      <h2>Submit a help request and we'll get in touch shortly</h2>
      <div className='circle'></div>
      <div className='section-1'>
        <form action="" className='contact-form'>
          <input type="text" placeholder='Name' className='name-box'/>
          <input type="text" placeholder='Email Address' className='email-box'/>
          <input type="text" placeholder='Company Name' className='company-box'/>
          <input type="text" placeholder='Title' className='title-box'/>
          <textarea name="" id="" cols="30" rows="10" placeholder='Message' className='message-box'/>
          <div className='checkbox-section'>
            <input type="checkbox" className='checkbox'/>
            <div className='check-message'>Stay up to date with company announcements and updates to our API</div>
          </div>
          
          <input type="submit" value="Submit" className='submit-btn'/>
        </form>
        <div className='right'>
          <h2>Join the thousands of innovators already building with us</h2>
          <div className='right-icons'>
            <img src={tesla} alt="" className='partners-icon'/>
            <img src={microsoft} alt="" className='partners-icon'/>
            <img src={hewlett} alt="" className='partners-icon'/>
            <img src={oracle} alt="" className='partners-icon'/>
            <img src={google} alt="" className='partners-icon'/>
            <img src={nividia} alt="" className='partners-icon'/>
          </div>
        </div>
        
      </div>
      <div className='action-call'>
        <div className='left'>Ready to start?</div>
        <div className='right'>
          <input type="text" placeholder='Enter email address' />
          <NavLink>
            <button>Schedule a Demo</button>
          </NavLink>
        </div>
      </div>
      
    </div>
  )
}
