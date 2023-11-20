//import React from 'react'
//import { useNavigate } from 'react-router-dom';
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import What from './What'
import MUI from './MUI'

function App() {
    return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<What/>} />
        <Route path='/alart' element={<MUI/>}/>
        </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App