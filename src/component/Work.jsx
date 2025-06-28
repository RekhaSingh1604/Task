import React from 'react'
import './Work.css'
import twenty from './twenty.png'
import twentyone from './twentyone.png'
import twentytwo from './twentytwo.png'
import twentytree from './twentytree.png'

const Work = () => {
  return (
    <div className='main_work'>
        <div className='work'>
            <h1>How We <span>Work?</span></h1>
        </div>

        <div className='work_box1'>
            <div className='work_box2'>
                <img src={twenty} alt='twenty'/>
                <h3>Fill Your Details</h3>
                <p>Fill in your details and get insurance policy premium quotes from top-rated insurers instantly.</p>
            </div>

             <div className='work_box2'>
                <img src={twentyone} alt='twenty'/>
                <h3>Fill Your Details</h3>
                <p>Fill in your details and get insurance policy premium quotes from top-rated insurers instantly.</p>
            </div>

             <div className='work_box2'>
                <img src={twentytwo} alt='twenty'/>
                <h3>Fill Your Details</h3>
                <p>Fill in your details and get insurance policy premium quotes from top-rated insurers instantly.</p>
            </div>
        </div>

       

   
    

  </div>
   
  )
}

export default Work
