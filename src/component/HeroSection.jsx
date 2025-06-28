import React from 'react';
import './HeroSection.css';
// import { FaArrowRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import doctor from './doctor.png';
import second from './second.png';
import three from './three.png';
import four from './four.png';
import five from './five.png';
import six from './six.png';
import seven from './seven.png';
import eight from './eight.png';
import nine from './nine.png';
import ten from './ten.png';

const HeroSection = () => {
  return (
    <div className="hero-section">
      
      <div className="hero-heading">
        <h1>Click to buy an <span>Insurance</span></h1>
      </div>

      <div className="hero-container">

        <div className="card">
          <div className="card-box">
            <img src={doctor} alt="doctor" />
            <div className="arrow-circle"><FaArrowRight /></div>
          </div>
          <div className="card-title">Family Floater Health</div>
        </div>

        <div className="card">
          <div className="card-box">
            <img src={second} alt="second" />
            <div className="arrow-circle"><FaArrowRight /></div>
          </div>
          <div className="card-title">Critical Illness Cover</div>
        </div>

        <div className="card">
          <div className="card-box">
            <img src={three} alt="third" />
            <div className="arrow-circle"><FaArrowRight /></div>
          </div>
          <div className="card-title">Critical Illness Cover</div>
        </div>

        <div className="card">
          <div className="card-box">
            <img src={four} alt="fourth" />
            <div className="arrow-circle"><FaArrowRight /></div>
          </div>
          <div className="card-title">Car Insurance</div>
        </div>

        <div className="card">
          <div className="card-box">
            <img src={five} alt="fifth" />
            <div className="arrow-circle"><FaArrowRight /></div>
          </div>
          <div className="card-title">2 Wheeler Insurance</div>
        </div>

        <div className="card">
          <div className="card-box">
            <img src={six} alt="sixth" />
            <div className="arrow-circle"><FaArrowRight /></div>
          </div>
          <div className="card-title">Pay As You Drive</div>
        </div>

        <div className="card">
          <div className="card-box">
            <img src={seven} alt="seventh" />
            <div className="arrow-circle"><FaArrowRight /></div>
          </div>
          <div className="card-title">Third Party</div>
        </div>

        <div className="card">
          <div className="card-box">
            <img src={eight} alt="eighth" />
            <div className="arrow-circle"><FaArrowRight /></div>
          </div>
          <div className="card-title">Commercial Vehicle</div>
        </div>

        <div className="card">
          <div className="card-box">
            <img src={nine} alt="ninth" />
            <div className="arrow-circle"><FaArrowRight /></div>
          </div>
          <div className="card-title">Home Insurance</div>
        </div>

        <div className="card">
          <div className="card-box">
            <img src={ten} alt="tenth" />
            <div className="arrow-circle"><FaArrowRight /></div>
          </div>
          <div className="card-title">Home Loan</div>
        </div>

      </div>

      <div className='hero-button'>
        <button type='button'>View All</button>
      </div>

    </div>
  )
}

export default HeroSection;
