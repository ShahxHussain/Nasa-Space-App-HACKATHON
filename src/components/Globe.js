import React from 'react';
import globeImage from '../assets/globe.png'; // Import the image
import '../styling/Globe.css';

const Globe = () => {
  return (
    <div>
      <div>
        <img style={{height:"600px", width:"600px"}} src={globeImage} alt="Globe" /> {/* Use the imported image */}
      </div>
    </div>
  );
};

export default Globe;
