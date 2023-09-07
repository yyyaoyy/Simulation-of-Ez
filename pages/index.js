import React from 'react';
import YouTube from 'react-youtube';

import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

import Head from 'next/head';
import styles from '/css/Page.module.css';

import MobileNavToggle from '../component/MobileNavToggle';

import SecondaryBar from '../component/SecondaryBar';
import Main from '../component/Main';
import PricingSection from '../component/PricingSection';

import GuaranteeSection from '../component/GuaranteeSection';
import HowEzLicenceWorks from '../component/HowEzLicenceWorks';
import TestimonialsCarousel from '../component/TestimonialsCarousel';
import YourInstructor from '../component/YourInstructor';
import GiftVoucherSection from '../component/GiftVoucherSection';
import DrivingLessonsSection from '../component/DrivingLessonsSection';
import FAQSection from '../component/FAQSection';
import WhyChooseEzLicence from '../component/WhyChooseEzLicence';
import AdvantagesSection from '../component/AdvantagesSection';
import ScrollButton from '../component/ScrollButton';
import Footer from '../component/Footer';

import dynamic from 'next/dynamic' 

const navItems = [
  { text: 'Driving Lessons', link: 'https://www.ezlicence.com.au/driving-lessons' },
  { text: 'Test Packages', link: 'https://www.ezlicence.com.au/driving-lessons/test-package' },
  { text: 'Gift Vouchers', link: 'https://www.ezlicence.com.au/driving-lessons/gift-voucher' },
  { text: 'Pricing', link: 'https://www.ezlicence.com.au/pricing' },

  { type: 'button',text: 'Book online', link: 'https://www.ezlicence.com.au/instructors' },

  { text: 'Learner Login', link: 'https://www.ezlicence.com.au/learners/login' },
  { text: 'Instructor Login', link: 'https://www.ezlicence.com.au/instructors/login' },
  { text: 'Support', link: 'https://support.ezlicence.com.au/hc' },
  { text: 'Blog', link: 'https://www.ezlicence.com.au/blog' },
  { text: 'Contact', link: 'https://support.ezlicence.com.au/hc' },
  { text: 'NSW - Driver Knowledge Test', link: 'https://www.ezlicence.com.au/learners-tests/nsw' },
  { text: 'QLD - Road Rules Test', link: 'https://www.ezlicence.com.au/learners-tests/qld' },
  { text: 'VIC - Learner Permit Knowledge Test', link: 'https://www.ezlicence.com.au/learners-tests/vic' },
  { text: 'WA - Road Rules Test', link: 'https://www.ezlicence.com.au/learners-tests/wa' },
  { text: 'Instruct with EzLicence', link: 'https://www.ezlicence.com.au/instruct' },

];



const Home = () => {



return (

<div>
<SecondaryBar />

<header className={styles['header']} >
        <img className={styles['logo']} src="/static/title1.png" alt="Logo" />
  <nav>
<MobileNavToggle navItems={navItems} />
</nav>
      </header>


<Main />
<PricingSection />

<GuaranteeSection />
<HowEzLicenceWorks />
<TestimonialsCarousel />
<YourInstructor />
<GiftVoucherSection />
<DrivingLessonsSection />
<FAQSection />
<WhyChooseEzLicence />
<AdvantagesSection />
<subSection />
<ScrollButton />
<Footer />
 </div>

);
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });