import React from "react";
import background from "../picture/spacebg.gif";
import { Link } from "react-router-dom";
import LogoutHook from "../hook/logout-hook";
const Homegame = () => {
  const { logout } = LogoutHook();
  return (
    <div
      className="w-full min-h-screen relative flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-white flex justify-center items-center flex-col font-mono">
        <div
          className="font-bold text-9xl tracking-wide border-black 
        max-xl:text-9xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl drop-shadow-[0_0_10px_rgba(0,229,255,0.7)] "
        >
          <h1>
            <span style={{ color: "yellow" }}>T</span>ECHTALES
          </h1>
        </div>

        {/* START BUTTON */}
        <div className="flex justify-center items-center mt-10">
          <Link to="/home/languagepick">
            <div
              className="flex items-center justify-center bg-[#1792f7] font-bold text-black text-xl hover:bg-[#44abff] hover:scale-110 transition-transform duration-300 rounded-full w-[200px] h-[70px] p-5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00e5ff] drop-shadow-[0_0_10px_rgba(0,229,255,0.7)]
                  max-xl:w-[200px] max-lg:w-[180px] max-md:w-[160px] max-sm:w-[140px]
              max-xl:h-[70px] max-lg:h-[60px] max-md:h-[50px] max-sm:h-[40px]
               max-xl:text-xl max-lg:text-lg max-md:text-md max-sm:text-sm"
              style={{
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

        {/* LEADERBOARDS BUTTON */}
        <div className="flex justify-center items-center mt-10">
          <Link to="/leaderboard">
            <div
              className="flex items-center justify-center bg-[#1792f7] font-bold text-black text-xl hover:bg-[#44abff] hover:scale-110 transition-transform duration-300 rounded-full w-[200px] h-[70px] p-5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00e5ff] drop-shadow-[0_0_10px_rgba(0,229,255,0.7)]
              
              max-xl:w-[200px] max-lg:w-[180px] max-md:w-[160px] max-sm:w-[140px]
              max-xl:h-[70px] max-lg:h-[60px] max-md:h-[50px] max-sm:h-[40px]
               max-xl:text-xl max-lg:text-lg max-md:text-md max-sm:text-sm"
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
        <div className="flex justify-center items-center mt-10">
          <Link to="/lesson">
            <div
              className="flex items-center justify-center bg-[#1792f7] font-bold text-black text-xl hover:bg-[#44abff] hover:scale-110 transition-transform duration-300 rounded-full w-[200px] h-[70px] p-5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00e5ff] drop-shadow-[0_0_10px_rgba(0,229,255,0.7)]"
              style={{
                boxShadow: `
                  0 0 10px rgba(255, 255, 255, 0.8), 
                  0 0 20px rgba(255, 255, 255, 0.6), 
                  0 0 30px rgba(255, 255, 255, 0.4)
                `,
              }}
            >
              LESSON
            </div>
          </Link>
        </div>

        <div className="flex justify-center items-center mt-10">
          <Link to="/settings">
            <div
              className="flex items-center justify-center bg-[#1792f7] font-bold text-black text-xl hover:bg-[#44abff] hover:scale-110 transition-transform duration-300 rounded-full w-[200px] h-[70px] p-5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00e5ff] drop-shadow-[0_0_10px_rgba(0,229,255,0.7)]
                max-xl:w-[200px] max-lg:w-[180px] max-md:w-[160px] max-sm:w-[140px]
              max-xl:h-[70px] max-lg:h-[60px] max-md:h-[50px] max-sm:h-[40px]
               max-xl:text-xl max-lg:text-lg max-md:text-md max-sm:text-sm"
              style={{
                boxShadow: `
                  0 0 10px rgba(255, 255, 255, 0.8), 
                  0 0 20px rgba(255, 255, 255, 0.6), 
                  0 0 30px rgba(255, 255, 255, 0.4)
                `,
              }}
            >
              SETTINGS
            </div>
          </Link>
        </div>

        {/* LOGOUT BUTTON */}
        <div className="flex justify-center items-center mt-10">
          <div
            onClick={logout}
            className="flex items-center justify-center bg-[#1792f7] font-bold text-black text-xl hover:bg-[#44abff] hover:scale-110 transition-transform duration-300 rounded-full w-[200px] h-[70px] p-5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00e5ff] drop-shadow-[0_0_10px_rgba(0,229,255,0.7)]
              max-xl:w-[200px] max-lg:w-[180px] max-md:w-[160px] max-sm:w-[140px]
              max-xl:h-[70px] max-lg:h-[60px] max-md:h-[50px] max-sm:h-[40px]
              max-xl:text-xl max-lg:text-lg max-md:text-md max-sm:text-sm"
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
      </div>
    </div>
  );
};

export default Homegame;
