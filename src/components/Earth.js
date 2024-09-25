import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Team from '../pages/Team';
import Sidebar from './Sidebar';
import Globe from './Globe';
import BottomButtons from './BottomButtons';


const AppRoutes = () => {
  return (
    <div className="app"> 
    <Sidebar />
    <Globe />
    <BottomButtons />
  </div>
  );
};

export default AppRoutes;
