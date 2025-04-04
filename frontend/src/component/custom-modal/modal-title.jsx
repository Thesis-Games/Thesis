import React from "react";

const ModalTitle = ({ title }) => (
  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black font-bold text-lg px-6 py-1 rounded-full border-4 border-black shadow-lg z-[60]">
    {title}
  </div>
);

export default ModalTitle;
