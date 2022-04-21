import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


   

  return (
    <div className="App font-mono">
      <h1 className="text-4xl text-green-700 text-center float-left font-semibold select-none ">Hello Tailwind</h1>
    </div>
  )
}

export default App
