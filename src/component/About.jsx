import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about'>
    <div className='main-about'>
        <h1>Why is <span> Demo </span>India's go-to for insurance?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, molestiae laudantium.</p>
         {/* <p className='one'> ab corporis maxime autem veniam repellat neque fuga provident!</p> */}
     </div>
<div className='Box1'>
    <div className='box2'>
        <h1>Over 9 Million</h1>
        <p>customer trust us & have bought their insurance on policyBazar</p>
        </div>
        <div className='box2'>
        <h1>50+ Insurers</h1>
        <p>partnred with us so that you can compare easily & transparently</p>
    </div>
   

  
    <div className='box2'>
      <h1>Great Price</h1>
      <p>for all kinds of insurance plan availabe online for all kinds of insurance plan availble online</p>
    </div>

<div className='box2'>
      <h1>Claims</h1>
      <p>support bulit in with every policy for help, when you need it the most</p>
    </div>
    
    </div>
 
    // </div>
  )
}

export default About
