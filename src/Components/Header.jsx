// src/Components/Navbar.jsx
import React from 'react';
import {  NavLink } from 'react-router-dom';
import { routes } from '../Routes';
// import { routes } from '../Routes';

const Header = () => {


  return (
    <div>
      <div className='flex items-center justify-between w-[full] h-[50px] bg-[#e3e6e3]'>
        <div className='ml-16'>
        <h2 className='text-black text-lg'>The Watch Hub</h2>
        </div>
        <div className='flex items-center justify-center gap-7 mr-16'>
        {routes.map(({ path, label }, index) => (
          <NavLink key={index} to={path} className={({ isActive}) =>
            isActive ? 'text-[#088178]   nav-link' : 'text-black  nav-link ' 
          }>
            {label}
          </NavLink>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Header;