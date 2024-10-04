import React from 'react';
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
