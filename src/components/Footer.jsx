import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/Footer.css';

const Footer = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);
  
    const handlePrivacyClick = () => {
      setDropdownVisible(!isDropdownVisible);
    };
  
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('click', handleOutsideClick);
  
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, []);

  return (
    <footer>
      <div className='FooterFlex'>
        <div className='FooterCol'>
          <a href="#">About</a>
          <a href="#">Community Guidelines</a>
          <div className='FooterDropdown' onClick={handlePrivacyClick} ref={dropdownRef}>
                    <span className='FooterPrivacy'>Privacy & Terms</span>
                    <i className="bi bi-caret-down-fill"></i>
            <div className={`DropdownContent ${isDropdownVisible ? 'visible' : ''}`}>
              <a href="#">Privacy Policy</a>
              <a href="#">User Agreement</a>
              <a href="#">Pages terms</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Copyright Policy</a>
            </div>
          </div>
          <a href="#">Sales Solutions</a>
          <a href="#">Safety Center</a>
        </div>

        <div className='FooterCol'>
          <a href="#">Accessibility</a>
          <a href="#">Careers</a>
          <a href="#">Ad Choices</a>
          <a href="#">Mobile</a>
        </div>

        <div className='FooterCol'>
          <a href="#">Talent Solutions</a>
          <a href="#">Marketing Solutions</a>
          <a href="#">Advertising</a>
          <a href="#">Small Business</a>
        </div>

        <div className='FooterCol'>
          <div className='FooterSpecial'>
            <i className="bi bi-question-circle-fill"></i>
            <div className='FooterQst'>
              <a className='FooterSpecialLink' href="#">Questions?</a>
              <p>Visit our Help Center.</p>
            </div>
          </div>

          <div className='FooterSpecial'>
            <i className="bi bi-gear-fill"></i>
            <div className='FooterQst'>
              <a className='FooterSpecialLink' href="#">Manage your account and privacy</a>
              <p>Go to your Settings.</p>
            </div>
          </div>

          <div className='FooterSpecial'>
            <i className="bi bi-shield-shaded"></i>
            <div className='FooterQst'>
              <a className='FooterSpecialLink' href="#">Recommendation transparency</a>
              <p>Learn more about Recommended Content.</p>
            </div>
          </div>
        </div>

        <div className='FooterCol'>
          <label htmlFor='FooterLanguageSelect'>Select Language</label>
          <select id="FooterLanguageSelect">
            <option value="en">English (English)</option>
            <option value="it">Italiano (Italian)</option>
            <option value="es">Español (Spanish)</option>
          </select>
        </div>
      </div>

      <p>LinkedIn Corporation &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
