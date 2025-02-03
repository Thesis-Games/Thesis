import React from "react";

const TitleHTML = ({ title }) => {
  return (
    <div className="bg-[#00B4D8] rounded-lg w-[320px] h-[90px] absolute top-[-50px] left-1/2 transform -translate-x-1/2 flex items-center justify-center font-mono">
      <h1 className="text-3xl font-bold text-[#2CF1F1] bg-black p-1 w-[310px] h-[80px] text-center flex items-center justify-center rounded-lg">
        {title}
      </h1>
    </div>
  );
};

export default TitleHTML;
