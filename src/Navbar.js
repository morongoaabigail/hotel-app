import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className='home'><NavLink to="/">Home</NavLink></li>
        {/* <li className='explore'><NavLink to="/explore">Explore</NavLink></li> */}
        <li className='search'><NavLink to="/search">Search</NavLink></li>
        <li className='about'><NavLink to="/about">About Us</NavLink></li>
        {/* <li className='book'><NavLink to="/book">Book Now</NavLink></li> */}
        {/* <li className='register'><NavLink to="/register">Register</NavLink></li> */}
        <li className='contact'><NavLink to="/contact">Contact</NavLink></li>
        <li className='faq'><NavLink to="/faq">FAQ's</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
