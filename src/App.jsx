import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import './App.css'
import LuigiComponent from './LuigiComponent';
import Welcome from './welcome';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LuigiComponent />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
