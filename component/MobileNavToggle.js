// MobileNavToggle.js
import React, { useState } from 'react';
import styles from '/css/MobileNavToggle.module.css';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa'; // 导入 react-icons/fa 中的图标
import { FaAngleRight } from 'react-icons/fa';

const MobileNavToggle = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };


  return (
    <div className={styles['mobile-nav-toggle']} >
      <button onClick={toggleNav} className={styles['toggle-button']}>
        {/* 使用 react-icons 中的图标 */}
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isOpen && (
        <div className={styles['nav-dropdown']}>
          <button onClick={closeNav} className={styles['close-button']}>
            <FaTimes />
          </button>
          <ul>
            {navItems.map((item, index) => (
  <li key={index}>
    {item.type === 'button' ? (
      <button className={styles['book-online-button']} onClick={closeNav}>
        {item.text}
             <FaAngleRight size={16} />
      </button>
    ) : (
      <a href={item.link}>{item.text}</a>
    )}
  </li>
))}

      
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNavToggle;
