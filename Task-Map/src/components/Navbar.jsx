import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around items-center w-screen bg-violet-500'>
      <h1>Task-Map</h1>
      <div className=' flex justify-center items-center gap-10'>
        <li className=' list-none'>Home</li>
        <li className=' list-none'>Your Task</li>
      </div>
    </nav>
  )
}

export default Navbar
