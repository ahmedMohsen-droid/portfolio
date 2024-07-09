import React from "react";
import './index.css'
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <Navbar />
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
     <Footer/>
    </>
  );
}

export default App;
