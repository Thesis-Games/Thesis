import React from "react";
import { Link } from "react-router-dom";
const Btncomp = () => {
  return (
    <div>
      <div className="flex items-center justify-center  gap-12 absolute button-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-mono">
        <button
          className="bg-[#0c0c0c] w-[100px] h-[50px] font-bold 
rounded-lg text-[#ffd64e] border-[#ffd64e] border-2 hover:bg-[#575757] hover:scale-110 transition-transform duration-300 cursor-pointer "
        >
          HOME
        </button>

        <button
          className="bg-[#0c0c0c] w-[100px] h-[50px] font-bold 
           rounded-lg text-[#ffd64e] border-[#ffd64e] border-2 hover:bg-[#575757] hover:scale-110 transition-transform duration-300 cursor-pointer "
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Btncomp;
