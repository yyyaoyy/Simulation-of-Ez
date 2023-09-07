// pages/AdvantagesSection.js
import React, { useState } from 'react';

import styles from '/css/AdvantageItem.module.css';
import { FaPlus } from 'react-icons/fa';

  const AdvantagesSection = () => {

  const [showContent, setShowContent] = useState(false);
  const handleToggleContent = () => {
    setShowContent(!showContent);
  };

  const [showContent1, setShowContent1] = useState(false);

  const handleToggleContent1 = () => {
    setShowContent1(!showContent1);
  };

    const [showContent2, setShowContent2] = useState(false);

  const handleToggleContent2 = () => {
    setShowContent2(!showContent2);
  };

    const [showContent3, setShowContent3] = useState(false);

  const handleToggleContent3 = () => {
    setShowContent3(!showContent3);
  };

  const [showContent4, setShowContent4] = useState(false);
  const handleToggleContent4 = () => {
    setShowContent4(!showContent4);
  };

  const [showContent5, setShowContent5] = useState(false);
  const handleToggleContent5 = () => {
    setShowContent5(!showContent5);
  };

  const [showContent6, setShowContent6] = useState(false);
  const handleToggleContent6 = () => {
    setShowContent6(!showContent6);
  };

  const [showContent7, setShowContent7] = useState(false);
  const handleToggleContent7 = () => {
    setShowContent7(!showContent7);
  };

  const [showContent8, setShowContent8] = useState(false);
  const handleToggleContent8 = () => {
    setShowContent8(!showContent8);
  };

  const [showContent9, setShowContent9] = useState(false);
  const handleToggleContent9 = () => {
    setShowContent9(!showContent9);
  };

  return (
    <section className='bg-white section'>
      <div className='container medium-margin-bottom-20'>
        
            <h4  className={`${styles.title } title `}>
              The EzLicence advantage
            </h4>
          <div className='media-left medium-padding-right-20'>
            <svg className="size-40 primary-600" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink" 
            width="64px" height="64px" viewBox="0 0 64 64" strokeWidth="3">
        <g strokeWidth="3" transform="translate(0.5, 0.5)">
        <line x1="24" y1="2" x2="40" y2="2" fill="none" stroke="#ffcc00" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" stroke-linejoin="miter">
        </line> 
        <line x1="32" y1="2" x2="32" y2="5" fill="none" stroke="#ffcc00" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" stroke-linejoin="miter">
        </line> 
        <circle cx="32" cy="36" r="26" fill="none" stroke="#ffcc00" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" stroke-linejoin="miter">
        </circle> 
        <path data-color="color-2" d="M28.716,38.284c-1.261-1.814-5.281-14.6-5.281-14.6S34.022,31.9,35.283,33.717a4,4,0,1,1-6.567,4.567Z" fill="none" stroke="#ffcc00" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" stroke-linejoin="miter">
        </path> 
        <line data-color="color-2" x1="32" y1="16" x2="32" y2="20" fill="none" stroke="#ffcc00" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" stroke-linejoin="miter">
        </line> 
        <line data-color="color-2" x1="52" y1="36" x2="48" y2="36" fill="none" stroke="#ffcc00" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" stroke-linejoin="miter">
        </line> 
        <line data-color="color-2" x1="32" y1="56" x2="32" y2="52" fill="none" stroke="#ffcc00" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" stroke-linejoin="miter">
        </line> 
        <line data-color="color-2" x1="12" y1="36" x2="16" y2="36" fill="none" stroke="#ffcc00" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" stroke-linejoin="miter">
        </line> 
        <line x1="50" y1="9" x2="59" y2="18" fill="none" stroke="#ffcc00" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" stroke-linejoin="miter">
        </line>
        </g>
        </svg>
          </div>

            <div >  
            <a className={`${styles.link} ${showContent ? styles.active : ''}`} onClick={handleToggleContent}>
            
            <div className={`${styles.mediaBody} mediaBody`}>
            <h4 className={`${styles.heading} heading`}>
             Book driving lessons online in under 60 seconds 
            </h4>
            </div>

            <div className={`${styles.icon } icon `}>
            <FaPlus />
            </div>
            <hr/>
            </a>
            {showContent && (
            <div className={`${styles.content} content`} id='accordion-advantage-1'>
            <p>
            Booking <a href="/driving-lessons">driving lessons</a> through EzLicence is a quick and hassle free process that gives you all the choice and control. Why deal with traditional Driving Schools over the phone or by email when you can manage your driving instructor choice & book driving lessons yourself anywhere, and at any time through our secure online platform?
            </p>
            </div>
            )}
           </div>

           <svg className="size-40 primary-600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 64 64" strokeWidth="3">
           <g strokeWidth="3" transform="translate(0.5, 0.5)">
        <polyline data-color="color-2" fill="none" stroke="#ffcc00" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" points="18,2 8,2 8,12" />
        <polyline data-color="color-2" fill="none" stroke="#ffcc00" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" points="43,12 43,2 33,2" />
        <line fill="none" stroke="#ffcc00" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" x1="21" y1="34" x2="21" y2="42" />
        <path fill="none" stroke="#ffcc00" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" d="M30,35v-3.5 c0-2.485,2.015-4.5,4.5-4.5h0c2.485,0,4.5,2.015,4.5,4.5V35" />
        <path fill="none" stroke="#ffcc00" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" d="M39,33.5 c0-2.485,2.015-4.5,4.5-4.5h0c2.485,0,4.5,2.015,4.5,4.5V36" />
        <path fill="none" stroke="#ffcc00" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" d="M18.197,61 C16.123,57.661,13,54.23,13,50 V38c0-2.209,1.791-4,4-4h4V11.5C21,9.015,23.015,7,25.5,7h0c2.485,0,4.5,2.015,4.5,4.5V34" />
        <path fill="none" stroke="#ffcc00" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" d="M48,36c0,0,0.125-4,4-4 c2.312,0,4,1.375,4,4c0,10.047-2.441,19.483-4.21,25" />
           </g>
           </svg>

           <div>  
            <a className={`${styles.link} ${showContent1 ? styles.active : ''}`} onClick={handleToggleContent1}>
            <div className={`${styles.mediaBody} mediaBody`}>
            <h4 className={`${styles.heading} heading`}>
             More control over your bookings 
            </h4>
            </div>

            <div className={`${styles.icon } icon `}>
            <FaPlus />
            </div>
            <hr/>

            </a>
            {showContent1 && (
            <div className={`${styles.content} content`} id='accordion-advantage-1'>
            <p>
            From the moment you enter your pickup suburb you have more control over your driving lesson compared to traditional driving schools. Choose, compare, and book your driving instructor and preferred vehicle transmission based on in-depth driving instructor profiles, including ratings and reviews from learners just like you. The best part? Bookings are made in real-time, so you can book your driving lesson instantly and at a convenient time.</p>
            </div>
            )}
           </div>

           <svg className="size-40 primary-600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 64 64" strokeWidth="3">
           <g strokeWidth="3" transform="translate(0.5, 0.5)">
        <line data-color="color-2" x1="32" y1="29" x2="32" y2="45" fill="none" stroke="#ffcc00" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="3" strokeLinejoin="miter" />
        <line data-color="color-2" x1="40" y1="37" x2="24" y2="37" fill="none" stroke="#ffcc00" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="3" strokeLinejoin="miter" />
        <line data-cap="butt" x1="3" y1="20" x2="61" y2="20" fill="none" stroke="#ffcc00" strokeMiterlimit="10" strokeWidth="3" strokeLinecap="butt" strokeLinejoin="miter" />
        <rect x="3" y="8" width="58" height="48" fill="none" stroke="#ffcc00" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="3" strokeLinejoin="miter" />
        <circle data-color="color-2" data-stroke="none" cx="10" cy="14" r="2" fill="#ffcc00" />
        <circle data-color="color-2" data-stroke="none" cx="18" cy="14" r="2" fill="#ffcc00" />
          </g>
          </svg>



           <div>  
            <a className={`${styles.link} ${showContent2 ? styles.active : ''}`} onClick={handleToggleContent2}>
            <div className={`${styles.mediaBody} mediaBody`}>
            <h4 className={`${styles.heading} heading`}>
             Your online dashboard 
            </h4>
            </div>
            <div className={`${styles.icon } icon `}>
            <FaPlus />
            </div>
            <hr/>

            </a>
            {showContent2 && (
            <div className={`${styles.content} content`} id='accordion-advantage-1'>
            <p>
            Manage your preferences, existing bookings & future driving lesson bookings from your secure online account. Reschedule bookings up to 24 hrs prior to the lesson start time - perfect for those with an unpredictable schedule! Want to try a different driving instructor? You can change your driving instructor at the push of a button, no questions asked.</p>
            </div>
            )}
           </div>


           <svg className="size-40 primary-600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 64 64" strokeWidth="3">
           <g strokeWidth="3" transform="translate(0.5, 0.5)">
        <path data-color="color-2" fill="none" stroke="#ffcc00" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" d="M39,19H25v0 c0-3.314,2.686-6,6-6h2C36.314,13,39,15.686,39,19L39,19z" />
        <circle data-color="color-2" fill="none" stroke="#ffcc00" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" cx="32" cy="6" r="4" />
        <path data-color="color-2" fill="none" stroke="#ffcc00" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" d="M16,28H2v0 c0-3.314,2.686-6,6-6h2C13.314,22,16,24.686,16,28L16,28z" />
        <circle data-color="color-2" fill="none" stroke="#ffcc00" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" cx="9" cy="15" r="4" />
        <path data-color="color-2" fill="none" stroke="#ffcc00" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" d="M63,28H49v0 c0-3.314,2.686-6,6-6h2C60.314,22,63,24.686,63,28L63,28z" />
        <circle data-color="color-2" fill="none" stroke="#ffcc00" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" cx="56" cy="15" r="4" />
        <circle fill="none" stroke="#ffcc00" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" cx="32" cy="36" r="9" />
        <path fill="none" stroke="#ffcc00" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" d="M35,50h-6 c-6.627,0-12,5.373-12,12v0h30v0C47,55.373,41.627,50,35,50z" />
           </g>
           </svg>


           <div>  
            <a className={`${styles.link} ${showContent3 ? styles.active : ''}`} onClick={handleToggleContent3}>
            <div className={`${styles.mediaBody} mediaBody`}>
            <h4 className={`${styles.heading} heading`}>
            The widest range of driving instructors 
            </h4>
            </div>
            <div className={`${styles.icon } icon `}>
            <FaPlus />
            </div>
            <hr/>

            </a>
            {showContent3 && (
            <div className={`${styles.content} content`} id='accordion-advantage-1'>
            <p>EzLicence provides access to more than 900+ <a href="/instructors">fully qualified driving instructors</a> across Sydney, Melbourne, Brisbane, Perth, Adelaide, Hobart, Gold Coast, Sunshine Coast, Newcastle, Central Coast, Geelong, Toowoomba, Wollongong, Cairns, Coffs Harbour, Bendigo, Canberra. All driving instructors available through EzLicence are required to have a current, valid clearance for working with children, as well as having their vehicles equipped with dual control pedals for added safety. With an EzLicence driving instructor, you can be sure you’re in good hands.</p>
            </div>
            )}
           </div>


            <svg style={{ margin: '5px 0 -5px' }} className="size-40 primary-600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 64 64" strokeWidth="3">
            <g strokeWidth="3" transform="translate(0.5, 0.5)">
        <circle cx="46" cy="34" r="6" fill="none" stroke="#ffcc00" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="3" strokeLinejoin="miter" />
        <path d="M62,35c0,8.837-16,24-16,24S30,43.837,30,35a16,16,0,0,1,32,0Z" fill="none" stroke="#ffcc00" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="3" strokeLinejoin="miter" />
        <path d="M24,13c0,6.075-11,16-11,16S2,19.075,2,13a11,11,0,0,1,22,0Z" fill="none" stroke="#ffcc00" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="3" strokeLinejoin="miter" />
        <circle cx="13" cy="13" r="3" fill="none" stroke="#ffcc00" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="3" strokeLinejoin="miter" />
        <path d="M29,53A16,16,0,0,1,13,37" fill="none" stroke="#ffcc00" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="3" data-color="color-2" strokeLinejoin="miter" />
            </g>
            </svg>

            <div>  
            <a className={`${styles.link} ${showContent4 ? styles.active : ''}`} onClick={handleToggleContent4}>
            <div className={`${styles.mediaBody} mediaBody`}>
            <h4 className={`${styles.heading} heading`}>
             Servicing YOUR area 
            </h4>
            </div>
            <div className={`${styles.icon } icon `}>
            <FaPlus />
            </div>
            <hr/>
            </a>
            {showContent4 && (
            <div className={`${styles.content} content`} id='accordion-advantage-1'>
            <p>Thanks to our comprehensive driving instructor service area coverage, you can choose your pickup location from anywhere in Sydney, Melbourne, Brisbane, Adelaide, Perth, Hobart, Gold Coast, Sunshine Coast, Newcastle, Central Coast, Geelong, Toowoomba, Wollongong, Cairns, Coffs Harbour, Bendigo, Canberra or the surrounding areas.. EzLicence now proudly services over 2500+ suburbs across NSW, VIC, QLD, SA, TAS, WA and ACT, and will continue to grow.</p>
            </div>
            )}
           </div>
           <br/><br/>
           </div>



            <div >
            <div className={`${styles.submedia} submedia`}>
              <p>Finding the right driving school and instructor can be difficult. And time-consuming.</p>
              <p>There’s a lot to navigate when booking driving lessons and it can be difficult to find instructors that are close by.</p>
              <p>EzLicence removes the stress and time required to find a driving school by giving you access to the largest number of verified driving instructors in Australia.</p>
              <p>With EzLicence, you’re able to browse instructor profiles before you book your driving lessons,  meaning you can make a more informed decision.</p>
            

            <div >  
            <a className={`${styles.link} ${showContent5 ? styles.active : ''}`} onClick={handleToggleContent5}>
            
            <div className={`${styles.mediaBody} mediaBody`}>
            <span className={`${styles.subheading} subheading`}>
             How do I find private driving instructors near me? 
            </span>
            </div>

            <div className={`${styles.icon } icon `}>
            <FaPlus />
            </div>
            <hr/>
            </a>
            {showContent5 && (
            <div className={`${styles.subcontent} subcontent`} id='accordion-advantage-1'>
            <p>We know what it’s like when you first start learning to drive - we were all there once too. Some of us were nervous, some were excited, but all of us were ready to succeed. Where do you start when you are ready to choose a driving school? Our driving instructors are ready to help you achieve your goals, and at a pace you are comfortable with.</p>
              <p>Regardless of whether you’re learning to drive for the first time and looking to log your first few hours, or an experienced driver looking to ease yourself back into the driver’s seat with <a href="/driving-lessons/refresher-driving-lessons">refresher driving lessons</a>, our wide variety of driving instructors can cater to your individual needs. Any transmission, any suburb, any day; we’re here to help you become the safe and confident driver you need to be on the road.</p>
              <p>Learn from a true professional and book your <a href="/driving-lessons">driving lessons</a> with a private driving instructor at EzLicence, so you can get your driving experience started the right way. Choose a driving school in your area and begin learning to drive today.</p>
              <p class='font-bold'>Learn smart. Learn safe. Learn easy with EzLicence.</p>
            </div>
            )}
           </div>

            <div >  
            <a className={`${styles.link} ${showContent6 ? styles.active : ''}`} onClick={handleToggleContent6}>
            
            <div className={`${styles.mediaBody} mediaBody`}>
            <span className={`${styles.subheading} subheading`}>
             Book driving lessons with EzLicence to get on the road quicker
            </span>
            </div>

            <div className={`${styles.icon } icon `}>
            <FaPlus />
            </div>
            <hr/>
            </a>
            {showContent6 && (
            <div className={`${styles.subcontent} subcontent`} id='accordion-advantage-1'>
            <p>If you find yourself wondering, how can I book driving lessons near me?, we have you covered.</p>
              <p>Our online platform makes it easy to book driving lessons no matter where you are, connecting learners with verified instructors in your local area.</p>
              <p>
              <i>This allows you to get on the road faster.</i>
              </p>
              <p>The EzLicence platform is a fully-automated booking system, so you’ll be able to secure your spot hassle-free when you need to book your next driving lesson online.</p>
              <p>
              <strong>Once you book a driving instructor, you’ll be able to make real-time appointments! Your lesson will be automatically added to the instructor's calendar, making it easy to manage and schedule them when it suits you.</strong>
              </p>
              <p>
              <i>This makes the process of booking online driving lessons simpler in the future.</i>
              </p>
            </div>
            )}
           </div>

            <div >  
            <a className={`${styles.link} ${showContent7 ? styles.active : ''}`} onClick={handleToggleContent7}>
            
            <div className={`${styles.mediaBody} mediaBody`}>
            <span className={`${styles.subheading} heading`}>
             Book driving lessons on your terms
            </span>
            </div>

            <div className={`${styles.icon } icon `}>
            <FaPlus />
            </div>
            <hr/>
            </a>
            {showContent7 && (
            <div className={`${styles.subcontent} subcontent`} id='accordion-advantage-1'>
            <p>We understand everyone has different schedules.</p>
            <p>So, our user-friendly booking system allows you to book lessons that fit in with your lifestyle – whether that’s early morning, before work, or evening.</p>
            <p>You can rely on us to book driving lessons as you see fit. You can book driving lessons ahead of time or today — whichever works best for you!</p>
            <p>And you can book driving lessons in any vehicle, so sign up and get started!</p>
            </div>
            )}
           </div>


            <div >  
            <a className={`${styles.link} ${showContent8 ? styles.active : ''}`} onClick={handleToggleContent8}>
            
            <div className={`${styles.mediaBody} mediaBody`}>
            <span className={`${styles.subheading} heading`}>
             Book drivers lessons with a trusted instructor
            </span>
            </div>

            <div className={`${styles.icon } icon `}>
            <FaPlus />
            </div>
            <hr/>
            </a>
            {showContent8 && (
            <div className={`${styles.subcontent} subcontent`} id='accordion-advantage-1'>
            <p>Sourcing licensed and approved driving instructors can be time-consuming and difficult, so we’ve done the work for you.</p>
            <p>At EzLicence, we only work with driving <a href="/instructors">instructors</a> that are appropriately licenced and have valid “working with children” credentials.</p>
            <p>This gives learners and parents confidence they’re working with verified professionals who have the necessary qualifications and clearances.</p>
            <p>We want you to be free to focus on learning to drive rather than sorting through admin. Leave that to us!</p>

            </div>
            )}
           </div>

            <div >  
            <a className={`${styles.link} ${showContent9 ? styles.active : ''}`} onClick={handleToggleContent9}>
            
            <div className={`${styles.mediaBody} mediaBody`}>
            <span className={`${styles.subheading} subheading`}>
             Book driving lessons regardless of your requirements
            </span>
            </div>

            <div className={`${styles.icon } icon `}>
            <FaPlus />
            </div>
          
            </a>
            {showContent9 && (
            <div className={`${styles.subcontent} subcontent`} id='accordion-advantage-1'>
            <p>Yes, EzLicence caters to all driving requirements.</p>
            <p>You can book automatic driving lessons or book manual driving lessons, regardless of your vehicle.</p>
            <p>EzLicence driving lessons are also a great fit for international drivers who need to convert their international driver's licence to an Australian licence, or those looking to build their confidence on Australian roads.</p>
            <p>There’s an instructor to suit everybody, and they’re waiting for you on the platform!</p>
            <p>At EzLicence, we know how challenging learning to drive can be. That’s why we want to make it easier for you from start to finish.</p>
            <p>Book driving lessons online with us here at EzLicence so we can help you pass your driving test with ease.</p>
            <p>And if you need help studying for your learner licence first, try our free practice test <a href="/learners-tests">here</a>.</p>
            </div>
            )}
           </div>

</div>
</div>
</section>
  );
};

export default AdvantagesSection;
