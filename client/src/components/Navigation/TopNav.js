import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';

import './nav.styles.css';
import Logo from '../../assets/tv.png';

const TopNav = () => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggleDropdown = () => {
    //   setIsOpen(!isOpen);
    // };

   

  return (
    <nav className="navbar">
  <div className="navbar-start flex-1">
  <NavLink to='/' className='navLink'>Home</NavLink>
    <NavLink to='/dashboard' className='navLink pl-2'>Forums</NavLink>
    <NavLink to='/search' className='navLink pl-2'>Shows</NavLink>
  </div>
  <div className="navbar-end ">
    <NavLink to='/login'><FaUserCircle className='userIcon' size={25} /></NavLink>
  </div>
  
</nav>

  )
}

export default TopNav