import '../styling/Header.css'; 
import Logo from '../assets/svglogolong.svg';
import { FaArrowRight } from 'react-icons/fa'; // Change to right arrow

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-left">
        <img src={Logo} alt="Logo" className="header-logo" />
      </div>
      <div className="header-right">
        <a href="/" className="back-link">
          Back to Earth <FaArrowRight className="back-icon" /> {/* Right arrow */}
        </a>
      </div>
    </header>
  );
}

export default Header;
