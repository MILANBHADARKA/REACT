import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    
    const {user} = useContext(UserContext)   //we are using the user from the UserContextProvide.js file
    
    if (!user) return <div>please login</div>

    return( 
    <div>
        <h2>Welcome</h2>
        <h3>User : {user.username}</h3>
        <h3>Password : {user.password}</h3>
    </div>
    )
}

export default Profile