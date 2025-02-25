import React from "react";
import { Link } from "react-router-dom";

const Cssbutton = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-12 absolute button-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-mono">
        <Link to="/languagepick/start">
          <button className="bg-[#0c0c0c] w-[200px] h-[70px] rounded-full font-bold text-[#00B4D8] border-[#00B4D8] border-2 hover:bg-[#575757]">
            Exit
          </button>
        </Link>
        <Link to="/game">
          <button className="bg-[#111111]  w-[200px] h-[70px]  rounded-full font-bold text-[#00B4D8] border-[#00B4D8]  border-2 hover:bg-[#575757]">
            Game
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cssbutton;
