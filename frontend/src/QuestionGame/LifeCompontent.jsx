import React from "react";
import life from "../picture/life.png";
export const LifeCompontent = () => {
  return (
    <div>
      <div className="absolute flex justify-center items-center top-5 left-6 gap-2">
        <div className="">
          <img src={life} className="w-[30px]" />
        </div>
        <div className="">
          <p className="font-bold text-4xl font-mono ">3</p>
        </div>
      </div>
    </div>
  );
};
