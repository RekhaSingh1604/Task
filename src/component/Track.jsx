
import React from 'react';
import './Track.css';
import seven from './seven.png';   
import five from './five.png';         

const Track = () => {
  return (
    <div className="claim-section">

      
      <div className="claim-box">
        
       
        <div className="claim-image">
          <img src={seven} alt="scooter" />
        </div>

       
        <div className="claim-text">
          <p>It's Time to Claim Now</p>
          <h1>From Quote To Coverage</h1>
        </div>

        
        <div className="claim-right">
          <img src={five} alt="bike" />
          <button className="claim-button">Track Your Claim</button>
        </div>

      </div>

     

    </div>
  );
};

export default Track;
