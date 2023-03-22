import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import './nav.styles.css';
import Logo from '../../assets/tv.png';
const TopNav = () => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggleDropdown = () => {
    //   setIsOpen(!isOpen);
    // };

   

  return (
    <nav className="navbar">
  <div className="navbar-logo">
  <NavLink to='/' className='navLink'><img src={Logo} alt='logo' width='40px' height='40px' /></NavLink>
  </div>
  <div className="navbar-menu">
  <div className="dropdown dropdown-end">
  <button className='btn btn-ghost btn-circle'><BiMenu size={'25'}/></button>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <NavLink to='/' className='navLink'>Home</NavLink>
    <NavLink to='/dashboard' className='navLink'>Dashboard</NavLink>
    <NavLink to='/search' className='navLink'>Show Search</NavLink>
  </ul>
</div>
  </div>
  
</nav>

  )
}

export default TopNav