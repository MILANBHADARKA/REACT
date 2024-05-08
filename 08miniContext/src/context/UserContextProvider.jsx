import React from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({children}) => {  //children is a prop that is passed to the component automatically by react

    const [user, setUser] = React.useState(null)

    return ( 
        //use of usercontext.provider is to provide the values to the components
        //in value you can pass values that you want to share with other components
        <UserContext.Provider value={{user,setUser}}>       
            {children}
        </UserContext.Provider> 
    )
}

export default UserContextProvider;