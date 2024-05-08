import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const handleclick = () => {
    alert('button clicked')
  }

  const mouseover = () => {
    alert('hovered')
  }

  const [name, setName] = useState("Milan");
  const handlechange = (e) => {
    setName(e.target.value)
  }

  return (
    <>
          <div className="button">
            <button onClick={handleclick}>
              Click
            </button>
          </div>
          <div onMouseOver={mouseover} className=" bg-red-800 w-28 h-28 m-4"></div>

          <input type="text" value={name} onChange={handlechange}/>


    </>
  )
}

export default App
