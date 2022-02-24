import React from "react";
import {BrowserRouter, Link, Route, Router, Routes} from 'react-router-dom'
import Auth from "./Layouts/Auth/Auth";
import Home from "./Layouts/Home/Home";
import Login from './Utilities/Login/Login'

function App() {
 return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/home" element={<Home />}/>
    </Routes>
  </BrowserRouter>  
 );
}

export default App;
