import React from 'react';
import Header from '../components/Header';
import '../styling/Team.css';
import { FaLinkedin } from 'react-icons/fa';

import CountryFlag from 'react-country-flag'; // Import the CountryFlag component

// Importing member pictures
import member1Pic from '../assets/Inaam.jpeg';
import member2Pic from '../assets/shahhussain.png';
import member3Pic from '../assets/ayah.svg';
import member4Pic from '../assets/Diana.jpg';
import member5Pic from '../assets/lins.jpg';
import member6Pic from '../assets/logo.png';

const Team = () => {
  const teamMembers = [
    { id: 1, name: 'Muhammad Inaam', img: member1Pic, linkedin: 'https://www.linkedin.com/in/muhammad-inaamullah/', country: 'PK' },
    { id: 2, name: 'Syed Shah Hussain', img: member2Pic, linkedin: 'https://www.linkedin.com/in/shahxhussain/', country: 'PK' },
    { id: 3, name: 'Ayah Alshanfari', img: member3Pic, linkedin: 'https://www.linkedin.com/in/ayahalshanfari/', country: 'AE' },
    { id: 4, name: 'Hangan Diana Teodora', img: member4Pic, linkedin: 'https://www.linkedin.com/in/diana-teodora-150747272/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', country: 'RO' },
    { id: 5, name: 'Lina EL AMRANI', img: member5Pic, linkedin: 'https://www.linkedin.com/in/lina-el-amrani-00b762289/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', country: 'MA' },
    { id: 6, name: 'Umama Iftikhar', img: member6Pic, linkedin: 'https://www.linkedin.com/', country: 'PK' },
  ];

  return (
    <>
      <Header />
      <div className="team-container">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            <img src={member.img} alt={member.name} className="team-member-img" />
            <h3>{member.name}</h3>
            <CountryFlag
              countryCode={member.country} // Country code for the flag
              svg
              className="flag"
              style={{ width: '30px', height: '20px' }} // Size of the flag
            />
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Team;
