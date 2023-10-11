import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './components/Home';
import Explore from './components/Explore';
import Search from './components/Search';
import About from './components/AboutUs';
import Book from './components/BookNow';
import Register from './components/Register';
import Contact from './components/Contactus';
import FAQ from './components/FAQ';

const App = () => {
  return (
    <BrowserRouter>
     
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Explore" element={<Explore/>} />
        <Route path="/Search" element={<Search/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/book" element={<Book/>} />
        <Route path="/register"element={<Register/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/faq"element={<FAQ/>} />
      </Routes>
      </BrowserRouter>
  );
};

export default App;

