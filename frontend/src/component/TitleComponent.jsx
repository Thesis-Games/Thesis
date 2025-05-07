import React from "react";

const TitleComponent = ({ title }) => {
  return (
    <div
      className="bg-[#00B4D8] rounded-full w-[200px] h-[100px] absolute top-[-70px] left-1/2 transform -translate-x-1/2 flex items-center justify-center font-mono
          max-xl:w-[190px] max-lg:w-[180px] max-md:w-[170px] max-sm:w-[160px]
              max-lg:h-[100px] max-md:h-[90px] max-sm:h-[80px]
    "
    >
      <h1
        className="text-2xl font-bold text-[#2CF1F1] bg-black p-1 w-[190px] h-[90px] text-center flex items-center justify-center rounded-full 
      max-xl:text-xl max-lg:text-lg max-md:text-md max-sm:text-sm 
      max-xl:w-[180px] max-lg:w-[170px] max-md:w-[160px] max-sm:w-[150px]
 max-lg:h-[90px] max-md:h-[80px] max-sm:h-[70px]
      
      "
      >
        {title}
      </h1>
    </div>
  );
};

export default TitleComponent;
