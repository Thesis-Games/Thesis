import React from "react";

export const FormLayoutComponent = ({ children }) => {
  return (
    <div>
      <div className="bg-[#611181] rounded-lg shadow-lg w-[490px] h-[400px] flex items-center justify-center relative  border-[#ffffff]  shadow-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#00e5ff">
        <div className="bg-[#050505] rounded-lg shadow-lg w-[460px] h-[370px] flex items-center justify-center">
          <div className="bg-[#0696DE] rounded-lg shadow-lg w-[430px] h-[330px] p-5 flex flex-col items-center justify-center relative">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
