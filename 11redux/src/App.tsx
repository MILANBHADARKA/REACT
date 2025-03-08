import './App.css'
import MyComponent from './MyComponent'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { increment, decrement } from './redux/slices/counter'

function App() {

  const count = useAppSelector(state => state.counter)
  const dispatch = useAppDispatch()

  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={() => dispatch(increment())} >Increment</button>
      <button onClick={() => dispatch(decrement())} >Decrement</button>

      <MyComponent />
    </>
  )
}

export default App
