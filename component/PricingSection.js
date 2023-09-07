import { FaSearch } from 'react-icons/fa';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '/css/PricingSection.module.css';

import { FaCheck } from 'react-icons/fa';

const PricingSection = () => {
  const router = useRouter();
  const [transmission, setTransmission] = useState('Auto');
  const [suburb, setSuburb] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [inputValue, setInputValue] = useState('');


  const handleTransmissionChange = (event) => {
    setTransmission(event.target.value);
  };

   const handleSuburbChange = (event) => {
    setInputValue(event.target.value);
    setSuburb(event.target.value);
  };

 

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (transmission && suburb.trim() !== '') {
      // Perform your search or routing logic here
      router.push(`/search_instructor?transmission=${transmission}&suburb=${suburb}`);
    }
  };


  

const handleButtonClick1 = (buttonId) => {
    setTransmission(buttonId);
  };


  const isButtonDisabled = !transmission || !suburb || suburb.trim() === '';

  
  return (
    <section className={styles.PricingSection}>
      <div className='container'>

    
    <h3 className={`${styles.title} title`}>
      <span>
        <svg  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" strokeWidth="3">
                  <g strokeWidth="3" transform="translate(0.5, 0.5)">
                    <circle fill="none" stroke="#444444" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" cx="32" cy="32" r="30"></circle>
                    <line data-color="color-2" fill="none" stroke="#444444" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" x1="32" y1="12" x2="32" y2="52"></line>
                    <path data-color="color-2" fill="none" stroke="#444444" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" d="M42,20 c-4.545-2.361-19.148-4.145-19.148,3.983c0,9.731,18.182,6.296,18.182,14.882s-11.818,7.942-20,5.151"></path>
                  </g>
                </svg>
      </span>

      Driving lesson <br /> pricing & packages
    </h3>

  <p className={`${styles.ctatext} ctatext ${styles.Fontsize} Fontsize`}>Buy more lessons & get more discount</p>
</div>



      <div className={`${styles.subcon} subcon`}>
          <form
    className='simple_form new_public_search_record'
    id='new_public_search_record'
    noValidate='novalidate'
    onSubmit={handleSubmit}
          >
   
      <h4 className={`${styles.Fontsize1} Fontsize1`}>
        <FaSearch size={16} />
        Check pricing for your suburb
      </h4>



  <div className={styles.small}>
    <div className={styles.buttonContainer}>
      <button
        className={`${styles.buttonm} ${transmission === 'Auto' ? styles.selected : ''}`}
        onClick={() => handleButtonClick1('Auto')}
      >
        {transmission === 'Auto' && <FaCheck className={styles.icon} />}
        Auto
      </button>
      <button
        className={`${styles.buttonm} ${transmission === 'Manual' ? styles.selected : ''}`}
        onClick={() => handleButtonClick1('Manual')}
      >
        {transmission === 'Manual' && <FaCheck className={styles.icon} />}
        Manual
      </button>
    </div>
 </div>

<br/>

           <div className={`${styles.inputButtonContainer} inputButtonContainer`}>
              <div className={`${styles.dropdowncontainer} dropdowncontainer`}>
                <button className={`${styles.dropdownbutton} dropdownbutton`} onClick={handleButtonClick}>
                  Enter your suburb
                </button>
                {showDropdown && (
                  <div className={`${styles.inputcontainer} inputcontainer`}>
                    <input
                      className={`${styles.dropdowninput} dropdowninput`}
                      type="text"
                      placeholder=""
                      value={inputValue}
                      onChange={handleSuburbChange}
                    />
                    <div className={`${styles.dropdown} dropdown`}>
                      Please enter your postcode
                    </div>
                  </div>
                )}
              </div>

              <button
                type='submit'
                name='commit'
                value='Search'
                id='button-search-pricing-instructor'
                data-disable-with='Searching ...'
                data-target='search-instructor'
                data-record=''
                disabled={isButtonDisabled}
        className={`${styles.button} button ${isButtonDisabled ? styles.disabled : ''}`}
        onClick={handleSubmit}
              >
                Search
              </button>
            </div>
         
        </form>
      </div>
    </section>
  );
};

export default PricingSection;
