
import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './component/NavBar';

function App() {
  const [state, setState] = useState("AHMED")
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log("first")
  }), [count];
  
  const increment = () => {
    setCount(state => state + 1);
  };

  const decrement = () => {
    setCount(state =>  state === 0 ? 0 : state - 1)
  }

  return (
    <div>
      <NavBar />
      <div  className='flex justify-center align-center w-[100%] h-[500px]' >
        <h1 className='text-10xl'>COUNTER</h1>
        <div className='flex flex-col items-center justify-center gap-5 text-3xl w-[200p]'>
          <p className='text-7xl'>{count}</p>
          <div className='flex gap-5 bg-black text-white'>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
