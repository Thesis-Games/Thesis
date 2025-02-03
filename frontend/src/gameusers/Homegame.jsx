import React from "react";
import background from "../picture/background.png";
import { Link } from "react-router-dom";
const Homegame = () => {
  return (
    <div
      className="w-full h-screen relative flex items-center justify-center flex-col"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-white flex justify-center items-center flex-col font-mono">
        <div className="font-bold text-9xl tracking-wide border-black  ">
          <h1>
            <span style={{ color: "yellow" }}>T</span>ECHTALES
          </h1>
        </div>
        <div className="flex justify-center items-center mt-10">
          {/* Centered Start Button */}
          <Link to="/home/start">
            <div
              className="flex items-center justify-center bg-[#1792f7] font-bold text-black text-xl hover:bg-[#44abff] rounded-full w-[200px] h-[70px] p-5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00e5ff]"
              style={{
                border: "",
                boxShadow: `
                0 0 10px rgba(255, 255, 255, 0.8), 
                0 0 20px rgba(255, 255, 255, 0.6), 
                0 0 30px rgba(255, 255, 255, 0.4)
              `,
              }}
            >
              START
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center mt-5">
          {/* Centered Start Button */}
          <Link to="/leaderboard">
            <div
              className="flex items-center justify-center bg-[#1792f7] font-bold text-black text-xl hover:bg-[#44abff] rounded-full w-[200px] h-[70px] p-5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00e5ff]"
              style={{
                boxShadow: `
                0 0 10px rgba(255, 255, 255, 0.8), 
                0 0 20px rgba(255, 255, 255, 0.6), 
                0 0 30px rgba(255, 255, 255, 0.4)
              `,
              }}
            >
              LEADERBOARDS
            </div>
          </Link>
        </div>
        <Link to="/Signin">
          <div className="flex justify-center items-center mt-5">
            <div
              className="flex items-center justify-center bg-[#1792f7] font-bold text-black text-xl hover:bg-[#44abff] rounded-full w-[200px] h-[70px] p-5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00e5ff]"
              style={{
                boxShadow: `
                0 0 10px rgba(255, 255, 255, 0.8), 
                0 0 20px rgba(255, 255, 255, 0.6), 
                0 0 30px rgba(255, 255, 255, 0.4)
              `,
              }}
            >
              LOG OUT
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Homegame;
