import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*THEORY: useState
    useState is a hook that is used to create a state variable
    useState is a hook that is used to create a state variable in a functional component in react that can be updated by calling a method that is returned by useState with an initial value
*/

function App() {

  let [counter,setCounter] = useState(15)
  /*for lerning purpose
      setCounter is method that can do changies in the value of counter
      we can give any name instede of counter and setCounter
      useState is a hook that is used to create a state variable
      useState(15) is used to set the initial value of the state variable
  */

  const addvalue = () => {
    // counter++;
    setCounter(++counter)
  }
  const removevalue = () => {

    // counter--;
    setCounter(--counter)
  }

  return (
    <>          //this is a fragment
      <h1>Milan</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addvalue} >Add value {counter}</button>
      <br />
      <button onClick={removevalue} >Remove value {counter}</button>

      <footer>Footer: {counter}</footer>
    </>
  )
}

export default App
