import React from "react";

const Jslayout = ({ children }) => {
  return (
    <div>
      <div
        className="bg-[#ebe81a] opacity-100 rounded-lg shadow-lg w-[800px] h-[540px]  relative"
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

export default Jslayout;
