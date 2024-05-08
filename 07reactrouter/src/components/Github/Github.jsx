import React, { useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect( () => {
    //     fetch('https://api.github.com/users/milanbhadarka')
    //     .then( Response => Response.json())
    //     .then( data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

  return (
    <div className=' text-center m-4 bg-gray-600 text-white text-3xl'> 
        <span className='underline'>GITHUB</span>+
        <ul>
            <li>Name : {data.name}</li>
            <li>Followers : {data.followers}</li>
            <li>Following : {data.following}</li>
            <li><img src={data.avatar_url} alt="GIT PICTURE" width={300} height={250}/></li>
        </ul> 
    </div>
  )
}

export default Github

export const githubinfoloader = async () => {
    const response = await fetch('https://api.github.com/users/milanbhadarka')
    return await response.json()
}