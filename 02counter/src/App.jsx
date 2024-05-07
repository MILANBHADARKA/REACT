import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*THEORY: useState
    useState is a hook that is used to create a state variable
    useState is a hook that is used to create a state variable in a functional component
    useState is a hook that is used to create a state variable in a functional component in react
    useState is a hook that is used to create a state variable in a functional component in react that can be updated
    useState is a hook that is used to create a state variable in a functional component in react that can be updated by calling a method
    useState is a hook that is used to create a state variable in a functional component in react that can be updated by calling a method that is returned by useState
    useState is a hook that is used to create a state variable in a functional component in react that can be updated by calling a method that is returned by useState with an initial value
    useState is a hook that is used to create a state variable in a functional component in react that can be updated by calling a method that is returned by useState with an initial value of 15
    
*/

function App() {

  let [counter,setCounter] = useState(15)
  /*for lerning purpose
      setCounter is method that can do changies in the value of counter
      we can give any name instede og counter and setCounter
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
    <>
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
