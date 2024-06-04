import React, { useState } from "react";
import "../../index.css";
import HeroBG from "../../../public/bg.png";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom"

let type = ["Buy", "Rent"];

function Hero() {
  let [query, setQuery] = useState({
    type: 'Buy',
    location: '',
    minPrice: '0',
    maxPrice: '0',
  })
  
  let history = useNavigate()

 let switchType = (val)=>{
    setQuery((prev)=>({ ...prev, type: val }))
 }
 let onSubmit = (e)=>{
  e.preventDefault()

  history('/list')
 }

  return (
    <div className="w-[1300px] h-heroHeight overflow-hidden mx-auto flex items-center justify-between">
      <div className="w-[65%] h-full flex items-start justify-end flex-col px-10">
        <h1 className="text-6xl font-semibold pb-5">
          Find Real Estate & Get Your Dream Place
        </h1>
        <p className="text-base ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          repudiandae repellendus debitis enim nihil, velit aut vero optio
          beatae iure, doloremque cupiditate.
        </p>
        <div className="flex items-center justify-center pt-5">
          {type.map((type) => {
            return (
              <button key={type} onClick={()=> switchType(type)} className={query.type === type ? "border border-black bg-black text-white py-3 px-10" : 'border border-black py-3 px-10'}>{type}</button>
            );
          })}
        </div>
        <div className="w-full h-[60px]">
          <form onSubmit={onSubmit} className="w-full h-full border border-black flex items-center justify-center">
            <input
              type="text"
              placeholder="City Location"
              className="w-[30%] h-full px-3 outline-black"
            />
            <input
              type="text"
              placeholder="Min Price"
              className="w-[30%] h-full px-3 outline-black"
            />
            <input
              type="number"
              placeholder="Max Price"
              className="w-[30%] h-full px-3 outline-black"
            />
            <button className="w-[10%] h-full bg-yellow-400 flex items-center justify-center">
              <FiSearch className="text-xl" />
            </button>
          </form>
        </div>
        <div className="pt-14 pb-8 flex items-center justify-between w-full">
          <div className="flex items-start justify-center flex-col">
            <h1 className="text-5xl">16+</h1>
            <h1 className="text-base">Years of Experience</h1>
          </div>
          <div className="flex items-start justify-center flex-col">
            <h1 className="text-5xl">200</h1>
            <h1 className="text-base">Awards Gained</h1>
          </div>
          <div className="flex items-start justify-center flex-col">
            <h1 className="text-5xl">1200+</h1>
            <h1 className="text-base">Property Ready</h1>
          </div>
        </div>
      </div>
      <div className="w-[35%] h-full bg-[#FCF6F3]">
        <img
          className="w-[500px] absolute right-[70px] top-1/4"
          src={HeroBG}
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
