import React, { useState } from 'react';
import styles from '/css/FAQSection.module.css';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

const FAQSection = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  const faqData = [
    {
      question: 'Do I Need to Provide My Own Car For Driving Lessons or Do You Provide a Vehicle?',
      answer:
        'If you would prefer to learn in your own vehicle, you can choose to do so, provided that you are a competent driver and your vehicle is roadworthy, clean, and registered. You may also opt to use the driving instructor\'s vehicle, an instructional vehicle with dual controls for added safety, at no extra cost.',
    },
    {
      question: ' How Much Do Driving Lessons Cost?',
      answer:
        'At EzLicence, we have set driving lesson prices based on our extensive research of driving schools across Australia. Prices can vary depending on the suburb where you will be picked up and your preferred transmission type (automatic or manual). Enter the information into our search tool to compare driving lesson prices. Note that we offer discounts for learner drivers who purchase driving lesson packages.',
    },
    {
      question: 'Do You Offer Any Special Lessons to Prepare for the Driving Test?',
      answer:
        'EzLicence offers a driving test package for $199, which includes:Pick-up from your chosen location;45-minute pre-test driving lesson; Use of your instructor&rsquo;s vehicle for the driving test; Drop off to your chosen location;The EzLicence Test Package is available to all customers except those in ACT, SA or TAS. Some EzLicence instructors require you book a lesson with them prior to booking a Test Package. Others will offer this as a standalone item. Find an instructor for a Test Package here.',
    },
    {
      question: 'How Many Driving Lessons Do I Need?',
      answer:
        ' After your first lesson, your driving instructor will be in the best position to assess how many driving lessons you should take, based on factors such as: Previous driving experience, if any; Confidence level; How quickly you appear to learn and master driving techniques',
    },
    // Add more later...1226
    {
      question: 'Can I get the bonus logbook hours if I take lessons from an EzLicence Driving Instructor?',
      answer:
        'Definitely. Taking structured driving lessons with an EzLicence instructor in NSW, QLD; ACT lets you record 3 hours of driving experience in your logbook for every 1 hour of driving instruction, up to a maximum of 30 hours recorded for 10 hours of lessons. You can, of course, continue to take driving lessons with EzLicence instructors after you have recorded the maximum allowable bonus, but each 1 hour will equal 1 hour in your logbook. Note that if you take a driving lesson at night (i.e. between sunset and sunrise), you can only record 1 hour of night driving. The remaining 2 hours are added to your log of day driving experience hours. In Tasmania, you will get 1 extra hour of credit for every hour of driving instruction, up to a maximum of 20 hours recorded for 10 hours of lessons.',
    },
    {
      question: 'What if There Are No Available Driving Instructors in My Area?',
      answer:
        'If your search comes up with no results, it is because there are no driving instructors who are currently willing or able to service the area of your chosen pick-up location. Simply enter an alternate location that is convenient for you and search again.',
    },
    {
      question: 'Can I Take Refresher Driving Lessons?',
      answer:
        'Of course! Many existing driver licence holders book driving lessons to refresh their skills or build up some more confidence, especially if they have spent some time not driving. We recommend about 3 to 5 hours of driving instruction in cases like this.',
    },
    {
      question: 'Can I Change Instructors?',
      answer:
        'Absolutely. At EzLicence, we know that having a rapport with your driving instructor makes for a more comfortable &ndash; and therefore effective &ndash; learning experience. If you want to book a lesson with another driving instructor, just follow the same steps. From your dashboard select &#39;find another instructor&#39; and then choose the instructor you would like. Check their availability and book online. Take your driving lesson. It&#39;s that simple.',
    },
    {
      question: 'Is EzLicence a Driving School?',
      answer:
        'EzLicence is like a driving school only better, allowing you to access the services of a driving school with market leading convenience, choice and flexibility.EzLicence has partnered with over 350 driving schools across Sydney, Melbourne, Brisbane and Perth to create a single destination for learner drivers to view, compare and book driving instructors online 24/7.Unlike a traditional driving school, EzLicence allows you to:Find and compare a large range of driving instructors in your area.Choose your own instructor based on comprehensive profile information, including ratings and reviews.View each driving instructor&rsquo;s real-time availability and make online bookings straight into their calendar.Change your driving instructor selection online anytime.Manage existing bookings (reschedule/cancel) and make new bookings online.Each of our driving instructors are independent and operating their own driving school.',
    },
    {
      question: 'Can I Book Driving Lessons to Learn How to Drive Manual?',
      answer:
        'Absolutely.&nbsp; Driving a manual transmission vehicle is becoming less and less common, but it is not yet a &ldquo;lost art&rdquo;. Whether you are learning manual to be more versatile or because it&rsquo;s a more engaging (and fun) drive, we recommend booking 3 to 5 hours of driving instruction to start.',
    },

  ];

  return (
    <section >
      <div className={`${styles.total } total `}>
        
            <h3 className={`${styles.title } title `}>
            <br/>Top Frequently Asked Questions<br/></h3>

            <ul className={`${styles.head2} head2`}  data-accordion=''>
              {faqData.map((item, index) => (
                <li className='accordion-navigation' key={index}>
                  <a
                    className='small-padding-top-20 small-padding-bottom-20'
                    href={`#accordion-faq-${index}`}
                    onClick={() => handleItemClick(index)}
                  >
                    <span className={`${styles.lead} lead`} >
                      {item.question}

                      <div className={`${styles.icon } icon `}>
                      <FaPlus />
                      </div>

                      {index === activeItem ? (
                        <i className='fas fa-minus' />
                      ) : (
                        <i className='fas fa-plus' />
                      )}
                    </span>
                  </a>
                  {index === activeItem && (
                    <div id={`accordion-faq-${index}`}>
                      <article className='html-content small-margin-0'>
                        <p>{item.answer}</p>
                      </article>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            </div>


            <div className={`${styles.position} position`}>
            <button className={`${styles.Button} Button`} href='/support'>
            <Link href="https://www.ezlicence.com.au/support" className={styles.buttontext}>
              Read More FAQs
              </Link>
            </button>
          </div>

          <div className='large-4 columns'>
            {/* Featured Blogs section */}
            <h3 className={`${styles.title } title `}>Featured Blogs</h3>

            <a className='block panel panel-no-border small-padding-0 text-secondary-800 hover-primary-600' href='https://www.ezlicence.com.au/blog/reasons-why-you-might-not-pass-your-driving-test'>
              <div className={`${styles.sublead} sublead`}>
                <img loading='lazy' alt='28 Reasons Why You Might NOT Pass Your Driving Test' className='img-expand' height='300' width='auto' src='//s3-ap-southeast-2.amazonaws.com/ezlicence-uploads/blog_posts/featured_images/000/000/013/sm/Main_Image--.png?1562648831' />
                
                <div className={styles.sublead}>

                    28 Reasons Why You Might NOT Pass Your Driving Test &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <FaAngleRight size={16} />

                </div>

              </div>
            </a>
            <a className='block panel panel-no-border small-padding-0 text-secondary-800 hover-primary-600' href='https://www.ezlicence.com.au/blog/tips-for-choosing-a-good-driving-instructor'>
              <div className={`${styles.sublead} sublead`}>
                <img loading='lazy' alt='11 Tips for Choosing a Good Driving Instructor' className='img-expand' height='300' width='auto' src='//s3-ap-southeast-2.amazonaws.com/ezlicence-uploads/blog_posts/featured_images/000/000/012/sm/11_Tips_for_Choosing_a_Good_Driving_Instructor-.png?1562648830' />
                <div className='media media-middle small-margin-0'>
                  <div className={`${styles.sublead} sublead`}>
                   11 Tips for Choosing a Good Driving Instructor &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <FaAngleRight size={16} />
                  </div>
                  
                </div>
              </div>
            </a>
            </div>

            
       <br/>
       <br/>
            <div className={`${styles.position} position`}>
              <button className={`${styles.Button} Button`} >
              <Link href="https://www.ezlicence.com.au/blog" className={styles.buttontext}>
                Read More Blogs
                </Link>
              </button>
            </div>
          <br/>

    </section>
  );
};

export default FAQSection;
