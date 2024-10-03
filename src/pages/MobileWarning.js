
import '../styling/MobileWarning.css'; // For styling and animations

const MobileWarning = () => {
  return (
    <div className="mobile-warning-container">
      <div className="mobile-warning-content">
        <h1>Website not accessible on mobile devices</h1>
        <p>The mobile version is currently under development.</p>
        <div className="animated-icons">
          <span role="img" aria-label="warning">⚠️</span>
        </div>
      </div>
    </div>
  );
};

export default MobileWarning;
