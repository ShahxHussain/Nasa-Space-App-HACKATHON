import '../styling/Header.css'; 
import Logo from '../assets/logo.png';


const Header = () => {
  return (

      <header className="app-header">
        <div className="header-left">
          <h3>Harmony Heroes</h3>
        </div>
        <div className="header-center">
          <img src={Logo} alt="Logo" className="header-logo" />
        </div>
        <div className="header-right">
          <a href="/">Back to Earth</a>
        </div>
      </header>
  );
}

export default Header;  // Export the Header component