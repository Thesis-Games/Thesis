import React from "react";
import ModalTitle from "./modal-title";

const LessonModal = ({ lesson, title, closeModal, openModalValue }) => {
  if (!openModalValue) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4">
      <div
        className="relative bg-gradient-to-br from-[#3eff7e] to-[#06dea8] p-1 rounded-xl w-full max-w-3xl h-[80vh]"
        style={{
          boxShadow: `
            0 0 15px rgba(62, 255, 126, 0.8),
            0 0 30px rgba(6, 222, 168, 0.6),
            0 0 45px rgba(0, 0, 0, 0.4)
          `,
        }}
      >
        <div className="bg-[#050505] p-1 rounded-xl w-full h-full">
          <div className="bg-gradient-to-b from-[#0a1a1a] to-[#050505] rounded-lg w-full h-full p-4 overflow-hidden flex flex-col">
            <div className="text-center mb-4">
              <ModalTitle title={title} />
              <div className="h-1 bg-gradient-to-r from-transparent via-[#3eff7e] to-transparent my-2"></div>
            </div>

            <div className="flex-1 overflow-y-auto space-y-6 p-2">
              {lesson.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-[#0a0a0a] border border-[#3eff7e]/30 rounded-lg p-4 hover:border-[#3eff7e]/60 transition-all duration-300"
                >
                  <div className="flex items-start mb-2">
                    <span className="text-[#3eff7e] font-bold mr-2">
                      #{index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 pl-7">{item.definition}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#3eff7e]/20">
              <div className="flex justify-between items-center text-xs text-gray-400">
                <span>{lesson.length} lessons available</span>
                <span>Scroll to explore</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
          <button
            className="bg-yellow-400 hover:bg-yellow-300 transition-all duration-300 text-black font-bold text-lg px-6 py-1 rounded-full border-4 border-black shadow-lg z-[60] w-[150px] hover:scale-105"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonModal;
