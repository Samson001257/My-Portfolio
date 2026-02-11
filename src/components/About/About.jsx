import React from 'react'

import '../About/About.css'

import logo3 from '../../assets/logo 3.jpeg'

function About() {
   return (
      <div id='about' className='About'>

         <div className='About-title'>

            <h1>About Me</h1>

         </div>

         <div className='About-section'>

            <div className='About-left'>

               <img src={logo3} alt="" />

            </div>

            <div className='About-right'>

               <div className='About-para'>

                  <h1>Full Stack Developer</h1>

                  <p>I’m a passionate Full Stack Developer committed to building clean, responsive, and user-friendly web applications that deliver meaningful digital experiences. I turn ideas into functional projects using modern frontend technologies like HTML, CSS, and JavaScript, along with frameworks such as React. On the backend, I work with server-side tools and databases to ensure applications are stable, scalable, and efficient. My approach combines strong functionality with intuitive, visually appealing interfaces that users enjoy interacting with.

                     I continuously push myself to learn new technologies, improve my coding practices, and stay up to date with the latest development trends. By experimenting with projects, I am growing my skills in UI/UX design, interactive components, and full stack development. My goal is to build technically solid applications while creating digital solutions that solve real-world problems, support business growth, and provide great experiences for users. </p>

               </div>

               <div className='About-skill'>

                  <div className='About-skills'><p>HTML & CSS</p> <hr style={{ width: "50%" }} /></div>
                  <div className='About-skills'><p>React JS</p> <hr style={{ width: "60%" }} /></div>
                  <div className='About-skills'><p>Javascript</p> <hr style={{ width: "50%" }} /></div>
                  <div className='About-skills'><p>Next JS</p> <hr style={{ width: "50%" }} /></div>

               </div>



            </div>

         </div>

         <div className='About-achievements'>

            <div className='About-achievement'>

               <h1>On</h1>

               <p>Creating Web Apps</p>

            </div>


            <div className='About-achievement'>

               <h1>2+</h1>

               <p> Projects in Progress</p>

            </div>


            <div className='About-achievement'>

               <h1>0+</h1>

               <p>Project Completed</p>

            </div>


         </div>

      </div>
   )
}

export default About;
