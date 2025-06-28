// 
import React from "react";
import "./frequently.css";
import { MdKeyboardArrowDown } from "react-icons/md";


const frequently = () => {
  return (
    <div className="faq-wrapper">
        <div className="h1">
                <h1>Frequently Asked <span>Question</span></h1></div>

      {/* Question 1 */}
      <div className="faq-box">
        <div className="faq-question">
          Which cancer types is covered?
          <span className="arrow"><MdKeyboardArrowDown />
</span>
        </div>
        {/* no answer here */}
      </div>

      {/* Question 2 with answer */}
      <div className="faq-box">
        <div className="faq-question">
          Are there any age limit?
          <span className="arrow"><MdKeyboardArrowDown />
</span>
        </div>
        <div className="faq-answer">
          Yes, there is an age limit. The age span is between 18-50 for this product.
          This age groups are important for some critical illnesses. Insurers can renew
          their policies every other year till 51 years old.
        </div>
      </div>

      {/* Question 3 */}
      <div className="faq-box">
        <div className="faq-question">
          How %25 cash back payment works?
          <span className="arrow"><MdKeyboardArrowDown />
</span>
        </div>
      </div>

      {/* Question 4 */}
      <div className="faq-box">
        <div className="faq-question">
          How I use 3 year freemium option?
          <span className="arrow"><MdKeyboardArrowDown />
</span>
        </div>
      </div>

      {/* Question 5 */}
      <div className="faq-box">
        <div className="faq-question">
          What is the process to get lump sum payment when risk is realized?
          <span className="arrow"><MdKeyboardArrowDown />
</span>
        </div>
      </div>
    </div>
  );
};

export default frequently;
