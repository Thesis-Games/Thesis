import React from "react";

export const Bgcomponent = ({ children }) => {
  return (
    <div className="relative flex items-center justify-center">
      <div
        className="bg-[#FD700A] rounded-lg shadow-lg w-[350px] h-[400px] flex items-center justify-center relative"
        style={{
          boxShadow: `
          0 0 10px rgba(255, 255, 255, 0.8), 
          0 0 20px rgba(255, 255, 255, 0.6), 
          0 0 30px rgba(255, 255, 255, 0.4)
          `,
        }}
      >
        {/* Sobrang laki ng Ribbon, pero nasa tamang position */}

        <div className="bg-[#050505] rounded-lg shadow-lg w-[325px] h-[380px] flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Bgcomponent;
