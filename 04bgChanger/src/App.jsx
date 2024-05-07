import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('pink')

  const changeColor = (color) => {
    setColor(color)
  }

  return (
    <>
      <div className=' h-screen w-screen duration-200' style={{backgroundColor: color}}>
        <div className=' bg-pink-500 rounded-xl fixed flex flex-wrap justify-center bottom-20 m-auto shadow-lg'>
          <button onClick={ () => {setColor("black")} } className='m-2' style={{backgroundColor: 'black'}}>Black</button>
          <button onClick={ () => {setColor("white")} } className='m-2 text-black' style={{backgroundColor: 'white'}}>White</button>
          <button onClick={ () => {setColor("yellow")} } className='m-2' style={{backgroundColor: 'yellow'}}>Yellow</button>
          <button onClick={ () => {setColor("green")} } className='m-2' style={{backgroundColor: 'green'}}>Green</button>
          <button onClick={ () => {setColor("red")} } className='m-2' style={{backgroundColor: 'red'}}>Red</button>
          <button onClick={ () => {setColor("blue")} } className='m-2' style={{backgroundColor: 'blue'}}>Blue</button>
        </div>
      </div>
    </>
  )
}

export default App
