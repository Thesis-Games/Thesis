import React from "react";
import background from "../picture/marsbg.gif";
import { Link } from "react-router-dom";

const Home = () => {
  // Zodiac signs in order
  const zodiacSigns = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

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
      <div className=" w-full gap-8 flex flex-wrap justify-center font-mono">
        {zodiacSigns.map((sign, index) => (
          <Link key={index} to="/introduction">
            <div
              className="flex items-center justify-center text-black font-bold bg-yellow-400 rounded-full w-20 h-20 hover:bg-yellow-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00e5ff]"
              style={{
                border: "3px solid black",
                boxShadow: `
                0 0 10px rgba(255, 255, 255, 0.8), 
                0 0 20px rgba(255, 255, 255, 0.6), 
                0 0 30px rgba(255, 255, 255, 0.4)
              `,
              }}
            >
              <h1 className="text-2xl">{sign}</h1>
            </div>
          </Link>
        ))}
        <div className="absolute right-5  cursor-pointer flex-wrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 15 15"
          >
            <path fill="#ffea17" d="M12 7.5L4 0v15z" stroke="#000" />
          </svg>
        </div>
      </div>

      {/* Back Button */}
      <Link to="/home/languagepick">
        <div className="absolute top-5 left-5 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 48 48"
          >
            <path
              fill="#fff10c"
              fillRule="evenodd"
              stroke="#000"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M44 40.8361C39.1069 34.8632 34.7617 31.4739 30.9644 30.6682C27.1671 29.8625 23.5517 29.7408 20.1182 30.303V41L4 23.5453L20.1182 7V17.167C26.4667 17.2172 31.8638 19.4948 36.3095 24C40.7553 28.5052 43.3187 34.1172 44 40.8361Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </Link>

      {/* Play Button */}
    </div>
  );
};

export default Home;
