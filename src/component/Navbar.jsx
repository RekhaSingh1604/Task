import React from 'react'
import './Navbar.css'
import helo from './helo.png'
import { TbBrandFacebook } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";



const Navbar = () => {
  return (
    <div className='top_navbar'>
      <div className='adjust'>

      <div className='nav1'>
        <h1><FaPhoneAlt /> +4444444444</h1>
        <h1> <IoMdMail /> example@gmail.com</h1>
      </div>

      <div className='left-side'>
        <p><TbBrandFacebook /></p>
        <p><FaInstagram /></p>
        <p><FaTwitter /></p>
        <p><SlSocialLinkedin /></p>
      </div>
    </div>


    <div className='second_nav'>
      <div className='second1'>

        <div className='second2'>
          <h1>Demo</h1>
        </div>

        <div className='second3'>
          <a>Health<IoIosArrowDown/></a>
          <a>Motor <IoIosArrowUp /></a>
          <a>Other<IoIosArrowUp /></a>
          <a>Raise A claim <IoIosArrowUp /></a>
        </div>

        <div className='buton'>
          <p>Login</p>
        </div>
      </div>
    </div>

    <div className='image_nav'>
      <img src={helo} alt='helo'/>
    </div>
    </div>
  )
}

export default Navbar
