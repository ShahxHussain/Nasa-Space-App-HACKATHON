import React from 'react';

// /d:/space_app/src/pages/Team.js

const teamMembers = [
    {
        name: 'John Doe',
        image: 'path_to_image1.jpg',
        linkedin: 'https://www.linkedin.com/in/johndoe'
    },
    {
        name: 'Jane Smith',
        image: 'path_to_image2.jpg',
        linkedin: 'https://www.linkedin.com/in/janesmith'
    },
    {
        name: 'Alice Johnson',
        image: 'path_to_image3.jpg',
        linkedin: 'https://www.linkedin.com/in/alicejohnson'
    },
    {
        name: 'Bob Brown',
        image: 'path_to_image4.jpg',
        linkedin: 'https://www.linkedin.com/in/bobbrown'
    },
    {
        name: 'Charlie Davis',
        image: 'path_to_image5.jpg',
        linkedin: 'https://www.linkedin.com/in/charliedavis'
    },
    {
        name: 'Eve Wilson',
        image: 'path_to_image6.jpg',
        linkedin: 'https://www.linkedin.com/in/evewilson'
    }
];

const Team = () => {
    return (
        <div className="team-container">
            {teamMembers.map((member, index) => (
                <div key={index} className="team-member">
                    <img src={member.image} alt={member.name} className="team-member-image" />
                    <h3>{member.name}</h3>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <img src="linkedin_icon.png" alt="LinkedIn" className="linkedin-icon" />
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Team;