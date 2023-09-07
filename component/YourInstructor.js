
import React from 'react';
import Image from 'next/image';
import styles from '/css/your-instructor.module.css';
import { FaAngleRight } from 'react-icons/fa';
import Link from 'next/link';

const YourInstructor = () => {
   const isTwoColumnLayout = window.innerWidth > (window.innerWidth * 1)/ 3  ;
  return (
    <section className={`${styles.Section} Section`}>
      <div className='container text-center'>
        <div className='row'>
          <div className='small-12 columns'>
            <h4 className={`${styles.title} title`} >Book driving lessons with confidence</h4>
            </div>
            <div className={`${styles.lead} lead`}>
            <span>Choose a driving instructor you can trust</span>
          </div>
        </div>
        <div className='row' data-equalizer>
          <div className={`${isTwoColumnLayout ? styles.twoColumn : ''}`}>
            <div className={`${styles.icon} icon`}>
            
              <svg 
                
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                x='0px'
                y='0px'
                width='64px'
                height='64px'
                viewBox='0 0 64 64'
                enableBackground='new 0 0 64 64'
                xmlSpace='preserve'
                strokeWidth='3'
                fill='yellow'
              >
              <g stroke-width="3" transform="translate(0, 0)" >
              <polygon fill="none" stroke="#ffcc00" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" points="32,5.846 40.498,23.065 59.5,25.826 45.75,39.229 48.996,58.154 32,49.219 15.004,58.154 18.25,39.229 4.5,25.826 23.502,23.065 " stroke-linejoin="miter">
              </polygon></g>

              </svg>
            
            </div>

            <h3 className={`${styles.head2} head2`} data-equalizer-watch>
              Instructor ratings
            </h3>
            <p className={`${styles.content} content`} >Access peer reviews & find an instructor who has consistently provided a great learning experience.</p>
          </div>

          <div className={`${isTwoColumnLayout ? styles.twoColumn : ''}`}>
            <p className={`${styles.icon} icon`}>
              <svg
                className='size-60 primary-600'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                x='0px'
                y='0px'
                width='64px'
                height='64px'
                viewBox='0 0 64 64'
                enableBackground='new 0 0 64 64'
                xmlSpace='preserve'
                strokeWidth='3'
              >
             <g stroke-width="3" transform="translate(0, 0)">
             <polyline data-cap="butt" fill="none" stroke="#ffcc00" stroke-width="3" stroke-miterlimit="10" points="60,16 4,16 4,34 " stroke-linejoin="miter" stroke-linecap="butt"></polyline> 
             <polyline data-cap="butt" data-color="color-2" fill="none" stroke="#ffcc00" stroke-width="3" stroke-miterlimit="10" points="4,48 60,48 60,30 " stroke-linejoin="miter" stroke-linecap="butt">
             </polyline> <polyline fill="none" stroke="#ffcc00" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" points="48,28 60,16 48,4 " stroke-linejoin="miter">
             </polyline> <polyline data-color="color-2" fill="none" stroke="#ffcc00" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" points=" 16,36 4,48 16,60 " stroke-linejoin="miter"></polyline></g>
              </svg>
            </p>
            <h3 className={`${styles.head2} head2`} data-equalizer-watch>
              Accredited
            </h3>
            <p className={`${styles.content} content`}>We obtain up to date copies of relevant instructor accreditations & verify their working with children credentials.</p>
          </div>

          <div className={`${isTwoColumnLayout ? styles.twoColumn : ''}`}>
            <p className={`${styles.icon} icon`}>
              <svg
                className='size-60 primary-600'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                x='0px'
                y='0px'
                width='64px'
                height='64px'
                viewBox='0 0 64 64'
                enableBackground='new 0 0 64 64'
                xmlSpace='preserve'
                strokeWidth='3'
              >
             <g stroke-width="3" transform="translate(0.5, 0.5)">
             <polyline points="16 55 16 61 5 61 5 55" fill="none" stroke="#ffcc00" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" stroke-linejoin="miter">
             </polyline> <polyline points="59 55 59 61 48 61 48 55" fill="none" stroke="#ffcc00" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" stroke-linejoin="miter">
             </polyline> <path d="M55,37,51.379,22.515A2,2,0,0,0,49.438,21H14.562a2,2,0,0,0-1.94,1.515L9,37" fill="none" stroke="#ffcc00" stroke-miterlimit="10" stroke-width="3" data-cap="butt" stroke-linecap="butt" stroke-linejoin="miter">
             </path> <path d="M59,55H5V41.828a2,2,0,0,1,.586-1.414L9,37H55l3.414,3.414A2,2,0,0,1,59,41.828Z" fill="none" stroke="#ffcc00" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" stroke-linejoin="miter"></path> <circle cx="14" cy="46" r="3" fill="none" stroke="#ffcc00" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" stroke-linejoin="miter"></circle> 
             <circle cx="50" cy="46" r="3" fill="none" stroke="#ffcc00" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" stroke-linejoin="miter"></circle> 
             <polyline points="2 17 32 3 62 17" fill="none" stroke="#ffcc00" stroke-miterlimit="10" stroke-width="3" data-cap="butt" data-color="color-2" stroke-linecap="butt" stroke-linejoin="miter"></polyline> 
             <line x1="27" y1="46" x2="37" y2="46" fill="none" stroke="#ffcc00" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" stroke-linejoin="miter"></line></g>
              </svg>
            </p>
            <h3 className={`${styles.head2} head2`} data-equalizer-watch>
              Vehicle safety
            </h3>
            <p className={`${styles.content} content`}>Gain access to instructor vehicle make, model, year & safety rating.</p>
          </div>

          <div className={`${isTwoColumnLayout ? styles.twoColumn : ''}`}>
            <p className={`${styles.icon} icon`}>
              <svg
                className='size-60 primary-600'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                x='0px'
                y='0px'
                width='64px'
                height='64px'
                viewBox='0 0 64 64'
                enableBackground='new 0 0 64 64'
                xmlSpace='preserve'
                strokeWidth='3'
              >
             <g stroke-width="3" transform="translate(0, 0)">
             <polyline data-color="color-2" fill="none" stroke="#ffcc00" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" points=" 50,18 62,18 62,48 54,48 54,58 40,48 28,48 " stroke-linejoin="miter">
             </polyline> <polygon fill="none" stroke="#ffcc00" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" points="50,4 2,4 2,38 12,38 12,52 28,38 50,38 " stroke-linejoin="miter"></polygon></g>
              </svg>
            </p>
            <h3 className={`${styles.head2} head2`} data-equalizer-watch>
              Always your choice
            </h3>
            <p className={`${styles.content} content`}>Don't like your current instructor? Select a new instructor via our online portal, no questions asked.</p>
          </div>
          {/* Add more columns for other features */}
        </div>

        
          <button  className={`${styles.Button1} Button1`} >
          <Link href='https://www.ezlicence.com.au/driving-lessons' className={styles.buttontext}>
              Book driving lessons now <span className={`${styles.iconContainer}`}>
             <FaAngleRight size={16} /></span>
             </Link>
            </button>
        
      </div>
      <br/><br/><br/>
    </section>
  );
};

export default YourInstructor;
