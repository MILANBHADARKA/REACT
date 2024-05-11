import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [todos, setTodos] = useState([
    {
        id:1,
        title: 'first',
        desc: 'first desc'
    },
    {
        id:2,
        title: 'second',
        desc: 'second desc'
    },
    {
        id:3,
        title: 'third',
        desc: 'third desc'
    },
    {
        id:4,
        title: 'fourth',
        desc: 'fourth desc'
    },
    {
        id:5,
        title: 'fifth',
        desc: 'fifth desc'
    }
  ])

  function Onetodo() {
    return (
      todos.map( (todo) => {
        return (
        <li id={todo.id} className=' border m-4'>
          <h3>{todo.title}</h3>
          <p>{todo.desc}</p>
        </li>
        )
      })
    )
  }
  

  return (
    <>
      <ul>
        <Onetodo />
      </ul>
    </>
  )
}

export default App
