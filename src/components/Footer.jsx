import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import './css/Footer.css';

{/* Mettere link corretti */}
const Footer = () => {
    return (
    <footer>
        <div className='FooterFlex'>
            <div className='FooterCol'>
                <a href="#">About</a>
                <a href="#">Community Guidelines</a>
                <a href="#">Privacy & Terms</a> {/* modale */}
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
                <p>Select Language</p>
                <p>Placeholder</p>
            </div>
        </div>

        <p>LinkedIn Corporation &copy; 2024</p>
    </footer>
    );
}

export default Footer;