import React from 'react'
import Button from './Button'

function Navbar({ count }) {
  return (
    <>
        <div>Navbar</div>
        <div><Button count={count} /></div>
    </>
  )
}

export default Navbar