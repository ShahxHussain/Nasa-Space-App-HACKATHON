import React, { useState } from 'react';
import { FaGlobe, FaPeopleCarry, FaTimes } from 'react-icons/fa';
import '../styling/BottomButtons.css';  // Bottom buttons styles

const dummyStories = [
  {
    name: "Amina Hussein",
    country: "Syria, 2020",
    story: "Amina fled her home with her two children, leaving everything behind. The conflict in Syria had destroyed her town, but she managed to find safety in a refugee camp. Now, she works to rebuild her life and hopes to return one day."
  },
  {
    name: "John Doe",
    country: "South Sudan, 2018",
    story: "John and his family were forced to leave their village due to ongoing violence. They traveled for days with little food or water, finally reaching a refugee settlement where they now live. John dreams of returning home and starting a new life."
  },
  {
    name: "Fatima Ali",
    country: "Afghanistan, 2021",
    story: "Fatima left Afghanistan after the recent unrest, seeking safety in neighboring countries. She hopes for a future where her children can grow up without fear. She now lives in a refugee camp, adapting to her new reality."
  },
  {
    name: "Mohammad Khan",
    country: "Yemen, 2019",
    story: "The war in Yemen pushed Mohammad and his family out of their home. After months of hardship, they found safety in a camp far from the conflict. Mohammad works to provide for his family and holds onto hope for peace in Yemen."
  },
  {
    name: "Sara Ahmed",
    country: "Myanmar, 2017",
    story: "Sara's family fled Myanmar during the Rohingya crisis. They traveled by foot to Bangladesh, where they found refuge in a camp. Though life in the camp is hard, Sara is determined to give her children a better future."
  }
];

const BottomButtons = () => {
  const [activeButton, setActiveButton] = useState(null); // Track which button is active
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0); // Track the current story index

  const handleButtonClick = (buttonName) => {
    setActiveButton(prevButton => (prevButton === buttonName ? null : buttonName));
  };

  const handleNext = () => {
    setCurrentStoryIndex((prevIndex) => (prevIndex + 1) % dummyStories.length); // Cycle through the stories
  };

  const handleBack = () => {
    setCurrentStoryIndex((prevIndex) => (prevIndex - 1 + dummyStories.length) % dummyStories.length); // Cycle back through the stories
  };

  const handleClose = () => {
    setActiveButton(null); // Close the floating card
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

      {activeButton === 'refugee' && (
        <div className="floating-card">
          <button className="close-btn" onClick={handleClose}>
            <FaTimes />
          </button>
          <h3>{dummyStories[currentStoryIndex].name}</h3>
          <p>{dummyStories[currentStoryIndex].country}</p>
          <p>{dummyStories[currentStoryIndex].story}</p>
          <div className="card-navigation">
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BottomButtons;
