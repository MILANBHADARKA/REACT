import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { CounterContext } from './context/context'

function App() {

  const [count, setCount] = useState(0)

  return (
    //here we we are prviding count as the value of the context ans count is the state which we are declaring above
    <CounterContext.Provider value={{count, setCount}}>  
      <Navbar />
      <button onClick={ () => setCount(count + 1) }>count {count}</button>
    </CounterContext.Provider>
  )
}

export default App
