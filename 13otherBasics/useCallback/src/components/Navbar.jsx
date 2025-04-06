import React from 'react'
import { memo } from 'react'

function Navbar({adjective, getAdjective}) {

    console.log("Navbar rendered")

  return (
    <>
        I am a {adjective} Navbar
        <button className='bg-slate-300 rounded-md' onClick={ () => {getAdjective()}}>{getAdjective()}</button>
    </>
  )
}

export default memo(Navbar)  //we can use memo to prevent re-render of the component when the parent component re-renders. if the props of the component are not changed then the component will not re-render.
//means id we NOT use memo then if parent component re-render then the child component will also re-render but if we use memo then the child component will not re-render if the props of the child component are not changed.