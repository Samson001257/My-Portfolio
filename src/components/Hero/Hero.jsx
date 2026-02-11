import React from 'react'

import logo2 from '../../assets/logo 2 do.png';

import './Hero.css';

function Hero() {
  return (
    <div className='Hero'>

        <img src={logo2} alt="Profile" />
         <h1><span>I'm Adio Samson, </span>Frontend Developer</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, totam repudiandae! Suscipit totam officiis consequuntur enim eos, voluptate qui necessitatibus assumenda natus accusantium eius est omnis impedit doloribus repellat maiores.</p>

         <div className='hero-action'>
            

            <div className='hero-connect'>Connect with me</div>

             <div className='hero-resume'>My Resume</div>





         </div>
      
    </div>
  )
}

export default Hero;
