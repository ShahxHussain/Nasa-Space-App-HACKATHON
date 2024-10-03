import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import './App.css'; // For styling
import Globe from './components/Globe';
import BottomButtons from './components/BottomButtons';
import Routing from './components/Earth';
import Sidebar from './components/Sidebar';
import Team from './pages/Team';
import Mission from './pages/OurMission';

const App = () => {
  return (
    <Routes>
      
        <Route path= "/" element = {<Routing />} />
        <Route path="/team" element={<Team />} />
        <Route path="/ourmission" element={<Mission />} />
     
    </Routes>
  );
};

export default App;
