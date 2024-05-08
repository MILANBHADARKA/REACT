import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)    //we are using the setUser from the UserContextProvide.js file


    const handlesubmit = (e) => {
        e.preventDefault();
        console.log("Hello")
        setUser({username, password})    //here we are setting the user to the value of username and password
    }   

  return (
    <div>
        <h2>Login</h2>

        <input type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Username' />

        {"   "}

        <input type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        placeholder='Password' />

        <button onClick={handlesubmit}>Submit</button>

    </div>
  )
}

export default Login