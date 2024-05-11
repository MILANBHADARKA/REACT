import React, { useContext} from 'react'
import { CounterContext } from '../context/context'

function Component1() {

  const value = useContext(CounterContext)  //here we are using the useContext hook to get the value of the context

  return (
    <div>
      {value.count}
    </div>
  )
}

export default Component1