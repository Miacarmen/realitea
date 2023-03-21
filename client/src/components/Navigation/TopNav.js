import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import './nav.styles.css';

const TopNav = () => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggleDropdown = () => {
    //   setIsOpen(!isOpen);
    // };

   

  return (
    <nav className="navbar">
  <div className="navbar-logo">
    <p>Logo</p>
  </div>
  <div className="navbar-menu">
  <div className="dropdown dropdown-end">
  <button className='btn btn-ghost btn-circle'><BiMenu size={'25'}/></button>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Home</a></li>
    <li><a>Dashboard</a></li>
    <li><a>Search Shows</a></li>
  </ul>
</div>
  </div>
  
</nav>

  )
}

export default TopNav