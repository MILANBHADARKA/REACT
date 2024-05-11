import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    const alltodos = JSON.parse(localStorage.getItem("todos"))

    if(alltodos && alltodos.length > 0){
      setTodos(alltodos);
    }

  }, [])

  useEffect( () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])   //this todos is from the state

  const addTodo = (todo) => {
    setTodos([...todos, {id: Date.now(), ...todo}])
  }

  const updatedTodo = (id, updatedTodo) => {
    setTodos(todos.map( (todo) => todo.id === id ? updatedTodo : todo))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter( (todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(todos.map( (todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo ))
  }


  return (
    <TodoProvider value={{todos, addTodo, updatedTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
                        <TodoForm /> 
          </div>
          <div className="flex flex-wrap gap-y-3">
                        {todos.map( (todo) => {
                            return(
                              <div key={todo.id} className='w-full'>
                                <TodoItem todo={todo} />
                              </div>
                            )
                        })}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
