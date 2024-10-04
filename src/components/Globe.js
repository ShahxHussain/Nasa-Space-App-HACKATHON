import React, { useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import '../styling/Globe.css'; // Keep your existing styling

const InteractiveGlobe = () => {
  const globeEl = useRef();
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  // Handle form submission to update the globe position
  const handleSubmit = (event) => {
    event.preventDefault();
    if (globeEl.current) {
      globeEl.current.pointOfView({ lat, lng, altitude: 1.5 }, 1000); // Zoom to the input coordinates
    }
  };

  return (
    <div className="globe-container">
      <Globe
        ref={globeEl}
        height={600}
        width={600}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundColor="rgba(0,0,0,0)" // Transparent background
      />

      <form onSubmit={handleSubmit} className="coordinate-form">
        <label style={{color:"white"}}>
          Latitude:
          <input
            type="number"
            value={lat}
            onChange={(e) => setLat(parseFloat(e.target.value))}
            required
            step="0.01"
            min="-90"
            max="90"
          />
        </label>
        <label style={{color:"white"}}>
          Longitude:
          <input
            type="number"
            value={lng}
            onChange={(e) => setLng(parseFloat(e.target.value))}
            required
            step="0.01"
            min="-180"
            max="180"
          />
        </label>
        <button type="submit">Go to Coordinates</button>
      </form>
    </div>
  );
};

export default InteractiveGlobe;
