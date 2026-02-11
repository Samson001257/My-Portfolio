import React from 'react'

import logo1 from '../../assets/logo1.png'

import users from '../../assets/Users.png'

import './footer.css'

function Footer() {
  return (


    <div className='footer'>

       <div className='footer-top'>

         <div className='footer-top-left'>
      
           <img src={logo1} alt="" />
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, accusantium.</p>

         </div>

           <div className='footer-top-right'>

              <div className='footer-email-input'>

                 <img src={users} alt="" />

                 <input type="email" placeholder='Enter your email' />

              </div>


                 <div className='footer-subscribe'>Subscribe</div>

           </div>

       </div>

       <hr/>

         <div className='footer-bottom'>

           <p className='footer-bottom-left'>@ 2026 SAM SOFTWARE</p>

           <div className='footer-bottom-right'></div>

            <p>Term of Services</p>
            <p>Privacy policy</p>
            <p>Connect with me</p>

         </div>
      
    </div>
  )
}

export default Footer;
