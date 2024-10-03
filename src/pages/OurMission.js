import React from 'react';
import Header from '../components/Header';
import '../styling/mission.css'

const Mission = () => {
  return (

    <>
    <Header />
    <div className="mission-container">
      <h1 className="mission-title">Our mission</h1>
      <p className="mission-text">
        We are creating a dynamic website featuring a 3D Earth visualization to represent climate refugees from around the world. Our goal is to provide a comprehensive platform that not only visualizes the global impact of climate displacement but also offers crucial support to those affected.
      </p>
      <p className="mission-text">
        Climate refugees are individuals forced to flee their homes due to the impacts of climate change, such as rising sea levels, droughts, and extreme weather events. These displaced populations often face significant challenges, including loss of livelihood, lack of access to basic services, and insecure living conditions. Unlike political refugees, climate refugees do not yet have legal protections under international law, making their situation more precarious. As climate change intensifies, the number of people displaced by environmental factors is expected to rise, highlighting the urgent need for global cooperation and sustainable solutions to address this growing crisis.
      </p>
    </div>
    </>
  );
};

export default Mission;
