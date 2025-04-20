import { useState } from 'react'
function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <div className="h-screen w-full duration-200" style={{backgroundColor: color}}>
          <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
              <button onClick={() => setColor("red")} className='outline-none rounded-full bg-red-500 text-white shadow-lg px-4 py-2'>Red</button>
              <button onClick={() => setColor("green")} className='outline-none rounded-full bg-green-500 text-white shadow-lg px-4 py-2'>green</button>
              <button onClick={() => setColor("yellow")} className='outline-none rounded-full bg-yellow-500 text-white shadow-lg px-4 py-2'>yellow</button>
              <button onClick={() => setColor("blue")} className='outline-none rounded-full bg-blue-500 text-white shadow-lg px-4 py-2'>blue</button>
              <button onClick={() => setColor("orange")} className='outline-none rounded-full bg-orange-500 text-white shadow-lg px-4 py-2'>orange</button>
            </div>
          </div>
      </div>    
    </>
  )
}

export default App
