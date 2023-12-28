import React from 'react'
import './Contact.css'
import { NavLink } from 'react-router-dom'

export default function Contact() {
  return (
    <div className='contact'>
      <h2>Submit a help request and we'll get in touch shortly</h2>
      <form action="">
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Email Address' />
        <input type="text" placeholder='Company Name' />
        <input type="text" placeholder='Title' />
        <textarea name="" id="" cols="30" rows="10" placeholder='Message'/>
        <div>Stay up to date with company announcements and updates to our API</div>
        <input type="submit" value="Submit" />
      </form>
      <div>
        <h2>Join the thousands of innovators already building with us</h2>
      </div>
      <div className='action-call'>
        <h3>Ready to start?</h3>
        <input type="text" placeholder='Enter email address' />
        <NavLink>
          <button>Schedule a Demo</button>
        </NavLink>
      </div>
    </div>
  )
}
