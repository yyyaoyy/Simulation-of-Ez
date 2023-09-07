import React from 'react';
import styles from '/css/SecondaryBar.module.css';

const SecondaryBar = () => {
  return (
    <div className={styles['body']}>
      <nav className={styles['secondary-bar']}>
        <ul className={styles['nav-bar']}>
          <li>
            <a className={styles['nav-link']} target="_blank" href="https://support.ezlicence.com.au/hc">
              Support
            </a>
            <span className={styles['nav-spacer']}></span>
            </li>
            <li>
            <a className={styles['nav-link']} href="https://www.ezlicence.com.au/blog">
              Blog
            </a>
            <span className={styles['nav-spacer']}></span>
            </li>
            <li>
            <a className={styles['nav-link']} href="https://www.ezlicence.com.au/instruct">
              Instruct with EzLicence
            </a>
          </li>
        </ul>

        <ul className={`${styles['nav-bar']} ${styles['nav-bar-right']}`}>
          <li>
            <a className={styles['nav-link']} href="https://www.ezlicence.com.au/learners/login">
              Learner Login
            </a>
            <span className={styles['nav-spacer']}></span>
          </li>

          <li>
            <span>&#124;</span>
            
            <a className={styles['nav-link']} href="https://www.ezlicence.com.au/instructors/login">
              Instructor Login
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SecondaryBar;
