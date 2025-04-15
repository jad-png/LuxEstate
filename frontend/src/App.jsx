import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="bg-red-500 text-white p-4 border-2 border-red-700 rounded-lg w-1/2 mx-auto flex justify-center">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more 
      </p>
    </>
  )
}

export default App