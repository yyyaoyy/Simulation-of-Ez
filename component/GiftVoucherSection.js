import dynamic from "next/dynamic";
import React from 'react';
import styles from '/css/gift.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa';

const GiftVoucherSection = () => {


  return (

    <section className={`${styles.Section} Section`} >

    <div className={styles['page-layout']}>

      <div className={styles['image-container']}>
    <div className={`${styles.Image} Image`}>
            <Image src="/static/image-home.png" alt='' width='700' height='500'/>
          </div>
          </div>

         
<p className={`${styles.Heading} Heading`}>The gift of life long skills</p>

      <div className={`${styles.container} container`}>
      
        <div className={`${styles.Row} Row`}>
          
          
            <row className={`${styles.Row} Row`}>
              <item className={`${styles.Item} Item`}>
                <svg
                  className='size-50 oil'
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="64px"
                  height="64px"
                  viewBox="0 0 64 64"
                  strokeWidth="3"
                >
                  <g stroke-width="3" transform="translate(0.5, 0.5)"><line fill="none" stroke="#444444" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" x1="6" y1="47" x2="28" y2="47" stroke-linejoin="miter"></line> <line fill="none" stroke="#444444" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" x1="6" y1="12" x2="46" y2="12" stroke-linejoin="miter"></line> <path data-cap="butt" fill="none" stroke="#444444" stroke-width="3" stroke-miterlimit="10" d="M42,62H10c-2.2,0-4-1.8-4-4V6 c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v28.101" stroke-linejoin="miter" stroke-linecap="butt"></path> <polyline data-cap="butt" data-color="color-2" fill="none" stroke="#444444" stroke-width="3" stroke-miterlimit="10" points="28.096,36 14,36 14,24 28.391,24 " stroke-linejoin="miter" stroke-linecap="butt"></polyline> <path data-color="color-2" fill="none" stroke="#444444" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" d="M51,59 L27.05,34.95c-2.734-2.734-2.734-7.166,0-9.899l0,0c2.734-2.734,7.166-2.734,9.899,0L61,49" stroke-linejoin="miter"></path> <line data-color="color-2" fill="none" stroke="#444444" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" x1="33.284" y1="33.284" x2="35.284" y2="31.284" stroke-linejoin="miter"></line></g>
                </svg>
                <h4 className='small-margin-5'>Pick a voucher</h4>
                <p className={`${styles.icon} icon`}>Choose the number of lessons that you want to purchase</p>
              </item>
              <item className={`${styles.Item} Item`}>
                <svg
                  className='size-50 oil'
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="64px"
                  height="64px"
                  viewBox="0 0 64 64"
                  strokeWidth="3"
                >
                  <g stroke-width="3" transform="translate(0.5, 0.5)"><polyline fill="none" stroke="#444444" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" points="56,24 56,60 8,60 8,24 " stroke-linejoin="miter"></polyline> <rect x="2" y="14" fill="none" stroke="#444444" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" width="60" height="10" stroke-linejoin="miter"></rect> <path data-color="color-2" fill="none" stroke="#444444" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" d="M14,8 c0-3.314,2.686-6,6-6c8.875,0,12,12,12,12s-8.686,0-12,0S14,11.314,14,8z" stroke-linejoin="miter"></path> <path data-color="color-2" fill="none" stroke="#444444" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" d="M50,8 c0-3.314-2.686-6-6-6c-8.875,0-12,12-12,12s8.686,0,12,0S50,11.314,50,8z" stroke-linejoin="miter"></path> <polyline data-color="color-2" fill="none" stroke="#444444" stroke-width="3" stroke-linecap="square" stroke-miterlimit="10" points=" 38,14 38,60 26,60 26,14 " stroke-linejoin="miter"></polyline></g>
                </svg>
                <h4 className='small-margin-5'>Send your gift</h4>
                <p className={`${styles.icon} icon`}>Enter the recipients info and the gift is on the way.</p>
              </item>
            </row>
            

</div>
            <button  className={`${styles.Button1} Button1`} >
            <Link href="https://www.ezlicence.com.au/driving-lessons/gift-voucher" className={styles.buttontext}>
              Buy a Gift Voucher<span className={`${styles.iconContainer}`}>
             <FaAngleRight size={16} />
             </span>
            </Link>
            </button>
            
          
        </div>
      </div>
      <br/><br/><br/>
    </section>
  );
};

export default GiftVoucherSection;
