import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Nav from './components/nav'

/*theory: useEffect
    useEffect is a hook that is used to run side effects in a functional component in react that can be run on first render or every render or when certain state changes
*/

function App() {

  let [count, setCount] = useState(0)
  let [number, setNumber] = useState(0)


  
  //case1: run on first render
  useEffect(() => {
    alert("HEllo from useEffect1")
  },[])

  //case2: run on every render
  useEffect(() => {
      alert("HEllo from useEffect2")
  })

  //case3: run on when certain state changes
  useEffect(() => {
      alert("HEllo from useEffect3")
  },[count,number])


  return (
    <>
      <div className=' sticky top-0 text-black'>
        <Nav bgcolor='black' textcolor='white' a={number}  />
        <Nav a={number} />
      </div>
      <div className=' w-screen h-64 flex justify-center items-center'>
        <button 
          onClick={ () => {setCount(++count)}}
          className=' bg-green-950 text-yellow-300 rounded-lg p-4'
        >Count {count}</button>
      </div>
      <div className=' w-screen h-64 flex justify-center items-center'>
        <button 
          onClick={ () => {setNumber(++number)}}
          className=' bg-green-950 text-yellow-300 rounded-lg p-4'
        >Number {number}</button>
      </div>
    </>
  )
}

export default App
