import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    //here we import the UserContextProvider for providing the values to the components
    <UserContextProvider>  
      <h1>Hello Hi kya bat hai?</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
