import React from 'react'
import Component1 from './Component1'

function Button({count}) {
  return (
    <>
        <button className='bg-slate-600 rounded-lg'><span><Component1 count={count} /></span>Hello I am a button</button>
    </>
  )
}

export default Button