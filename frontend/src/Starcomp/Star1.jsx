import React from "react";
import background from "../picture/starbg.gif";
import ribbon from "../picture/ribbon.png";
import star from "../picture/star.png";
import { Bgcomponent } from "./Bgcomponent";
import Btncomp from "../Starcomp/Btncomp";
import blackstar from "../picture/blackstar.png";

const Star1 = () => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Bgcomponent>
        {/* Ribbon and text */}
        <div className="absolute top-[-130px] left-1/2 transform -translate-x-1/2">
          <img
            src={ribbon}
            alt="Ribbon"
            className="w-[455px] h-auto max-w-none"
          />
          <svg
            width="450"
            height="150"
            className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <path
              id="curve"
              d="M30,110 Q225,20 420,110"
              fill="transparent"
              stroke="transparent"
            />
            <text fontSize="50" fontWeight="bold" fill="#000">
              <textPath href="#curve" startOffset="50%" textAnchor="middle">
                Victory
              </textPath>
            </text>
          </svg>
        </div>

        {/* Stars Container */}
        <div className="absolute flex items-center top-14 gap-1 mt-5">
          <div className="">
            <img
              src={star}
              alt="Star"
              className="h-[50px] w-[50px] relative top-1"
            />
          </div>
          <div className="">
            <img
              src={blackstar}
              alt="Star"
              className="h-[100px] w-[100px] relative -top-6"
            />
          </div>
          <div className="">
            <img
              src={blackstar}
              alt="Star"
              className="h-[50px] w-[50px]  relative top-1"
            />
          </div>
        </div>

        <div className="text-[#fffc39] w-[300px] h-[150px] mt-20 font-mono  text-center tracking-wide font-bold flex flex-col items-center justify-center  shadow-lg p-4">
          <div className="">
            <h1 className="text-2xl">SCORE</h1>
          </div>
          <div className="mt-2 ">
            <h1 className="text-7xl">1000</h1>
          </div>
        </div>
      </Bgcomponent>
      <Btncomp></Btncomp>
    </div>
  );
};

export default Star1;
