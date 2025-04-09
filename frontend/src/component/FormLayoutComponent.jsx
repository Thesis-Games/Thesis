import React from "react";

export const FormLayoutComponent = ({ children }) => {
  return (
    <div>
      <div
        className="bg-[#3eff7e] rounded-lg shadow-lg w-[600px] h-[500px] flex items-center justify-center relative  border-[#ffffff]  shadow-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#00e5ff"
        style={{
          boxShadow: `
            0 0 10px rgba(255, 255, 255, 0.8), 
            0 0 20px rgba(255, 255, 255, 0.6), 
            0 0 30px rgba(255, 255, 255, 0.4)
          `,
        }}
      >
        <div className="bg-[#050505] rounded-lg shadow-lg w-[560px] h-[470px] flex items-center justify-center">
          <div className="bg-[#06dea8] rounded-lg shadow-lg w-[530px] h-[430px] p-5 flex flex-col items-center justify-center relative">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
