import React from 'react'
import { routes } from '../Routes'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-7 flex-wrap mt-5 w-full bg-[#333333] p-5">
        <div className='flex items-start justify-center flex-col gap-3  border-white p-2'>
          <h2 className='text-2xl text-white'>Watch Hub</h2>
          <h2 className='text-lg text-white'>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Doloribus sed vero  voluptas <br /> hic perspiciatis autem?
          </h2>
          <h2 className='text-lg text-white'>© Copyright</h2>
        </div>
        <div className='flex items-start justify-center flex-col gap-3 border-l border-white p-5'>
          <h2 className='text-2xl text-white'>Menu</h2>
          <div className='flex items-start justify-center flex-col gap-3 mr-16'>
            {routes.map(({ path, label }, index) => (
                      <NavLink key={index} to={path} className="text-white">
                        {label}
                      </NavLink>
                    ))}
          </div>
        </div>
        <div className='flex items-start justify-center flex-col gap-3 border-l border-white p-5'>
          <h2 className='text-2xl text-white'>Follow Us</h2>
          <div className='flex items-start justify-center flex-col gap-3 mr-16'>
            {routes.map(({ path, label }, index) => (
                      <NavLink key={index} to={path} className="text-white">
                        {label}
                      </NavLink>
                    ))}
          </div>
        </div>
        <div className='flex items-start justify-center flex-col gap-3 border-l border-white p-5'>
          <h2 className='text-2xl text-white'>Menu</h2>
          <div className='flex items-start justify-center flex-col gap-3 mr-16'>
            {routes.map(({ path, label }, index) => (
                      <NavLink key={index} to={path} className="text-white">
                        {label}
                      </NavLink>
                    ))}
          </div>
        </div>
      </div>
      <div className="text-center space-x-6 text-xs w-full p-5  text-white/80 bg-[#333333]">
        <a href="#">Privacy</a>
        <a href="#">Terms and conditions</a>
        <a href="#">Cookie policy</a>
        <a href="#">Cookie Settings</a>
      </div>

      <p className="text-center text-xs text-white/60 p-3 bg-[#333333]">
        © 1998–2025 UEFA. All rights reserved.<br />
        The UEFA word, the UEFA logo and all marks related to UEFA competitions, are protected...
      </p>
    </div>
  )
}

export default Footer
