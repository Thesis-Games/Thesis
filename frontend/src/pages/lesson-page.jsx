import React from "react";
import background from "../picture/spacebg.gif";
import { Link } from "react-router-dom";

const Lessonpage = () => {
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
        <div className="flex justify-center items-center mt-10">
          <div
            className="flex items-center justify-center bg-[#1792f7] font-bold text-black text-xl hover:bg-[#44abff] hover:scale-110 transition-transform duration-300 rounded-full w-[200px] h-[70px] p-5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00e5ff]"
            style={{
              boxShadow: `
              0 0 10px rgba(255, 255, 255, 0.8), 
              0 0 20px rgba(255, 255, 255, 0.6), 
              0 0 30px rgba(255, 255, 255, 0.4)
            `,
            }}
          >
            HTML
          </div>
        </div>

        <div className="flex justify-center items-center mt-10">
          <div
            className="flex items-center justify-center bg-[#1792f7] font-bold text-black text-xl hover:bg-[#44abff] hover:scale-110 transition-transform duration-300 rounded-full w-[200px] h-[70px] p-5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00e5ff]"
            style={{
              boxShadow: `
              0 0 10px rgba(255, 255, 255, 0.8), 
              0 0 20px rgba(255, 255, 255, 0.6), 
              0 0 30px rgba(255, 255, 255, 0.4)
            `,
            }}
          >
            CSS
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <div
            className="flex items-center justify-center bg-[#1792f7] font-bold text-black text-xl hover:bg-[#44abff] hover:scale-110 transition-transform duration-300 rounded-full w-[200px] h-[70px] p-5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00e5ff]"
            style={{
              boxShadow: `
              0 0 10px rgba(255, 255, 255, 0.8), 
              0 0 20px rgba(255, 255, 255, 0.6), 
              0 0 30px rgba(255, 255, 255, 0.4)
            `,
            }}
          >
            JAVASCRIPT
          </div>
        </div>
      </div>

      <div className="absolute top-10 left-10 cursor-pointer">
        <Link to="/home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 48 48"
          >
            <path
              fill="#fff10c"
              fill-rule="evenodd"
              stroke="#000"
              stroke-linejoin="round"
              stroke-width="4"
              d="M44 40.8361C39.1069 34.8632 34.7617 31.4739 30.9644 30.6682C27.1671 29.8625 23.5517 29.7408 20.1182 30.303V41L4 23.5453L20.1182 7V17.167C26.4667 17.2172 31.8638 19.4948 36.3095 24C40.7553 28.5052 43.3187 34.1172 44 40.8361Z"
              clip-rule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Lessonpage;
