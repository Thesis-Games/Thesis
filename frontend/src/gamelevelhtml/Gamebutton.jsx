import React from "react";
import { Link } from "react-router-dom";

const Gamebutton = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-12 absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-mono">
        <Link to="/languagepick/start">
          <button className="bg-[#0c0c0c] w-[160px] h-[60px] rounded-full font-bold text-[#00B4D8] border-[#00B4D8] border-2 hover:bg-[#575757]">
            Exit
          </button>
        </Link>
        <Link to="/game">
          <button className="bg-[#111111] w-[160px] h-[60px] rounded-full font-bold text-[#00B4D8] border-[#00B4D8]  border-2 hover:bg-[#575757]">
            Game
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Gamebutton;
