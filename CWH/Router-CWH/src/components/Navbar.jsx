import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className=' flex justify-around items-center bg-gray-500 h-14 w-screen'>
                <li className=' list-none'><NavLink className={ (e) => e.isActive ? "text-red-600 bg-black" : "text-white" } to="/">Home</NavLink></li>
                <li className=' list-none'><NavLink className={ (e) => e.isActive ? "text-red-600 bg-black" : "text-white" } to="/about">About</NavLink></li>
                <li className=' list-none'><NavLink className={ (e) => e.isActive ? "text-red-600 bg-black" : "text-white" } to="/login">Login</NavLink></li>
        </nav>
        </>
  )
}
export default Navbar
