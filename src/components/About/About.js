import React from 'react'
import './About.css'
import { NavLink } from 'react-router-dom'
import team from '../../assets/about/desktop/image-team-members.jpg'

export default function About() {
  return (
    <div className='about'>
      <h2>
          We empower innovators
          by delivering access to the financial system
      </h2>
      <div className='section-one'>
        
        <div className='left'>
          <h4>Our Vision</h4>
          <h4>Our Business</h4>
        </div>
        <div className='right'>
          <p>
            Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The 
            result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. 
            We are deeply focused on democratizing financial services through technology. 
          </p>
          
          <p>
          At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product 
          provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions 
          and developers. 
          </p>
        </div>
        
      </div>
      
      <img src={team} alt="" className='team-img'/>
      <div className='results'>
        <div className='result-1'>
          <hr className='one-top'/>
          <div className='title'>Team Members</div>
          <div className='number'>300+</div>
          <hr className='one-bot'/>
        </div>
        <div className='result-2'>
          <hr className='two-top'/>
          <div className='title'>Offices in US</div>
          <div className='number'>3</div>
          <hr className='two-bot'/>
        </div>
        <div className='result-3'>
          <hr className='three-top'/>
          <div className='title'>Transactions analyzed</div>
          <div className='number'>10M+</div>
          <hr className='three-bot'/>
        </div>
      </div>
      <div className='section-3'>
        <div className='left'>
          <h3>The Culture</h3>
          <h3>The People</h3>
        </div>
        <div className='right'>
          <p>We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether 
            it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration 
            and diversity of thought, no matter the job title.
          </p>
          
          <p>We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI,
            we have diverse backgrounds and skills.
          </p>
        </div>
        
      </div>
      
      <div className='action-call'>
        <div className='left'>Ready to start?</div>
        <div className='right'>
          <input type="text" placeholder='Enter email address' />
          <NavLink to='/contact'>
            <button>Request a demo</button>
          </NavLink>
          
        </div>
        
      </div>
    </div>
  )
}
