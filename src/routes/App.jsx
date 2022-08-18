import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyAccount from "../pages/MyAccount";
import Home from '../pages/Home';
//import { BrowserRouter, Routes, Redirect, Switch,Link, Route } from 'react-router-dom';
const App = () => {
 
  return(
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/MyAccount" element={<MyAccount />} />
      <Route path="*" element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
};

export default App;