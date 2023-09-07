import React from 'react';
import styles from '/css/WhyChooseEzLicence.module.css';
import { FaAngleRight } from 'react-icons/fa';
import Link from 'next/link';

const WhyChooseEzLicence = () => {
  return (
    <section className={`${styles.total} total`}>
      <div className='container text-center'>
        <div className='row'>
          <div className='small-12 columns'>
            <h5 className={`${styles.title } title `}>Why choose EzLicence?</h5>
            <span className={`${styles.lead} lead`}>
              Unlike a typical driving school, EzLicence is an Australian first platform that allows learner drivers & parents to
              <u className={`${styles.lead1} lead1`}> find, compare and book verified driving instructors online.</u>
              The platform brings transparency, choice and efficiency to the selection of a driving instructor and the ongoing management of driving lessons.
            </span>
          </div>
        </div>
        <div className='row caps' data-equalizer=''>
          {/* Three panels for driving instructors, suburbs serviced, and online bookings */}
          {/* Each panel displays the count and a title */}
          <div className='medium-4 columns medium-margin-top-30' data-equalizer-watch=''>
            <div className='panel bg-yellow'>
              <button disabled="disabled" className={`${styles.Button} Button`} >
                <span className={`${styles.sep} sep`}>900+</span>
                <br/> 
                <span className={`${styles.sep1} sep1`}> DRIVING INSTRUCTORS </span>
              </button>
            </div>
          </div>
          <div className='medium-4 columns medium-margin-top-30' data-equalizer-watch=''>
            <div className='panel bg-yellow'>
              <button disabled="disabled" className={`${styles.Button} Button`}>
                <span className={`${styles.sep} sep`}>2500+</span>
                <br/><span className={`${styles.sep1} sep1`}> SUBURBS SERVICED</span>
              </button>
            </div>
          </div>
          <div className='medium-4 columns medium-margin-top-30' data-equalizer-watch=''>
            <div className='panel bg-yellow'>
              <button disabled="disabled" className={`${styles.Button} Button`}>
                <span className={`${styles.sep} sep`}>#1</span>
                <br/><span className={`${styles.sep1} sep1`}>ONLINE BOOKINGS</span>
              </button>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <div className='row'>
          <div className='small-12 columns'>
            <ul className={`${styles.head2} head2`}>
              <li>
            <div className='media'>
            <span className={`${styles.icon} icon`}>✓ </span>
            <span className='media-body'>Choose your own private driving instructor</span>
            </div>
              </li>
              <br/>
              <li>
            <div className='media'>
            <span className={`${styles.icon} icon`}>✓ </span>
            <span className='media-body'>Largest choice of driving instructors in Australia</span>
            </div>
              </li>
              <br/>
              <li>
            <div className='media'>
            <span className={`${styles.icon} icon`}>✓ </span>
            <span className='media-body'>Book driving lessons online in real-time</span>
            </div>
              </li>
              <li>
              <br/>
              <li>
            <div className='media'>
            <span className={`${styles.icon} icon`}>✓ </span>
            <span className='media-body'>Driving instructor profiles, ratings & reviews</span>
            </div>
              </li>
              <br/>
              <li>
            <div className='media'>
            <span className={`${styles.icon} icon`}>✓ </span>
            <span className='media-body'>Manage your driving lesson bookings online</span>
            </div>
              </li>
              <br/>
              <li>
            <div className='media'>
            <span className={`${styles.icon} icon`}>✓ </span>
            <span className='media-body'>Change your driving instructor online</span>
            </div>
              </li>
              <br/>
              <li>
            <div className='media'>
            <span className={`${styles.icon} icon`}>✓ </span>
            <span className='media-body'>International driver’s licence conversions</span>
            </div>
              </li>
              <br/>
              <li>
            <div className='media'>
            <span className={`${styles.icon} icon`}>✓ </span>
            <span className='media-body'>Book driving lessons with flexibility</span>
            </div>
              </li>
              <br/>
              <li>
            <div className='media'>
            <span className={`${styles.icon} icon`}>✓ </span>
            <span className='media-body'>Licenced and accredited driving instructors</span>
            </div>
              </li>
              <br/>
              <li>
            <div className='media'>
            <span className={`${styles.icon} icon`}>✓ </span>
            <span className='media-body'>Get one free lesson with keys2drive</span>
            </div>
              </li>
              <br/>
              <li>
            <div className='media'>
            <span className={`${styles.icon} icon`}>✓ </span>
            <span className='media-body'>Eligible for bonus log book hours (1 hr = 3 hrs)</span>
            </div>
              </li>
              <br/>
              <li>
            <div className='media'>
            <span className={`${styles.icon} icon`}>✓ </span>
            <span className='media-body'>Driving school instructor cars dual controlled</span>
            </div>
              </li>
              <br/>
              <li>
            <div className='media'>
            <span className={`${styles.icon} icon`}>✓ </span>
            <span className='media-body'>Auto & manual cars available - or use your own!</span>
            </div>
              </li>
              <br/>
              <li>
            <div className='media'>
            <span className={`${styles.icon} icon`}>✓ </span>
            <span className='media-body'>Your very own private driving instructor</span>
            </div>
              </li>
              <br/>
              <li>
            <div className='media'>
            <span className={`${styles.icon} icon`}>✓ </span>
            <span className='media-body'>Review all of the driving schools in your area</span>
            </div>
              </li>
              <br/>
              <li>
            <div className='media'>
            <span className={`${styles.icon} icon`}>✓ </span>
            <span className='media-body'>Patient & friendly male & female driving instructors</span>
            </div>
              </li>
            {/* ... (other features) */}
              </li>
              <br/>
           {/* Add more list items for other features */}
           </ul>
          </div>


          <div className={`${styles.section} section`}>
            <button  className={`${styles.Button1} Button1`} >
              <Link href="https://www.ezlicence.com.au/driving-lessons" className={styles.buttontext}>
                Book a driving school today <span className={`${styles.iconContainer}`}>
             <FaAngleRight size={16} /></span>
                </Link>
              </button>
            </div>

        </div>
      </div>
      <br/>
      <hr/>
    </section>
  );
};

export default WhyChooseEzLicence;
