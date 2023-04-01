import React from 'react';

const MobileNav = () => {
  return (
    <div>
      <div className='navbar-menu'>
        <div className='dropdown'>
          <button className='btn btn-ghost btn-circle'>
            <BiMenu size={'25'} />
          </button>
          <ul
            tabIndex={0}
            className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
          >
            <NavLink to='/' className='navLink'>
              Home
            </NavLink>
            <NavLink to='/dashboard' className='navLink'>
              User Dashboard
            </NavLink>
            <NavLink to='/search' className='navLink'>
              Contact
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
