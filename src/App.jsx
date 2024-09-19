import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Everything from '../src/Component/Everything'
import Juice from '../src/Component/Juice'
import Groceries from '../src/Component/Groceries'
import About from '../src/Component/About'
import Contact from '../src/Component/Contact' 
import Shoppingcart from '../src/Component/Shoppingcart'
import Login from './Component/Login'
import Footer from './Component/Footer'
import Usecontext from './Component/Usecontext'
import Coffee from './Component/Coffee'
function App() {
  

  return (
    <>
    <Usecontext>
     <BrowserRouter>
     <Navbar></Navbar>
     <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path ="/everything" element={<Everything/>}/>
        <Route path ="/juice" element={<Juice/>}/>
        <Route path ="/Groceries" element={<Groceries/>}/>
        <Route path ="/About" element={<About/>}/>
        <Route path ="/Contact" element={<Contact/>}/>
        <Route path ="/shoppingcart" element={<Shoppingcart/>}/> s
        <Route path ="/login" element={<Login/>}/>
        <Route path ="/coffee" element ={<Coffee/>}/>
     </Routes>
     <Footer></Footer>
     </BrowserRouter>
     </Usecontext>
    </>
  )
}

export default App
