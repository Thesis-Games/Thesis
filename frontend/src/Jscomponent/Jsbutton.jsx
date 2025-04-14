import React from "react";

const Jsbutton = ({ handleCorrectAnswer, handleExit }) => {
  return (
    <div>
      <div className="flex items-center justify-center gap-12 absolute button-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-mono">
        <button
          className="bg-[#0c0c0c] w-[200px] h-[70px] rounded-full font-bold text-[#00B4D8] border-[#00B4D8] border-2 hover:bg-[#575757]"
          onClick={handleExit}
        >
          Exit
        </button>

        <button
          className="bg-[#111111]  w-[200px] h-[70px]  rounded-full font-bold text-[#00B4D8] border-[#00B4D8]  border-2 hover:bg-[#575757]"
          onClick={handleCorrectAnswer}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Jsbutton;
