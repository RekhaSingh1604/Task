import React from 'react'
import './Services.css'
import insurance from './insurance.png'
import { FaHeadphones } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";


const Services = () => {
  return (
    <div className='main_services'>
        <div className='services'>
            <h1>Best <span>Services</span></h1>
        </div>

        <div className='services_display'>
            <div className='services1'>
                <h1><FaHeadphones /> 24x7 Support</h1>
                <p>Lorem lpsum is simple dummuy text of the printing and typesetting indutr</p>
                <hr/>
            </div>

             <div className='services1'>
                <h1><MdContentCopy/>24x7 Support</h1>
                <p>Lorem lpsum is simple dummuy text of the printing and typesetting indutr</p>
         <hr/>  </div>
            

             <div className='services1'>
                <h1>24x7 Support</h1>
                <p>Lorem lpsum is simple dummuy text of the printing and typesetting indutr</p>
            <hr/></div>
        </div>


<div className='insurance'>
  


<img src={insurance} alt='insurance'/>
   </div>
    </div>
  )
}

export default Services
