import React, {useContext} from 'react'
import Component1 from './Component1'
import { CounterContext } from '../context/context'


function Button() {

  const value = useContext(CounterContext)  //here we are using the useContext hook to get the value of the context

  //second way to get the value of the context with the help of destructuring
  // const {setCount} = useContext(CounterContext)  
  // const {count} = useContext(CounterContext)  

  return (
    <>
        <button onClick={ () => value.setCount(value.count + 1) } className='bg-slate-600 rounded-lg m-8'><span><Component1 /></span>Hello I am a button</button>
    </>
  )
}

export default Button