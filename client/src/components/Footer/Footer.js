import React from 'react';
import { BsInstagram, BsTwitter, BsFacebook, BsReddit } from 'react-icons/bs';

import './footer.styles.css';
import SubscriptionBar from '../Filters/SubscriptionBar';

const Footer = () => {
  return (
    <footer class='footer footer-center p-10 text-base-content rounded'>
      <div className='footer-social'>
        <div className='footer-social-wrapper'>
          <div className='footer-social-items grid grid-flow-col gap-4'>
            <BsTwitter />
            <BsInstagram />
            <BsFacebook />
          </div>
        </div>
      </div>

      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items grid grid-flow-col gap-4'>
            <h2>About Us</h2>
            <h2>Contact</h2>
            <h2>Forums</h2>
            <h2>Suggestions</h2>
          </div>
        </div>
      </div>

      <div className='subscribe-bar'>
        
          <SubscriptionBar />
      </div>

      <div>
        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
