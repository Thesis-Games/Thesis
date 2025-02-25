import React from "react";

const LayoutGame = ({ children }) => {
  return (
    <div>
      <div
        className="bg-[#fdfa27] opacity-100 rounded-lg shadow-lg w-[850px] h-[570px]  flex items-center justify-center relative"
        style={{
          border: "10px solid black", // Adds a 10px black border
          boxShadow: `
            0 0 10px rgba(255, 255, 255, 0.8), 
            0 0 20px rgba(255, 255, 255, 0.6), 
            0 0 30px rgba(255, 255, 255, 0.4)
          `,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default LayoutGame;
