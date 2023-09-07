import React, { useState } from 'react';
import styles from '/css/ButtonSwitcher.module.css';
import { FaCheck } from 'react-icons/fa';

const ButtonSwitcher = () => {
  const [transmission, setTransmission] = useState('Auto');

  const handleButtonClick1 = (buttonId) => {
    setTransmission(buttonId);
  };

  return (

    <div className={styles.buttonContainer}>
      <button
        className={`${styles.buttonm} ${transmission === 'Auto' ? styles.selected : ''}`}
        onClick={() => handleButtonClick1('Auto')}
      >
        {transmission === 'Auto' && <FaCheck className={styles.icon} />}
        Auto
      </button>
      <button
        className={`${styles.buttonm} ${transmission === 'Manual' ? styles.selected : ''}`}
        onClick={() => handleButtonClick1('Manual')}
      >
        {transmission === 'Manual' && <FaCheck className={styles.icon} />}
        Manual
      </button>
    </div>
  );
};

export default ButtonSwitcher;
