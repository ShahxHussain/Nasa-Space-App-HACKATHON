import React, { useState } from 'react';
import { FaGlobe, FaPeopleCarry } from 'react-icons/fa';
import '../styling/BottomButtons.css';  // Bottom buttons styles

const BottomButtons = () => {
  const [activeButton, setActiveButton] = useState(null); // Track which button is active

  const handleButtonClick = (buttonName) => {
    setActiveButton(prevButton => (prevButton === buttonName ? null : buttonName));
  };

  return (
    <div className="bottom-buttons">
      <button
        className={`bottom-btn ${activeButton === 'climate' ? 'open' : ''}`}
        onClick={() => handleButtonClick('climate')}
      >
        <FaGlobe /> {activeButton === 'climate' && <span>Climate Effects</span>}
      </button>

      <button
        className={`bottom-btn ${activeButton === 'refugee' ? 'open' : ''}`}
        onClick={() => handleButtonClick('refugee')}
      >
        <FaPeopleCarry /> {activeButton === 'refugee' && <span>Refugee Stories</span>}
      </button>
    </div>
  );
};

export default BottomButtons;
