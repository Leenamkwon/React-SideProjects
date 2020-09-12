import React, { useState } from 'react';
/* ROUTER */
import { Link, NavLink } from 'react-router-dom';
/* images */
import logo from '../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <NavLink to='/'>
            <img src={logo} alt='logo' />
          </NavLink>
          <button onClick={handleToggle} type='button' className='nav-btn'>
            <FaAlignRight className='nav-icon' />
          </button>
        </div>
        <ul className={open ? 'nav-links show-nav' : 'nav-links'}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/rooms'>Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
