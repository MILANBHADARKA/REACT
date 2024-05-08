import { useState, useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Delete from './assets/Delete.svg'
import Edit from './assets/Edit.svg'
import Add from './assets/Add.svg'
import { v4 as uuidv4 } from 'uuid';
import React, { Component } from 'react';


function App() {

  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [showfinished, setShowfinished] = useState(true)

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
  
    let newtodos = [...todos, {id: uuidv4(), todo, isCompleted: false}];
    setTodos(newtodos)
    setTodo("") 
    localStorage.setItem('todos', JSON.stringify(newtodos))
  }

  function handleinput(e) {
    let value = e.target.value;
    value = value.replace(/(\S{35})(?=\S)/g, "$1 ");
    setTodo(value);
  }

  function handlecheck(e) {
    let id = e.target.name
    let index = todos.findIndex( (item) => {
      return item.id === id;
    })
    
    let newtodos = [...todos];
    // console.log(newtodos[index].isCompleted)
    newtodos[index].isCompleted = !newtodos[index].isCompleted
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

    const toggleFinished = (e) => {
        setShowfinished(!showfinished)
    }   

  return (
    <>
          <Navbar />
       
          <div className="main w-[50vw] min-h-[80vh] bg-[#EAEAEA] text-[#34495E] m-auto my-8 p-9 rounded-md">

          <h3 className='text-center m-5 text-xl font-extrabold underline underline-offset-2 '>Add Todo</h3>

            <div className='flex justify-center items-center'>
            <input onChange={handleinput} value={todo} type="text" className='todoinput border-2 rounded-lg border-gray-600 w-1/2' ref={create} />
            <img onClick={handleadd} src={Add} alt="" className=' h-8 w-8 cursor-pointer m-3' />
            </div>

            {todos.length != 0 && <button onClick={toggleFinished} className=' border-2 border-black rounded-md m-3 px-3 bg-violet-400 hover:bg-violet-500 cursor-pointer'>Show {showfinished ? 'Done' : 'Not Done'}</button>}

            <h3 className='text-center m-5 font-bold underline underline-offset-2 '>Your Todos</h3>

            {todos.length === 0 && <div className='text-center m-4 font-bold underline text-lg'>No Todos</div>}
            

            {todos.map( (item) => {
                if(showfinished)
                {
                    return( (true && !item.isCompleted) && <div className="flex justify-center items-center">
                    
                    <div key={item.id} className="todos flex my-3 justify-between items-center w-5/6">

                       <input name={item.id} onClick={handlecheck} type="checkbox"  id="" defaultChecked={item.isCompleted} className='cursor-pointer h-4 w-4'/>

                      <div className={`${item.isCompleted ? "line-through" : ""} w-[60%] whitespace-normal `} >{item.todo}</div>
                    
                      <div className="buttons flex gap-7">
                            <img onClick={ () => {handleedit(item.id)}} src={Edit} alt="" className=' h-[22px] w-[22px] cursor-pointer' />
                            <img onClick={ () => {handledelete(item.id)}} src={Delete} alt="" className=' h-6 w-6 cursor-pointer' />
                      </div>
                      
                    </div>
                </div>
                )
                }
                else{
                    return( (true && item.isCompleted) && <div className="flex justify-center items-center">
                    
                    <div key={item.id} className="todos flex my-3 justify-between items-center w-1/2">

                       <input name={item.id} onClick={handlecheck} type="checkbox"  id="" defaultChecked={item.isCompleted} className='cursor-pointer h-4 w-4'/>

                      <div className={`${item.isCompleted ? "line-through" : ""} w-1/2 max-w-1/2 whitespace-normal `} >{item.todo}</div>
                    
                      <div className="buttons flex gap-7">
                            <img onClick={ () => {handleedit(item.id)}} src={Edit} alt="" className=' h-[22px] w-[22px] cursor-pointer' />
                            <img onClick={ () => {handledelete(item.id)}} src={Delete} alt="" className=' h-6 w-6 cursor-pointer' />
                      </div>
                      
                    </div>
                </div>
                )
                }
            })}

          </div>
    </>
  )
}

export default App
