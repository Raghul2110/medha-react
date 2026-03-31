import "./Navbar.css";
import logo from "../../assets/medha-logo.svg"
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">
      {/* Top Bar */}
      <div className="topbar">
        
        <div className="left">
          <span className="phone-item">
            <FaPhoneAlt className="phone-icon" />
            +1 646 775 2855 (US)
          </span>

          <span className="phone-item">
            <FaPhoneAlt className="phone-icon" />
            +91 93536 44646 (India)
          </span>
        </div>

        <div className="right">
          <span className="login">Client Login</span>
          <button className="chat-btn">Live Chat</button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-nav">
        <img src={logo} alt="Medha Cloud logo" className="logo-img"/>
        {/* <h2 className="logo">MEDHA CLOUD</h2> */}
        <ul>
          <li><Link to="/white-label-msp">White Label MSP Services</Link></li>
          <li><Link to="/services">Cloud</Link></li>
          <li><Link to="/services">Professional Services</Link></li>
          <li><Link to="/contact">Company</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;