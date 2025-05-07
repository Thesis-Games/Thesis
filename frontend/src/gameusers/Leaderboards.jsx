import React from "react";
import background from "../picture/starbg.gif";
import LeaderTitleComponent from "../component/LeaderTitleComponent";
import ButtonLeaderboard from "../component/ButtonLeaderboard";
import { Link } from "react-router-dom";
import LeaderBoardHook from "../hook/leader-board-hook";
const Leaderboards = () => {
  const { leaderBoardData } = LeaderBoardHook();
  return (
    <div
      className="w-full h-screen relative flex items-center justify-center flex-col font-mono "
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="bg-yellow-300 p-6 rounded-lg relative max-w-lg w-full border-[#ffffff] shadow-lg shadow-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#00e5ff  px-12 py-12"
        style={{
          border: "10px solid black", // Adds a 10px black border
          boxShadow: `
          0 0 10px rgba(255, 255, 255, 0.8), 
          0 0 20px rgba(255, 255, 255, 0.6), 
          0 0 30px rgba(255, 255, 255, 0.4)
        `,
        }}
      >
        <LeaderTitleComponent title={"LEADERBOARDS"} />

        <div
          className="mt-5 overflow-y-auto bg-[#ffdfba] p-4 rounded-lg border-[#0e0e0e]  border-2 shadow-lg "
          style={{
            maxHeight: "50vh", // Limit height to prevent overflow
          }}
        >
          {leaderBoardData.map((entry, index) => (
            <div
              key={index}
              className="bg-black rounded-full py-2 px-3 mb-3 grid grid-cols-3 items-center border-[#ffffff]  shadow-lg shadow-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#00e5ff"
              style={{
                gridTemplateColumns: "50px 1fr 80px", // Fixed width for rank and points, flexible for name
              }}
            >
              {/* Rank */}
              <div className="text-white font-bold text-center">
                {index + 1}.
              </div>

              {/* Name */}
              <div className="text-white font-bold truncate">
                {entry.username}
              </div>

              {/* Star and Points */}
              <div className="flex items-center justify-end gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#f0d500"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
                <p className="text-white font-bold">{entry.points}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Close Button */}
        <ButtonLeaderboard />
      </div>
    </div>
  );
};

export default Leaderboards;
