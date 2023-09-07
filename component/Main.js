import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FaCheck } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import styles from '/css/Main.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Main = () => {

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
      <div className="Main" style={{ backgroundImage: `url('/static/bg.png')` }}>
<br/>
    <h1 className={styles['title']}>Where do you need driving lessons?</h1>

      
  <div className={styles.big}>
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

  <div className={`${styles.inputButtonContainer} inputButtonContainer`}>
      <div className={`${styles.dropdowncontainer} dropdowncontainer`}>
        <button className={`${styles.dropdownbutton} dropdownbutton`} onClick={handleButtonClick}>
          Enter your suburb
        </button>
        {showDropdown && (
          <div className={`${styles.inputcontainer} inputcontainer`}>
            <div className={styles.white}>
              <input
                className={`${styles.dropdowninput} dropdowninput`}
                type="text"
                placeholder=""
                value={inputValue}
                onChange={handleSuburbChange}
              />
              Please enter a suburb or postcode
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
              </div>
            



      

    <div className={styles['page-layout']} >
      <div className={styles['image-container']}>
         <div className={`${styles.Image} Image`}>
            <Image src="/static/car.png" alt='' width='400' height='200'/>
          </div>
</div>
      <div className={styles['content-container']}>

      <div className={`${styles.content} content`}>
      <FaCheck className={`${styles.icon} icon`} />&nbsp; Choose from 900+ verified instructors
      </div>
      <div className={`${styles.content} content`}>
      <FaCheck className={`${styles.icon} icon`} />&nbsp; 100,000+ new learners per year
      </div>
      <div className={`${styles.content} content`}>
      <FaCheck className={`${styles.icon} icon`} /> &nbsp; 24/7 online booking & rescheduling
      </div>
      <div className={`${styles.content} content`}>
      <FaCheck className={`${styles.icon} icon`} /> &nbsp; Change your instructor anytime
      </div>

      <br/>
      <hr/>
      <br/>
      
<div className={`${styles.s2} s2`}>
<strong className={`${styles.word} word`}>Google Review</strong>
&nbsp;&nbsp;
      <span className={`${styles.word} word`} style={{ border: '1px solid white', borderRadius: '13px', padding: '1px 10px' }}>4.9</span>
     
      
<span class='text-yellow inline-block va-m small-fontsize-14'>
</span>

<div>
<FaStar className={`${styles.star} star`}/>
<FaStar className={`${styles.star} star`}/>
<FaStar className={`${styles.star} star`}/>
<FaStar className={`${styles.star} star`}/>
<FaStar className={`${styles.star} star`}/>

&nbsp;&nbsp;
&nbsp;&nbsp;

<Link href="https://www.google.com/search?q=ezlicence&oq=ezlicence+&aqs=chrome..69i57j0i512l3j69i60l4.5588j0j7&sourceid=chrome&ie=UTF-8#lrd=0x6ab0cf08b2b3a8d5:0x1c7668abf7d66271,1" className={`${styles.word1} word1`}>
                Reviews:5624
                </Link>
</div>
</div>
</div>




   </div>
     </div>
);
};

export default Main;