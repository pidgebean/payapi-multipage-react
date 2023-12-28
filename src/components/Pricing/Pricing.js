import React from 'react'
import './Pricing.css'

import check from '../../assets/shared/desktop/icon-check.svg'

export default function Pricing() {
  return (
    <div className='pricing-page'>
      <div className='title'>Pricing</div>
      <div className='plans'>
        <div className='free-plan'>
          <h3>Free Plan</h3>
          <p>Build and test using our core set of products with up to 100 API requests </p>
          <h4>$0.00</h4>
          <hr className='first-line'/>
          <div className='services'>
            <div className='given'>
              <img src={check} alt="" />
              <div className='service'>Transactions </div>
            </div> 
            <div className='given'>
              <img src={check} alt="" />
              <div className='service'>Auth </div>
            </div> 
            <div className='given'>
              <img src={check} alt="" />
              <div className='service'>Identity</div>
            </div>
            <div className='service not-given'>Investments </div>
            <div className='service not-given'>Assets </div>
            <div className='service not-given'>Liabilities </div>
            <div className='service not-given'>Income</div>
          </div>
          
          <hr className='line-two'/>
          <button className='request-btn'>Request Access</button>
        </div>
        <div className='basic-plan'>
          <h3>Basic Plan</h3>
          <p>Launch your project with unlimited requests and no contractual minimums </p>
          <h4>$249.00</h4>
          <hr className='first-line'/>
          <div className='services'>
            <div className='given'>
              <img src={check} alt="" />
              <div className='service'>Transactions</div>
            </div>
            <div className='given'>
              <img src={check} alt="" />
              <div className='service'>Auth</div>
            </div>
            <div className='given'>
              <img src={check} alt="" />
              <div className='service'>Identity </div>
            </div>
            <div className='given'>
              <img src={check} alt="" />
              <div className='service'>Investments</div>
            </div> 
            <div className='given'>
              <img src={check} alt="" />
              <div className='service'>Assets</div>
            </div>
            <div className='service not-given'>Liabilities</div>
            <div className='service not-given'>Income </div>
          </div>
          
          <hr className='line-two'/>
          <button className='request-btn'>Request Access</button>
        </div>
        <div className='premium-plan'>
          <h3>Premium Plan</h3>
          <p>Get tailored solutions, volume pricing, and dedicated support for your team </p>
          <h4>$499.00</h4>
          <hr className='first-line'/>
          <div className='services'>
            <div className='given'>
              <img src={check} alt="" />
              <div className='service'>Transactions</div>
            </div>
            <div className='given'>
              <img src={check} alt="" />
              <div className='service'>Auth </div>
            </div>
            <div className='given'>
              <img src={check} alt="" />
              <div className='service'>Identity </div>
            </div>
            <div className='given'>
              <img src={check} alt="" />
              <div className='service'>Investments</div>
            </div>
            <div className='given'>
              <img src={check} alt="" />
              <div className='service'>Assets </div>
            </div>
            <div className='given'>
              <img src={check} alt="" /> 
              <div className='service'>Liabilities </div>
            </div>
            <div className='given'>
              <img src={check} alt="" />
              <div className='service'>Income</div>
            </div>
          </div>
          
          <hr className='line-two'/>
          <button className='request-btn'>Request Access</button>
        </div>
      </div>
      
      <div className='action-call'>
        <div className='left'>Ready to start?</div>
        <div className='right'>
          <input type="text" placeholder='Enter email address' />
          <button>Schedule a Demo</button>
        </div>
        
      </div>
    </div>
  )
}
