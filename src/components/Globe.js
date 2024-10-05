import React, { useRef } from 'react';
import Globe from 'react-globe.gl';
import '../styling/Globe.css';

const InteractiveGlobe = ({ globeRef }) => {
  return (
    <div className="globe-container">
      <Globe
        ref={globeRef}
        height={600}
        width={600}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundColor="rgba(0,0,0,0)" 
      />
    </div>
  );
};

export default InteractiveGlobe;
