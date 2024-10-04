import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'; // For styling
import Routing from './components/Earth';
import Team from './pages/Team';
import Mission from './pages/OurMission';
import DiscordGroup from './pages/DiscordGroup';
import MobileWarning from './pages/MobileWarning';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile or desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 820); // If width is less than 1024px, it's a mobile device
    };

    handleResize(); // Run on initial load
    window.addEventListener('resize', handleResize); // Listen for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on unmount
    };
  }, []);

  // If mobile, show the mobile warning page
  if (isMobile) {
    return <MobileWarning />;
  }

  // Otherwise, show the actual website for desktop/laptop users
  return (
    <Routes>
      <Route path="/" element={<Routing />} />
      <Route path="/team" element={<Team />} />
      <Route path="/ourmission" element={<Mission />} />
      <Route path="/Discordgroup" element={<DiscordGroup />} />
    </Routes>
  );
};

export default App;
