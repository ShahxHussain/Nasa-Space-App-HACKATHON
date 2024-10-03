import React from 'react';
import { FaDiscord } from 'react-icons/fa'; // Import Discord icon
import '../styling/DiscordGroup.css'; // Import the CSS for animations
import Header from '../components/Header';

const DiscordGroup = () => {
    return (
        <>
        <Header />
        <div className="discord-container">
            <FaDiscord className="discord-icon" />
            <h1 className="discord-title">Join Our Discord</h1>
            <p className="discord-description">
                Connect with us and be a part of our amazing community on Discord!
            </p>
            <a href="https://discord.gg/cgNXu2gc" target="_blank" rel="noopener noreferrer">
                <button className="join-discord-button">Join Discord</button>
            </a>
        </div>
        </>
    );
};

export default DiscordGroup;
