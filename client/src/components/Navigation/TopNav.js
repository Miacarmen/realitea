// TO-DO: Add a dropdown menu for user profile
// TO-DO: Add Active state to nav links

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { BiMenu } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';

import './nav.styles.css';

const TopNav = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <nav className='navbar'>
      <div className='navbar-start flex-1'>
        <NavLink to='/' className='navLink pl-2'>
          Home
        </NavLink>
        <NavLink to='/forumcategories' className='navLink pl-2'>
          Forums
        </NavLink>
        <NavLink to='/title' className='navLink pl-2'>
          Show Details
        </NavLink>
      </div>
      <div className='navbar-end '>
        <NavLink to='/login'>
          <FaUserCircle className='userIcon' size={25} />
        </NavLink>
        <p className='loginBtn pl-2'>Login</p>
      </div>
    </nav>
  );
};

export default TopNav;
