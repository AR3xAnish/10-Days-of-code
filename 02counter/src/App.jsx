import { useState } from 'react'

function App() {
  let [count, setCount] = useState(0)

  const add = () =>{
    count++;
    setCount(count);
  }
  const sub = () =>{
    if(count){
      count--;
      setCount(count);
    }
    
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Count : {count}</h2>
      
      <button onClick={add}>Add</button>
      <button onClick={sub}>Sub</button>
    </>
  )
}

export default App
