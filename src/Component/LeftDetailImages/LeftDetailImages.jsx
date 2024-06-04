import React from "react";
import { singlePostData } from "../../Lib/data";

function LeftDetailImages() {
  return (
    <div className="flex items-start justify-between pt-4">
      <img className="w-[580px] h-[350px] object-cover rounded-md" src={singlePostData.images[0]} alt="" />
      <div className="flex items-start justify-center flex-col gap-2">
        <img className="w-[200px] h-[110px] object-cover rounded-md" src={singlePostData.images[1]} alt="" />
        <img className="w-[200px] h-[110px] object-cover rounded-md" src={singlePostData.images[2]} alt="" />
        <img className="w-[200px] h-[110px] object-cover rounded-md" src={singlePostData.images[3]} alt="" />
      </div>
    </div>
  );
}

export default LeftDetailImages;
