import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
import phone from '../../assets/home/desktop/illustration-phone-mockup.svg'

import tesla from '../../assets/shared/desktop/tesla.svg'
import microsoft from '../../assets/shared/desktop/microsoft.svg'
import hewlett from '../../assets/shared/desktop/hewlett-packard.svg'
import oracle from '../../assets/shared/desktop/oracle.svg'
import google from '../../assets/shared/desktop/google.svg'
import nividia from '../../assets/shared/desktop/nvidia.svg'

import implement from '../../assets/home/desktop/illustration-easy-to-implement.svg'
import simpleUI from '../../assets/home/desktop/illustration-simple-ui.svg'
import personalFinances from '../../assets/home/desktop/icon-personal-finances.svg'
import bankingCoverage from '../../assets/home/desktop/icon-banking-and-coverage.svg'
import consumerPayment from '../../assets/home/desktop/icon-consumer-payments.svg'

export default function Home() {
  return (
    <div className='home'>
      <div className='top-section'>
        <div className='desc'>
          <h2 className='home-title'>Start building with our APIs for absolutely free</h2>
          <input type="text" placeholder='Enter email address' />
          <NavLink>
            <button className='demo-btn'>Schedule a demo</button>
          </NavLink>
          <span className='questions'>Have any questions? <button className='contact-btn'>Contact us</button></span>
        </div>
        
        <img src={phone} alt="" className='phone-mockup'/>
      </div>
      <div className='home-partners'>
        <div className='left'>
          <h2>Who we work with</h2>
          <p>Today, millions of people around the world have successfully connected their accounts to apps they love using our 
            API. We provide developers with the tools they need to create easy and accessible experiences for their users. 
          </p>
          <NavLink to='/contact'>
            <button className='about-btn'>About Us</button>
          </NavLink>
        </div>
        <div className='right'>
          <img src={tesla} alt="" className='partners-icon'/>
          <img src={microsoft} alt="" className='partners-icon'/>
          <img src={hewlett} alt="" className='partners-icon'/>
          <img src={oracle} alt="" className='partners-icon'/>
          <img src={google} alt="" className='partners-icon'/>
          <img src={nividia} alt="" className='partners-icon'/>
        </div>
        
      </div>
      <div className='showcase'>
        <div className='easy-implement'>
          <div className='left'><img src={implement} alt="" /></div>
          <div className='right'>
            <h2>Easy to implement</h2>
            <p>
              Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation 
              page to integrate payments functionality with ease.
            </p>
          </div>
        </div>
        <div className='ui-ux'>
          <div className='left'>
            <h2>Simple UI & UX</h2>
            <p>
              Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. 
            </p>
          </div>
          <div className='right'><img src={simpleUI} alt="" /></div>
        </div>
        <div className='money-advantages'>
          <div className='finances'>
            <img src={personalFinances} alt="" />
            <div className='desc'>
              <h4>Personal Finances</h4>
              <p>
                Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze 
                reports to reconcile activities in your account. 
              </p>
            </div>
          </div>
          <div className='banking'>
            <img src={bankingCoverage} alt="" />
            <div className='desc'>
              <h4>Banking & Coverage</h4>
              <p>
                With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit 
                card, and brokerage accounts.
              </p>
            </div>
          </div>
          <div className='consumer'>
            <img src={consumerPayment} alt="" />
            <div className='desc'>
              <h4>Consumer Payments</h4>
              <p>
              It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers 
              could instantly authenticate their account.
              </p>
            </div>
          </div>
        </div>
        <div className='action-call'>
          <div className='left'>Ready to start?</div>
          <div className='right'>
            <input type="text" placeholder='      Enter email address'/>
            <NavLink to='/contact'>
              <button>Schedule a Demo</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
    
  )
}
