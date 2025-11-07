import { useState } from 'react'
import './App.css'

function App() {
  const [curCount,setCount]=useState(15);
  
  function increaseValueHandler(){
    setCount(curCount+1)
  }

  function decreaseValueHandler(){
    if(curCount>0){
      setCount(curCount-1)
    }
    
  }
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {curCount}</h2>
    <button onClick={increaseValueHandler}>Increase value</button>
    <button onClick={decreaseValueHandler}>Decrease value</button>
    </>
  )
}

export default App
