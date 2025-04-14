import React from "react";

const MusicLayout = ({ children }) => {
  return (
    <div className="relative flex items-center justify-center">
      <div
        className="bg-[#3eff7e] rounded-lg shadow-lg w-[550px] h-[250px] flex items-center justify-center relative"
        style={{
          boxShadow: `
              0 0 10px rgba(255, 255, 255, 0.8), 
              0 0 20px rgba(255, 255, 255, 0.6), 
              0 0 30px rgba(255, 255, 255, 0.4)
              `,
        }}
      >
        {/* Sobrang laki ng Ribbon, pero nasa tamang position */}

        <div className="bg-[#050505] rounded-lg shadow-lg w-[525px] h-[225px] flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};
export default MusicLayout;
