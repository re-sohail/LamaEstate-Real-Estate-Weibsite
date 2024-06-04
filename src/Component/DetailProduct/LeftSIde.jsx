import React from "react";
import "../../index.css";
import LeftDetailImages from "../LeftDetailImages/LeftDetailImages";
import { singlePostData } from "../../Lib/data";
import { userData } from "../../Lib/data";
import location from "../../../public/pin.png";

function LeftSIde() {
  return (
    <div className="w-[65%] h-heroHeight pr-14">
      <div>
        <LeftDetailImages />

        <div className="flex items-start justify-between w-full py-5">
          <div>
            <h1 className="text-3xl font-medium">{singlePostData.title}</h1>
            <div className="flex items-center justify-start gap-2 py-3">
              <img className="w-[20px]" src={location} alt="" />
              <h1 className="text-[16px]">{singlePostData.address}, {singlePostData.city}</h1>
            </div>
            <div className="bg-yellow-200 w-24 h-14 flex items-center justify-center mt-4 rounded-sm">
              <h1>$ {singlePostData.price}</h1>
            </div>
          </div>
          <div className="bg-yellow-100 w-[200px] h-[130px] flex items-center justify-center flex-col gap-2 mt-4 rounded-md">
            <img
              className="w-[60px] h-[60px] object-cover rounded-full"
              src={userData.img}
              alt=""
            />
            <h1>{userData.name}</h1>
          </div>
        </div>
        <div>
          <p className="text-[14px]">{singlePostData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default LeftSIde;
