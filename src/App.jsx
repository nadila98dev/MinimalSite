import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Register from './pages/Register';




function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/membership' element={<Membership />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/shop/:id" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
