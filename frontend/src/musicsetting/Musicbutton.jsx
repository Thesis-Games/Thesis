import React from "react";
import { Link } from "react-router-dom";
const Musicbutton = () => {
  return (
    <div>
      <div className="flex items-center justify-center  gap-12 absolute button-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-mono">
        <Link to="/home">
          <button
            className="bg-[#0c0c0c] w-[100px] h-[50px] font-bold 
rounded-lg text-[#ffd64e] border-[#ffd64e] border-2 hover:bg-[#575757] cursor-pointer "
          >
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Musicbutton;
