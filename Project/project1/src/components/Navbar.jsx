import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import brand_logo from '../assets/images/brand_logo.png'

function Navbar() {
  return (
    <>
        <nav className='flex justify-between items-center h-[72px] w-screen'>

            <div className='pl-12 pr-4'>
                <img src={brand_logo} alt="LOGO" width='76px' height='42.75px' />
            </div>

            <div className=''>
                <ul className='flex flex-wrap justify-center items-center gap-[17px]'>
                    <li>
                        <NavLink to="/" >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/location">Location</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>

            <div className='pr-12 pl-4'>
                <button className='bg-[#D01C28] pr-[10px] pl-[10px] pt-[2px] pb-[2px] text-white rounded-md'>Login</button>
            </div>

        </nav>  
    </>
  )
}

export default Navbar