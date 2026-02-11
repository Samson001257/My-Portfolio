import React from 'react'

import mail from '../../assets/Mail.png'

import location from '../../assets/Location.png'

import called from '../../assets/Calling.png'



import './Contact.css';

function Contact() {


  return (

    <div id='contact' className='contact'>

        <div  className='contact-title'>
          <h1>Get in Touch</h1>

        </div>

         <div className='contact-section' >

           <div className='contact-left'>
            
             <h1>Let’s Talk</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, quidem?</p>

             <div className='contact-details'>

                  <div className='contact-detail'>

                     <img src={mail} alt="" /> <p>bamiseoluwasegun902@gmail.com</p>

                  </div>


                   <div className='contact-detail'>

                     <img src={called} alt="" /> <p>09033745989</p>

                  </div>


                       <div className='contact-detail'>

                     <img src={location} alt="" /> <p>Nigerian</p>

                  </div>


             </div>

           </div>


              <form className='contact-right'>

              <label htmlFor="">Your Name</label>
              <input type="text" placeholder='Enter your name' name='name' />
              
               <label htmlFor="">Your Email</label> 

              <input type="Email" placeholder='Enter your Email' name='Email' />

               <label htmlFor="">Your Message</label>
              <textarea type="message" placeholder='Enter your Message' ></textarea> 

              <button type='submit' className='contact-submit' >Submit Now</button>

              </form>


         </div>
      
    </div>
  )
}

export default Contact;
