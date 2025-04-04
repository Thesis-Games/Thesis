import React from "react";
import { Link } from "react-router-dom";
const ButtonLeaderboard = () => {
  return (
    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
      <Link to="/home">
        <button className="bg-[#f3f2f2] w-[160px] h-[60px] rounded-full font-bold text-[#084747] border-black border-2 hover:bg-[#ffffff]">
          Close
        </button>
      </Link>
    </div>
  );
};

export default ButtonLeaderboard;
