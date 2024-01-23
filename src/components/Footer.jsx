import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';

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
      <Container fluid>
        <Row>
          <Col className='FooterCol'>
            <a href="#">About</a>
            <a href="#">Community Guidelines</a>
            <Dropdown>
              <Dropdown.Toggle className='FooterPrivacy' variant="link" id="dropdown-basic" onClick={handlePrivacyClick}>
                <span>Privacy & Terms</span>
              </Dropdown.Toggle>
              <Dropdown.Menu show={isDropdownVisible}>
                <Dropdown.Item href="#">Privacy Policy</Dropdown.Item>
                <Dropdown.Item href="#">User Agreement</Dropdown.Item>
                <Dropdown.Item href="#">Pages terms</Dropdown.Item>
                <Dropdown.Item href="#">Cookie Policy</Dropdown.Item>
                <Dropdown.Item href="#">Copyright Policy</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <a href="#">Sales Solutions</a>
            <a href="#">Safety Center</a>
          </Col>

          <Col className='FooterCol'>
            <a href="#">Accessibility</a>
            <a href="#">Careers</a>
            <a href="#">Ad Choices</a>
            <a href="#">Mobile</a>
          </Col>

          <Col className='FooterCol'>
            <a href="#">Talent Solutions</a>
            <a href="#">Marketing Solutions</a>
            <a href="#">Advertising</a>
            <a href="#">Small Business</a>
          </Col>

          <Col>
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
          </Col>

          <Col>
            <label htmlFor='FooterLanguageSelect'>Select Language</label>
            <select id="FooterLanguageSelect">
              <option value="en">English (English)</option>
              <option value="it">Italiano (Italian)</option>
              <option value="es">Español (Spanish)</option>
              <option value="si">Siciliano (M*inchia)</option>
            </select>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>LinkedIn Corporation &copy; {new Date().getFullYear()}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

