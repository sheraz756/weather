import React from 'react'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UseEffect from './components/UseEffect/UseEffect'
import Home from './components/Home/Home'
import Room from './components/Home/Room/Room'
import Login from './components/Login/Login'
import Singup from './components/Singup/Singup'

const App = () => {
  return (
   <>  
   <BrowserRouter>
   
   <Routes>
    <Route path="/" element={<Login />}></Route>
    <Route path="/Singup" element={<Singup />}></Route>
   </Routes>
   </BrowserRouter>
   </>

  
  )
}

export default App