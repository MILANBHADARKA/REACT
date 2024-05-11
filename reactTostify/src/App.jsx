import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const notify = () => {toast("Don't touch this button!")}


  return (
    <>

    <button onClick={notify} className='p-1 bg-gray-500 text-white rounded-lg'>Touch</button>
    <ToastContainer />

    </>
  )
}

export default App
