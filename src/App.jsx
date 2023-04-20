import { useState } from 'react'

import './App.css'
import HomePage from './components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>
      Please, insert your credicard
        
    </h1>

   <HomePage />
   </>
  )
  
}

export default App
