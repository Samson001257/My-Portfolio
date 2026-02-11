import React from 'react'

import '../Mywork/Mywork.css';
import mywork_data from '../../assets/mywork_data';

import icon from '../../assets/Arrow.png';

function Mywork() {
  return (
    <div id='work' className='mywork'>

      <div className='mywork-title'>

        <h1>Projects in Progress</h1>

      </div>

      <div className='mywork-container'>

        {mywork_data.map((work, index) => {

          return <img key={index} src={work.w_img} alt="" />

        })}
      </div>

      <div className='mywork-showmore'>

        <p>Show More</p>
        <img src={icon} alt="" />

      </div>

    </div>
  )
}

export default Mywork;
