import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../public/logo.png";

function Header() {
  let locatoin = useLocation();
  let [active, setActive] = useState(location.pathname.replace('/', '') || 'home');
  
  useEffect(()=>{
    let currentPath = location.pathname.replace('/', '')
    setActive(currentPath || 'home')
  })
  return (
    <div className="w-[1300px] h-[100px] mx-auto flex items-center justify-between">
      <div className="flex items-center justify-between gap-24 w-[60%]">
        <Link to={'/'}><div className="flex items-center justify-start gap-2">
          <img className="w-[40px]" src={Logo} alt="" />
          <h1 className="text-3xl font-bold pt-3">LamaEstate</h1>
          
        </div></Link>
        <div className="flex items-center justify-center gap-7">
          <Link to={'/'}><h1 onClick={()=>{setActive('home')}}>Home {active  == 'home' ? <hr className="border-b-[2px] transition-all ease-linear duration-1000 border-[#000000bc]"/> : ''}</h1></Link>
          <Link to={'/about'}><h1 onClick={()=>{setActive('about')}}>About {active == 'about' ? <hr className="border-b-[2px] transition-all ease-linear duration-1000 border-[#000000bc]"/> : ''}</h1></Link>
          <Link to={'/contact'}><h1 onClick={()=>{setActive('contact')}}>Contact {active == 'contact' ? <hr className="border-b-[2px] transition-all ease-linear duration-1000 border-[#000000bc]"/> : ''}</h1></Link>
          <Link to={'/agent'}><h1 onClick={()=>{setActive('agent')}}>Agent {active == 'agent' ? <hr className="border-b-[2px] transition-all ease-linear duration-1000 border-[#000000bc]"/> : ''}</h1></Link>
        </div>
      </div>
      <div className="flex items-center justify-end gap-10 w-[35%] h-full pr-4 bg-[#FCF6F3]">
        <Link to={'/signin'}><h1 onClick={()=>{setActive('signin')}}>Sign in</h1></Link>
        <Link to={'/signup'}><h1 onClick={()=>{setActive('signup')}} className="bg-yellow-500 rounded-md py-3 px-6">Sign up</h1></Link>
      </div>
    </div>
  );
}

export default Header;
