import { useState, useEffect,useRef, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {

    let [todo, setTodo] = useState('')
    let [todos, setTodos] = useState([])

    const create = useRef();

    const handleadd = useCallback( () => {
      let x = create.current.value;
      // console.log(x)
      
      if(x == '')
      {
        alert('Please enter a todo')
      }
      else{
        setTodo(x);
        console.log(todo)
      }
    },[todo] )

  return (
    <>
          <Navbar />

          <div className="main w-[90vw] h-[80vh] bg-sky-400 m-auto my-8 p-9 rounded-md">

            <h3 className=''>Add Todo</h3>

            <input type="text" className='todoinput border-2 rounded-lg border-gray-600 w-1/2' ref={create}  />
            <button onClick={ () => {handleadd()}}  className=' border-2 border-black rounded-md m-3 px-3 bg-violet-400 hover:bg-violet-500 cursor-pointer'>Add</button>

            <h3>Your Todos</h3>
            {todos.length === 0 && <div className='text-center m-4 font-bold underline text-lg'>No Todos</div>}

            {todos.map( (item) => {
                return(

                  <div key={item.id} className="todos flex my-3 justify-between w-1/2">

                   <input name={item.id} type="checkbox" value={item.iscompleted} id="" />

                  <div className={item.iscompleted ? "line-through" : ""}>{item.todo}</div>
              
                  <div className="buttons flex gap-7">
                        <button className=' border-2 border-black rounded-md px-3 bg-violet-400 hover:bg-violet-500 cursor-pointer'>Delete</button>
                        <button className=' border-2 border-black rounded-md px-3 bg-violet-400 hover:bg-violet-500 cursor-pointer'>Edit</button>
                  </div>
              
                  </div>
                )
            })}


          </div>
    </>
  )
}

export default App
