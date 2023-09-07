import React from 'react';
import styles from '/css/footer.module.css';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={`${styles.total} total`}>
      <div className='media-body'>
        <div className='row'>
          <div className='large-7 columns small-margin-bottom-20 seo-links'>
            <span className={`${styles.title } title `}><br/><br/>Learners Tests Online</span>
            <ul className={styles.head2}>
              <li >
          <Link href="https://www.ezlicence.com.au/learners-tests" >
            <span><br/>FREE Practice Learners Test</span>
          </Link>
             </li>
             </ul>
             <ul className={styles.head2}>
             <li>
          <Link href="https://www.ezlicence.com.au/learners-tests/nsw">
            <span>NSW Driver Knowledge Test</span>
             </Link>
             </li>
             </ul>
             <ul className={styles.head2}>
             <li>
          <Link href="https://www.ezlicence.com.au/learners-tests/vic">
            <span>VIC Learner Permit Knowledge Test</span>
          </Link>
             </li>
             </ul>
             <ul className={styles.head2}>
             <li>
          <Link href="https://www.ezlicence.com.au/learners-tests/qld">
            <span>QLD Road Rules Test</span>
          </Link>
             </li>
             </ul>
             <ul className={styles.head2}>
             <li>
          <Link href="https://www.ezlicence.com.au/learners-tests/wa">
            <span>WA Road Rules Theory Test</span>
          </Link>
             </li>
             </ul>
             <ul className={styles.head2}>
             <li>
          <Link href="https://www.ezlicence.com.au/learners-tests/sa">
            <span>SA Learner Theory Test</span>
          </Link>
             </li>
             </ul>
             <ul className={styles.head2}>
             <li>
          <Link href="https://www.ezlicence.com.au/learners-tests/tas">
            <span>TAS Driver Knowledge Test</span>
          </Link>
             </li>
             </ul>
             <ul className={styles.head2}>
             <li>
          <Link href="https://www.ezlicence.com.au/learners-tests/act">
            <span>ACT Road Rules Knowledge Test</span>
          </Link>
             </li>

           {/* Add more list items as needed */}

            </ul>
            <br />
          </div>
          <div className='large-5 columns small-margin-bottom-20'>
            <span className={`${styles.title } title `}><br/>Resources</span>
            <ul className={styles.head2}>
              <li>
              <Link href="https://support.ezlicence.com.au/hc">
              <span><br/>Support</span>
              </Link>
              </li>
              </ul>
             <ul className={styles.head2}>

              <li>
              <Link href="https://www.ezlicence.com.au/blog">
              <span>Blog</span>
              </Link>
              </li>
              </ul>
              <ul className={styles.head2}>

              <li>
              <Link href="https://support.ezlicence.com.au/hc">
              <span>Contact</span>
              </Link>
              </li>
              </ul>
             <ul className={styles.head2}>

              <li>
              <Link href="https://www.ezlicence.com.au/about">
              <span>About</span>
              </Link>
              </li>
              </ul>
             <ul className={styles.head2}>
              <li>
              <Link href="https://www.ezlicence.com.au/instruct">
              <span>Instruct with EzLicence</span>
              </Link>
              </li>
              </ul>
             <ul className={styles.head2}>
              <li>
              <Link href="https://www.ezlicence.com.au/become-a-driving-instructor">
              <span>Become an instructor</span>
              </Link>
              </li>

              {/* Add more list items as needed */}
            </ul>
            <br />
          </div>
        </div>


        <div className='row'>
          <div className='large-7 columns small-margin-bottom-20 seo-links'>
            <span className={`${styles.title } title `}><br/>Driving Instructors by State</span>
            <ul className={styles.head2}>
              <li>
              <Link href="https://www.ezlicence.com.au/driving-instructors/nsw">
              <span><br/>NSW Driving instructors</span>
              </Link>
              </li>
              </ul>
             <ul className={styles.head2}>
              <li>
              <Link href="https://www.ezlicence.com.au/driving-instructors/vic">
              <span>VIC Driving instructors</span>
              </Link>
              </li>
              </ul>
             <ul className={styles.head2}>
              <li>
              <Link href="https://www.ezlicence.com.au/driving-instructors/qld">
              <span>QLD Driving instructors</span>
              </Link>
              </li>
              </ul>
             <ul className={styles.head2}>
              <li>
              <Link href="https://www.ezlicence.com.au/driving-instructors/wa">
              <span>WA Driving instructors</span>
              </Link>
              </li>
              </ul>
             <ul className={styles.head2}>
              <li>
              <Link href="https://www.ezlicence.com.au/driving-instructors/sa">
              <span>SA Driving instructors</span>
              </Link>
              </li>
              </ul>
             <ul className={styles.head2}>
              <li><Link href="https://www.ezlicence.com.au/driving-instructors/tas">
              <span>TAS Driving instructors</span></Link>
              </li>
              </ul>
             <ul className={styles.head2}>
              <li><Link href="https://www.ezlicence.com.au/driving-instructors/act">
              <span>ACT Driving instructors</span></Link>
              </li>

              {/* Add more list items as needed */}
            </ul>
          </div>


          <div className='large-5 columns small-margin-bottom-20'>
            <span className={`${styles.title } title `}><br/>Driving Instructors by City</span>
            <ul className={styles.head2}>
              <li>
              <Link href="https://www.ezlicence.com.au/driving-instructors/nsw/sydney">
              <span><br/>Sydney Driving instructors</span>
              </Link>
              </li>
              </ul>
             <ul className={styles.head2}>
              <li>
              <Link href="https://www.ezlicence.com.au/driving-instructors/vic/melbourne">
              <span>Melbourne Driving instructors</span>
              </Link>
              </li>
              </ul>
             <ul className={styles.head2}>
              <li>
              <Link href="https://www.ezlicence.com.au/driving-instructors/qld/brisbane-city">
              <span>Brisbane Driving instructors</span>
              </Link>
              </li>
              </ul>
             <ul className={styles.head2}>
              <li>
              <Link href="https://www.ezlicence.com.au/driving-instructors/wa/perth">
              <span>Perth Driving instructors</span>
              </Link>
              </li>
              </ul>
             <ul className={styles.head2}>
              <li>
              <Link href="https://www.ezlicence.com.au/driving-instructors/sa/adelaide">
              <span>Adelaide Driving instructors</span>
              </Link>
              </li>
              </ul>
             <ul className={styles.head2}>
              <li>
              <Link href="https://www.ezlicence.com.au/driving-instructors/tas/hobart-region">
              <span>Hobart Driving instructors</span>
              </Link>
              </li>
              </ul>
             <ul className={styles.head2}>
              <li>
              <Link href="https://www.ezlicence.com.au/driving-instructors/act/canberra-region">
              <span>Canberra Driving instructors</span>
              </Link>
              </li>

              {/* Add more list items as needed */}
            </ul>
          </div>
        </div>
      </div>
      <div className='media-right'>
        <div className='medium-width-180px'>
          <span className={`${styles.title } title `}><br/>Learn to Drive</span>
          <br/>
          <div className='button primary-400 small'>
            <button  className={`${styles.Button1} Button1`} >
            <Link href="https://www.ezlicence.com.au/instructors" className={styles.buttontext}>
              Book online
            </Link>
            </button>
          </div>

            
          <ul className={styles.head2}>
              <li>
              <Link href="https://www.ezlicence.com.au/driving-lessons">
              <span><br/>Driving Lessons</span>
              </Link>
              </li>
              </ul>
             <ul className={styles.head2}>
              <li>
              <Link href="https://www.ezlicence.com.au/driving-lessons/test-package">
              <span>Test Packages</span>
              </Link>
              </li>
              </ul>
             <ul className={styles.head2}>
              <li>
              <Link href="https://www.ezlicence.com.au/driving-lessons/gift-voucher">
              <span>Gift Vouchers</span>
              </Link>
              </li>
              </ul>
             <ul className={styles.head2}>
              <li>
              <Link href="https://www.ezlicence.com.au/driving-lessons/refresher-driving-lessons">
              <span>Refresher Driving Lessons</span>
              </Link>
              </li>
              </ul>
             <ul className={styles.head2}>
              <li>
              <Link href="https://www.ezlicence.com.au/driving-lessons/international-drivers-licence-conversions">
              <span>International Driver’s Licence Conversions</span>
              </Link>
              </li>
              <br/>

            {/* Add more list items as needed */}
          </ul>
        </div>
      </div>
      <hr />
      <div className='row small-fontsize-13'>
        <div>
          <ul className={styles.head2}>
            <li><br/>Ez Licence Pty Ltd &copy; 2023 &nbsp;&nbsp;&nbsp;
              <Link href="https://www.ezlicence.com.au/privacy-policy">
              <span>Privacy Policy</span>
              </Link>
              </li>
              <li><Link href="https://www.ezlicence.com.au/terms-and-conditions-learners"><span>Terms and Conditions</span></Link></li>
          </ul>
        </div>
        <div className='medium-4 columns small-margin-top-10 medium-margin-top-0'>
      <ul className={styles.head2}>
          <li>
            <a
              href='https://www.facebook.com/ezlicence/'
              rel='noopener noreferrer'
              target='_blank'
              title='EzLicence Facebook'
            >
              <FaFacebook size={32} />
            </a>
          &nbsp;&nbsp;&nbsp;
            <a
              href='https://www.instagram.com/ezlicence/'
              rel='noopener noreferrer'
              target='_blank'
              title='EzLicence Instagram'
            >
              <FaInstagram size={32} />
            </a>
            &nbsp;&nbsp;&nbsp;
          
            <a
              href='https://twitter.com/ezlicence'
              rel='noopener noreferrer'
              target='_blank'
              title='EzLicence Twitter'
            >
              <FaTwitter size={32} />
            </a>
          </li>
        </ul>
        <br/>
    </div>
      </div>
    </footer>
  );
};

export default Footer;
