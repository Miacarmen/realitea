import React from 'react';
import { NavLink } from 'react-router-dom';
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
            <NavLink to='/about' className='footer-link'>About Us</NavLink>
            <NavLink to='/contact' className='footer-link'>Contact</NavLink>
            <NavLink to='/forums' className='footer-link'>Forums</NavLink>
            <NavLink to='/suggestions' className='footer-link'>Suggestions</NavLink>
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
