// pages/_app.js

import '../css/global.css'; // 根据您的实际文件路径调整
// pages/_app.js

import React from 'react';
import App from 'next/app';
import SecondaryBar from '../component/SecondaryBar';
import GuaranteeSection from '../component/GuaranteeSection';
import HowEzLicenceWorks from '../component/HowEzLicenceWorks';
import ScrollButton from '../component/ScrollButton';
import Footer from '../component/Footer';
import '../css/Page.module.css'; // 根据您的实际文件路径调整

const navItems = [
  // ...（导航项配置，与您的 index.js 文件一致）
];

function Home({ Component, pageProps }) {
  return (
    <div>
      <SecondaryBar />
      <header>
        {/* 这里可以放置你的标题和导航 */}
      </header>
      <Component {...pageProps} /> {/* 渲染当前页面组件 */}
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
}

export default Home;

