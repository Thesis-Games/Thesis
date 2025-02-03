import React from "react";

const TitleComponent = ({ title }) => {
  return (
    <div className="bg-[#00B4D8] rounded-full w-[200px] h-[100px] absolute top-[-70px] left-1/2 transform -translate-x-1/2 flex items-center justify-center font-mono">
      <h1 className="text-2xl font-bold text-[#2CF1F1] bg-black p-1 w-[190px] h-[90px] text-center flex items-center justify-center rounded-full">
        {title}
      </h1>
    </div>
  );
};

export default TitleComponent;
