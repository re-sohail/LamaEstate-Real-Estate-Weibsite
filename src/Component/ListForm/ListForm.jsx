import React from "react";
import "../../index.css";
import { FiSearch } from "react-icons/fi";
import ListProduct from "../../Component/ListProduct/ListProduct";
import Map from "../Map/Map";


function ListForm() {
  return (
    <div className="w-[1300px] h-heroHeight mx-auto flex items-start justify-between">
      <div className="overflow-scroll h-full w-[65%] hide-scrollbar pr-16">
        <h1 className="text-2xl py-5">
          Search Result for <span className="font-bold">London</span>
        </h1>
        <div className="w-full flex items-start justify-center flex-col mb-4">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            placeholder="City Location"
            defaultValue="London"
            className="w-full h-12 px-4 border-2 border-gray-400 rounded-[3px] mt-2 outline-black"
          />
        </div>
        <div className="w-full pb-10">
          <div className="grid grid-cols-8 gap-24">
            <div className="col-span-2 flex items-start justify-center flex-col">
              <label htmlFor="Type">Type</label>
              <input
                type="text"
                placeholder="Buy"
                defaultValue="Buy"
                className="h-12 px-4 border-2 border-gray-400 rounded-[3px] mt-2 outline-black"
              />
            </div>
            <div className="col-span-2 flex items-start justify-center flex-col">
              <label htmlFor="miniPrice">Mini Price</label>
              <input
                type="text"
                placeholder="Mini Price"
                defaultValue="500 $"
                className="h-12 px-4 border-2 border-gray-400 rounded-[3px] mt-2 outline-black"
              />
            </div>
            <div className="col-span-2 flex items-start justify-center flex-col">
              <label htmlFor="maxPrice">Max Price</label>
              <input
                type="text"
                placeholder="Max Price"
                defaultValue="2000 $"
                className="h-12 px-4 border-2 border-gray-400 rounded-[3px] mt-2 outline-black"
              />
            </div>
            <div className="col-span-2 flex items-end justify-center">
              <button className="h-12 w-[100px] rounded-lg bg-yellow-400 flex items-center justify-center mt-7">
                <FiSearch className="text-xl" />
              </button>
            </div>
          </div>
        </div>
        <ListProduct />
      </div>
      <div className="w-[35%] h-full bg-[#FCF6F3]">
        <Map />
      </div>
    </div>
  );
}

export default ListForm;
