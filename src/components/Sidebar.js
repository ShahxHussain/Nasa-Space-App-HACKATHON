import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import '../styling/Sidebar.css';  // Sidebar-specific styles

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </button>
      {menuOpen && (
        <div className="menu">
          <Link to="/mission">Our Mission</Link>
          <Link to="/healthsupport">Health Support</Link>
          <Link to="/help">Receive Help</Link>
          <Link to="/">Discord Group</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/team">Team</Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
