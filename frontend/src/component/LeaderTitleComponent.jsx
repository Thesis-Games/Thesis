import React from "react";

const LeaderTitleComponent = ({ title }) => {
  return (
    <div className="bg-[#00B4D8] rounded-lg w-[220px] h-[80px] absolute top-[-50px] left-1/2 transform -translate-x-1/2 flex items-center justify-center font-mono">
      <h1 className="text-2xl font-bold text-[#2CF1F1] bg-black p-1 w-[210px] h-[70px] text-center flex items-center justify-center rounded-lg">
        {title}
      </h1>
    </div>
  );
};

export default LeaderTitleComponent;
