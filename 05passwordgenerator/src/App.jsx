import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/* THEORY: useEffect
    useEffect is a hook that is used to perform side effects in a functional component.
    useEffect is called after the component is rendered.
    useEffect is called after every render of the component
    useEffect is called after the first render and after every update
*/

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)
  const [password, setPassword] = useState('password')

  //userRef hook
  const passwordRef = useRef(null)

  const copypasswordtoclipboard = useCallback( () => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3)      //use for give selection range now here only 3 char select when user click on copy button
    window.navigator.clipboard.writeText(password)
  }, [password])


  const passwordgenerator = useCallback( () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numbers)    str += "0123456789"
    if(symbols)   str += "!@#$%^&*()_{}[]"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)


  }, [length, numbers, symbols])

  
  useEffect( () => {
    passwordgenerator();
  }, [length, numbers, symbols, passwordgenerator])

  return (
    <>
      <div className=' w-screen max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-200 bg-gray-400'>

          <h1 className='text-white text-center text-xl my-3'>Password Generator</h1>

          <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
              <input type="text" 
              value={password} 
              className=' outline-none w-full py-1 px-3' 
              placeholder='Password' 
              readOnly 
              ref={passwordRef}
              />
              <button 
              onClick={copypasswordtoclipboard}
              className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
                Copy
                </button>
          </div>

          <div className='flex gap-4 flex-wrap'>
            <div className='flex text-sm gap-x-2'>
                <div className=' flex items-center gap-x-1'>
                  <input 
                  type="range"
                  min={6}
                  max={100}
                  value={length}
                  className=' cursor-pointer'
                  onChange={ (e) => {setLength(e.target.value)}}
                   />
                   <label>Length: {length}</label>
                </div>
            </div>

            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={numbers}
              id='numberInput' 
              onChange={ () => {
                setNumbers( (prev) => !prev);
              }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={symbols}
              id='symbolInput' 
              onChange={ () => {
                setSymbols( (prev) => !prev);
              }}
              />
              <label htmlFor="symbolInput">Symbol</label>
            </div>
          </div>

      </div>
    </>
  )
}

export default App
