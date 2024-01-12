import React from 'react';
import {FaWhatsapp, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
    return (
        <div className="duca4__footer section__padding" id="footer">
        <div className="duca4__footer-heading">
          <h1 className="gradient__text">Leap ahead into the future, let others follow!</h1>
        </div>
    
        <div className="duca4__footer-btn">
          <p>Request Early Access</p>
        </div>
    
        <div className="duca4__footer-links">
          <div className="duca4__footer-links_logo">
            <img src={gpt3Logo} alt="gpt3_logo" />
            <p>Tech Space Travellab, Tropicana Mall Uyo <br /> All Rights Reserved &copy; 2023</p>
          </div>
          <div className="duca4__footer-links_div">
            <h4>Social Media</h4>
            <p>
              <a href="https://wa.me/2348021218138" target="blank" rel="noopener noreferrer">
                <FaWhatsapp /> 
              </a>
            </p>
           <p>
              <a href="https://www.instagram.com" target="blank" rel="noopener noreferrer">
                <FaInstagram /> 
              </a>
            </p>
            <p>
              <a href="https://www.telegram.org/" target="blank" rel="noopener noreferrer">
                <FaTelegram /> 
              </a>
            </p>
            <p>
              <a href="https://www.twitter.com" target="blank" rel="noopener noreferrer">
                <FaTwitter /> 
              </a>
            </p>
          </div>
          <div className="duca4__footer-links_div">
            <h4>Company</h4>
            <p>Terms & Conditions </p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="duca4__footer-links_div">
            <h4>Get in touch</h4>
            <p>Support email: DUCA-4support@gmail.com</p> 
            <p>+234 8021218138</p>
            <p>Email: lifedmnc@gmail.com</p>
          </div>
        </div>
    
        <div className="duca4__footer-copyright">
          <p>@2024 DUCA-4. All rights reserved.</p>
          <marquee direction="right">Developer: Uwemedimo Dominic Okon.</marquee>
        </div>
      </div>
    );
};

export default Footer;