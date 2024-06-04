import React from "react";
import { listData } from "../../Lib/data";
import { FaLocationDot } from "react-icons/fa6";
import bathroom from "../../../public/bath.png";
import bedroom from "../../../public/bed.png";
import chat from "../../../public/chat.png";
import save from "../../../public/save.png";
import location from "../../../public/pin.png";
import { Link } from "react-router-dom";

function ListProduct() {
  return (
    <div>
      {listData.map((data, index) => (
        <div key={index} className="py-7 flex items-start justify-start">
          <div className="w-[40%] h-[220px] rounded-lg overflow-hidden">
            <img className="w-full h-full object-cover" src={data.img} alt="" />
          </div>
          <div className="w-[60%] h-[220px] pl-5 flex items-start justify-between flex-col">
          <Link to={`/list/details/${data.id}`}><h1 className="text-[20px] font-semibold">{data.title}</h1></Link>
            <div className="flex items-center justify-start gap-2">
                <img className="w-5" src={location} alt="" />
              <h1 className="py-3" >{data.address}</h1>
            </div>
            <div className="px-4 py-2 bg-yellow-200 rounded-sm">
              <h1>${data.price}</h1>
            </div>
            <div className="flex items-end justify-between w-full">
              <div className="flex items-center justify-between gap-2 px-4 py-2 bg-gray-100 rounded-sm">
                <img className="w-5" src={bathroom} alt="" />
                <h1>{data.bathroom} Bathroom</h1>
              </div>
              <div className="flex items-end justify-between gap-10">
                <div className="flex items-center justify-between gap-2 px-4 py-2 bg-gray-100 rounded-sm">
                  <img className="w-5" src={bedroom} alt="" />
                  <h1>{data.bedroom} Bedroom</h1>
                </div>
                <div className="flex items-center justify-between flex-col gap-4">
                  <img className="w-5 cursor-pointer" src={chat} alt="" />
                  <img className="w-5 cursor-pointer" src={save} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      ))}
    </div>
  );
}

export default ListProduct;
