// components/GuaranteeSection.js

import React from 'react';
import styles from '/css/GuaranteeSection.module.css';

const GuaranteeSection = () => {
  return (
    <div className={styles.guaranteeSection}>
      <div className={`${styles.container} ${styles.smallMarginTop5}`}>
        <div className={styles.media}>
          <div className={`${styles.mediaLeft} ${styles.smallPaddingRight20}`}>
            <svg className={`${styles.size70} ${styles.white} ${styles.mediumMarginRight20}`} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" strokeWidth="3">
              <g strokeWidth="3" transform="translate(0.5, 0.5)">
                <path fill="#0B243B" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M41.999,41.374 C38.277,40.577,33.636,40,28,40c-11.14,0-18.494,2.331-22.453,4.087C3.379,45.048,2,47.196,2,49.567V60h28"></path>
                <path fill="#0B243B" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M14,16 c0-7.732,6.268-14,14-14s14,6.268,14,14s-6.268,16-14,16S14,23.732,14,16z"></path>
                <polyline data-color="color-2" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points="40,54 46,60 60,46"></polyline>
              </g>
            </svg>
          </div>
          <div className={styles.mediaBody}>
            <h3 className={`${styles.text} `}>Driving lesson guarantee!</h3>
            <h3 className={`${styles.textSecondary}  `}>
              We will fulfill your driving lesson booking or you won’t be charged
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeSection;


