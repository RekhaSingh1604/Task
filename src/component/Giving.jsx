import React from 'react'
import  './Giving.css'
import seventeen from './seventeen.png'
import twentyfour from './twentyfour.png'
import nineteen from './nineteen.png'
import { FaArrowRight } from "react-icons/fa";

const Giving = () => {
  return (
    <div className='giving'>
        <div className='giving_h1'>
            <h1>We're Giving all the <span>Insurance</span> Services to you</h1>
        </div>

       <div className='box_main'>
        <div className='box'>
          <img src={seventeen} alt='severteen'/>
          <h1>Family Insurance</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisici</p>
          <h3><FaArrowRight /></h3>
        </div>

         <div className='box'>
          <img src={twentyfour} alt='severteen'/>
          <h1>Travel Insurance</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisici</p>
          <h3><FaArrowRight /></h3>
        </div>

         <div className='box'>
          <img src={nineteen} alt='severteen'/>
          <h1>Home Insurance</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisici</p>
          <h3><FaArrowRight /></h3>
        </div>
      </div>
    </div>
  )
}

export default Giving
