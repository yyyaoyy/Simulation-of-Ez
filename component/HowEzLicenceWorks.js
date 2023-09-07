
import Link from 'next/link';
import React from 'react';
import YouTube from 'react-youtube';
import styles from '/css/HowEzLicenceWorks.module.css';
import { FaAngleRight } from 'react-icons/fa';

const HowEzLicenceWorks = () => {
  const opts = {
    height: '350',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <section className={`${styles.section} section`}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.textCenter} text-center`}>
          <h3 className={`${styles.title} title`}>How EzLicence works</h3>
          <span className={`${styles.lead} lead `}>Simple & flexible booking system</span>
        </div>
        <div className={`${styles.small12} small-12`}>
          <div className={`${styles.media} media media-middle collapse-small collapse-medium`}>
            <div className={`${styles.mediaLeft} media-left`}>
              <div className={`${styles.textCenter} text-center video-player large-width-400px`} id='video-ezlicence'>
                <YouTube videoId="i_lS6ixFaMY" opts={opts} />
              </div>
            </div>
            <div className={`${styles.mediaBody} media-body large-padding-left-30 small-padding-top-20`}>
              <div className={`${styles.media}`}>
                <div className={`${styles.mediaLeft} media-left small-padding-right-15`}>
                  <span className={`${styles.badgeYellow} `}>1</span>
                </div>
                <div className={`${styles.mediaBody} media-body`}>
                  <h3 className={`${styles.text} text`}>Find Your Driving Instructors</h3>
                  </div>
                  <div className={`${styles.content} content`}>
                  <span>Choose from a wide variety of instructors in your area. Check rating & reviews from real learners.</span>
                </div>
                <br/>
              </div>

              <div className={`${styles.media}`}>
                <div className={`${styles.mediaLeft} media-left small-padding-right-15`}>
                  <span className={`${styles.badgeYellow} badge-yellow small-fontsize-24 va-b small-width-30px`}>2</span>
                </div>
                <div className={`${styles.mediaBody} media-body`}>
                  <h3 className={`${styles.text} text`}>Book Your Driving Lessons</h3>
                  </div>
                  <div className={`${styles.content} content`}>
                  <span>Book online with instant confirmation. Easily manage your lesson schedule via our online dashboard.</span>
                </div>
                <br/>
              </div>

              <div className={`${styles.media}`}>
                <div className={`${styles.mediaLeft} media-left small-padding-right-15`}>
                  <span className={`${styles.badgeYellow} badge-yellow small-fontsize-24 va-b small-width-30px`}>3</span>
                </div>
                <div className={`${styles.mediaBody} media-body`}>
                  <h3 className={`${styles.text} text`}>Learn to Drive</h3>
                  </div>
                  <div className={`${styles.content} content`}>
                  <span>Your instructor picks you up from your chosen address and you're on your way 🚗</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <div className='small-padding-top-10'>
              <button className={`${styles.Button} Button`} href='/driving-lessons'>
              <Link href="/instructors" className={styles.buttontext}>
                Start learning to drive now<FaAngleRight size={16} />
                </Link>
              </button>
            </div>
      </div>
    </section>
  );
};

export default HowEzLicenceWorks;
