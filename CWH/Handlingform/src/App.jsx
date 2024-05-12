import { useState } from 'react'
import './App.css'
import { set, useForm } from 'react-hook-form'   //react-form-hook is a library that is used to handle the form in react. it is used to validate the form and also to handle the form data.for more info visit https://react-hook-form.com/get-started

function App() {

  const {
    register,
    handleSubmit,
    watch,
    setError,     
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = (ms) => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve()
      },ms*1000)
    })
  }

  const onsubmit = async (data) => {
    await delay(2)           //simulating network delay
    console.log(data)
    if(data.name === 'Rohan'){
      setError('blocked', { message: "You are blocked"})
    }
    else if(data.name !== 'milan'){
      setError('Myform', { message: "Name is Wrong"})
    }
  } 

  return (
    <>
        <div className="container">
          <form action="" onSubmit={handleSubmit(onsubmit)}>

            <input type="text" placeholder='Name' {...register("name", {required: {value: true, message: "Required"}, minLength: { value: 3, message: "Name Min length is 3 "}, maxLength: {value:10, message: "Name Max length is 10"}})} className='border-2 border-black rounded-lg' />
            <br />
            {errors.name && <span className=' text-red-600'>{errors.name.message}</span>}
            <br />

            <input type="password" placeholder='Password' {...register("Password", {required: {value: true, message: "Required"}, minLength: {value:3, message: "Password min length is 3"}})} className='border-2 border-black rounded-lg' />
            <br />
            {errors.Password && <span className=' text-red-600'>{errors.Password.message}</span>}
            <br />

            <button disabled={isSubmitting} type="submit" className='rounded-md bg-red-600 p-3'>Submit</button>   {/*we can use isSubmitting to disable the button when the form is submitting. so that the user can not submit the form multiple times.*/}
            <br />
            {isSubmitting && <h1>Submitting...</h1>}
            
            {errors.Myform && <span className=' text-red-600'>{errors.Myform.message}</span>}   {/*we can use this to show the error message that we set in setError function.*/}
            {errors.blocked && <span className=' text-red-600'>{errors.blocked.message}</span>}

          </form>
        </div>
    </>
  )
}

export default App
