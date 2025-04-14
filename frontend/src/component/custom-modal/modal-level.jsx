import React from "react";
import ModalTitle from "./modal-title";
import { StarRating } from "../../utils/star-rating";
import LevelHook from "../../hook/level-hook";
const Modal = ({ isOpen, onClose, level, title, data }) => {
  if (!isOpen) return null;

  const { handleValidateLevel } = LevelHook();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      {/* Main modal container */}
      <div
        className="relative bg-[#3eff7e] p-1 rounded-lg w-auto max-w-md mx-4
      "
        style={{
          // Adds a 10px black border
          boxShadow: `
          0 0 10px rgba(255, 255, 255, 0.8), 
          0 0 20px rgba(255, 255, 255, 0.6), 
          0 0 30px rgba(255, 255, 255, 0.4)
        `,
        }}
      >
        {/* Nested layers for border effect */}
        <div className="bg-[#050505] p-1 rounded-lg w-auto">
          <div className="bg-[#06dea8] rounded-lg w-full p-5 flex flex-col items-center justify-center">
            <div className="p-5">
              <h1 className="text-2xl font-tektur mb-5">
                Do you want to play {level}?
              </h1>
              <StarRating points={data?.points || 0} />
            </div>
          </div>
        </div>

        {/* Title component */}
        <ModalTitle title={title} />

        {/* Button group at bottom */}
        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex gap-4">
          <button
            onClick={onClose}
            className="bg-yellow-400 hover:bg-yellow-300 transition-colors text-black font-bold text-lg px-6 py-1 rounded-full border-4 border-black shadow-lg z-[60] w-[150px]"
          >
            Close
          </button>
          <button
            className="bg-yellow-400 hover:bg-yellow-300 transition-colors text-black font-bold text-lg px-6 py-1 rounded-full border-4 border-black shadow-lg z-[60] w-[150px]"
            onClick={() => handleValidateLevel(title, level)}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
