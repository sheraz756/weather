import React from 'react'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UseEffect from './components/UseEffect/UseEffect'

const App = () => {
  return (
   <>  
   <BrowserRouter>
   
   <Routes>
    <Route path="/home" element={<Navbar />}></Route>
    <Route path="/render" element={<UseEffect />}></Route>
   </Routes>
   </BrowserRouter>
   </>

  
  )
}

export default App