import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav.styles.css';

const TopNav = () => {
  return (
    <nav class="navbar">
  <div class="navbar-logo">
    <p>Logo</p>
  </div>
  <ul class="navbar-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Portfolio</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

  )
}

export default TopNav