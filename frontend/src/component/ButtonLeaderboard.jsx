import React from "react";
import { Link } from "react-router-dom";
const ButtonLeaderboard = () => {
  return (
    <div>
      <Link to="/home">
        <div className="flex items-center justify-center  absolute top-[450px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-mono">
          <button className="bg-[#f3f2f2] w-[160px] h-[60px] rounded-full font-bold text-[#084747] border-black border-2 hover:bg-[#ffffff]">
            Close
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ButtonLeaderboard;
