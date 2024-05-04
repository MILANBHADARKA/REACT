import { useState, useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  const create = useRef();

  useEffect(() => {
    let data = localStorage.getItem('todos')
    if(data) {
      setTodos(JSON.parse(data))
    }
  }, [])

  const handleadd = () => {
    if(todo === '') {
      alert('Please enter a todo')
      return
    }

    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
    setTodo("") 
    let newtodos = [...todos];
    localStorage.setItem('todos', JSON.stringify(newtodos))
  }

  function handleinput(e) {
    setTodo(e.target.value)
  }

  function handlecheck(e) {
    let id = e.target.name
    let index = todos.findIndex( (item) => {
      return item.id === id;
    })

    let newtodos = [...todos];
    newtodos[index].iscompleted = !newtodos[index].iscompleted
    setTodos(newtodos)
    localStorage.setItem('todos', JSON.stringify(newtodos))
   }

   function handledelete(id) {
    let confirm = window.confirm('Are you sure you want to delete this todo?')
    if(confirm) {
      let newtodos = todos.filter( (item) => {
        return item.id !== id;
      })
     setTodos(newtodos)
     localStorage.setItem('todos', JSON.stringify(newtodos))
    }
    }

    function handleedit(id) {
      let index = todos.findIndex( (item) => {
        return item.id === id;
      })
      let newtodo = prompt('Edit Todo') || todos[index].todo
      let newtodos = [...todos]
      newtodos[index].todo = newtodo
      setTodos(newtodos)
      localStorage.setItem('todos', JSON.stringify(newtodos))
    }

  return (
    <>
          <Navbar />

          <div className="main w-[90vw] h-[80vh] bg-sky-400 m-auto my-8 p-9 rounded-md">

            <h3 className=''>Add Todo</h3>

            <input onChange={handleinput} value={todo} type="text" className='todoinput border-2 rounded-lg border-gray-600 w-1/2' ref={create} />
            <button onClick={handleadd} className=' border-2 border-black rounded-md m-3 px-3 bg-violet-400 hover:bg-violet-500 cursor-pointer'>Add</button>

            <h3>Your Todos</h3>
            {todos.length === 0 && <div className='text-center m-4 font-bold underline text-lg'>No Todos</div>}

            {todos.map( (item) => {
                return(

                  <div key={item.id} className="todos flex my-3 justify-between w-1/2">

                   <input name={item.id} onClick={handlecheck} type="checkbox" value={item.iscompleted} id="" />

                  <div className={item.iscompleted ? "line-through" : ""}>{item.todo}</div>
              
                  <div className="buttons flex gap-7">
                        <button onClick={ () => {handledelete(item.id)}} className=' border-2 border-black rounded-md px-3 bg-violet-400 hover:bg-violet-500 cursor-pointer'>Delete</button>
                        <button onClick={ () => {handleedit(item.id)}} className=' border-2 border-black rounded-md px-3 bg-violet-400 hover:bg-violet-500 cursor-pointer'>Edit</button>
                  </div>
              
                  </div>
                )
            })}

          </div>
    </>
  )
}

export default App
