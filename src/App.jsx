import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import About from "./Page/About/About";
import Contact from "./Page/Contact/Contact";
import Agent from "./Page/Agent/Agent";
import Header from "./Component/Header/Header";
import Signin from "./Page/SignIn/Signin";
import SignUp from "./Page/SignUp/SignUp";
import List from "./Page/List/List";
import Details from "./Page/Details/Details";

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/about" element = {<About />}/>
          <Route path="/contact" element = {<Contact />}/>
          <Route path="/agent" element = {<Agent/>} />
          <Route path="/list" element = {<List/>} />
          <Route path="/list/details/:id" element = {<Details />} />
          <Route path="/signin" element = {<Signin />} />
          <Route path="/signup" element = {<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
