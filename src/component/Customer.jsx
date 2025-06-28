
import React from 'react';
import './Customer.css';
import twentyfour from './twentyfour.png';

const Customer = () => {
  return (
    <div className='customer-main'>
      <div className='customer-2'>
        <h1>What Our Customer <span>Are Saying?</span></h1>
      </div>

      <div className='customer3'>

        <div className='customer4'>
          <div className='customer5'>
            <p>
              Contrary to popular belief, Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis porro ea minima provident architecto.
            </p>
            <div className='customer6'>
              <img src={twentyfour} alt='twentyfour'/>
              <div className='customer-info'>
                <h2>Macho Melson</h2>
                <span>CEO</span>
              </div>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className='customer4'>
          <div className='customer5'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excellent service, very reliable and trustworthy.
            </p>
            <div className='customer6'>
              <img src={twentyfour} alt='twentyfour'/>
              <div className='customer-info'>
                <h2>Anna Bella</h2>
                <span>Founder</span>
              </div>
            </div>
          </div>
        </div>

         {/* Box 2 */}
        <div className='customer4'>
          <div className='customer5'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excellent service, very reliable and trustworthy.
            </p>
            <div className='customer6'>
              <img src={twentyfour} alt='twentyfour'/>
              <div className='customer-info'>
                <h2>Anna Bella</h2>
                <span>Founder</span>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="spinner">....</div>
    </div>
  );
};

export default Customer;
