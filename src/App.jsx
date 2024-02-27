import { useState } from 'react'
import './App.css'
import LuigiComponent from './LuigiComponent';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LuigiComponent></LuigiComponent>
    </>
  )
}

export default App
