import React from "react";
import { Link } from "react-router-dom";

const Questionbutton = () => {
  return (
    <div className="flex items-center justify-center gap-10 absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-mono">
      <button className="bg-[#0c0c0c] w-[160px] h-[60px] rounded-full font-bold text-[#00B4D8] border-[#00B4D8] border-2 hover:bg-[#575757]">
        Exit
      </button>
      <button className="bg-[#111111] w-[160px] h-[60px] rounded-full font-bold text-[#00B4D8] border-[#00B4D8]  border-2 hover:bg-[#575757]">
        Submit
      </button>
    </div>
  );
};

export default Questionbutton;
