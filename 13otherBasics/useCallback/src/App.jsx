import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  const [adjective, setAdjective] = useState("Good")


  //without useCallback
  // const getAdjective = () => {
  //   setAdjective("Best")
  //   return adjective + count
  // }


  //with useCallback
  const getAdjective = useCallback(() => {     // we can say that with use of useCallback we freeze the function and it will not be re-created on every re-render of the component. and also auto run the function when the component is rendered and run only when dependency changes.
      setAdjective("Best")
      return adjective + count
  } , [count2])    // we can also pass the dependency array in the useCallback function. so that the function will only run when the dependency changes. if we pass empty array then the function will only run once when the component is rendered and will not run again.

  return (
    <>
        <Navbar adjective = {adjective} getAdjective = {getAdjective} />

        <div>
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <button onClick={() => setCount2((count) => count2 + 1)}>
              count is {count2}
            </button>
        </div>
    </>
  )
}

export default App
