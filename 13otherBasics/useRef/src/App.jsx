import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

/*theory: useRef
    useRef is a hook that is used to create a reference to an element in a functional component in react
    useRef is a hook that is used to create a reference to an element in a functional component in react that can be used to access the element
    useRef is a hook that is used to create a reference to an element in a functional component in react that can be used to access the element and change the element properties like style, class etc
*/

function App() {
  let [count, setCount] = useState(0)
  let ref = useRef()

  let change = () => {
    ref.current.style.backgroundColor = 'red'
  }

  return (
    <>
        <button ref={ref} onClick={ () => {setCount(++count)}}>
          count {count}
        </button>
        <button onClick={change}>Change</button>
    </>
  )
}

export default App
