import React from 'react'
import {  useAppSelector } from './redux/hooks'

const MyComponent: React.FC = () => {
    const count = useAppSelector(state => state.counter)

    return (
        <h1>MyComponent is {count}</h1>
    )
}

export default MyComponent;