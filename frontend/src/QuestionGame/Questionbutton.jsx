import React from "react";
import { Link } from "react-router-dom";

const Questionbutton = ({ handleCorrectAnswer, handleExit }) => {
  return (
    <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex gap-4">
      <button
        className="bg-[#0c0c0c] w-[160px] h-[60px] rounded-full font-bold text-[#00B4D8] border-[#00B4D8] border-2 hover:bg-[#575757]"
        onClick={handleExit}
      >
        Exit
      </button>
      <button
        className="bg-[#111111] w-[160px] h-[60px] rounded-full font-bold text-[#00B4D8] border-[#00B4D8]  border-2 hover:bg-[#575757]"
        onClick={handleCorrectAnswer}
      >
        Submit
      </button>
    </div>
  );
};

export default Questionbutton;
