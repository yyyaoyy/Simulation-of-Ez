import { useState, useEffect } from 'react';
import React from 'react';
import styles from '/css/help.module.css';
import Link from 'next/link';

const ScrollButton = () => {
  return (
    <Link href="https://www.ezlicence.com.au/instructors" >
    <button className={styles['downButton']} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
     
     <span className={styles.circleIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="11" stroke="black" strokeWidth="2" />
              <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="14" fill="black">?</text>
            </svg>
          </span>

           Help
    </button>
    </Link>
  );
};

export default ScrollButton;
