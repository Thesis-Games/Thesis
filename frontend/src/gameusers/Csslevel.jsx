import React, { useState, useEffect } from "react";
import background from "../picture/marsbg.gif";
import { Link } from "react-router-dom";
import Modal from "../component/custom-modal/modal-level";
import LevelHook from "../hook/level-hook";
import { getLevelPoints } from "../utils/get-level-point";
import { renderStars } from "../utils/render-star";

const Csslevel = () => {
  const { handleGetLevel, level, levelModalData, handleGetLevelModal } =
    LevelHook();

  const cssLevel = Array.from({ length: 25 }, (_, i) => ({
    category: "CSS",
    level: (i + 1).toString(),
  }));

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const startIndex = currentPage * itemsPerPage;
  const currentItems = cssLevel.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => {
    if (startIndex + itemsPerPage < cssLevel.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const openModal = (sign) => {
    handleGetLevelModal(sign.category, sign.level);
    setSelectedCategory(sign.category);
    setSelectedLevel(sign.level);
    setIsModalOpen(true);
  };

  useEffect(() => {
    handleGetLevel("CSS");
  }, []);

  return (
    <div
      className="w-full h-screen relative flex items-center justify-center flex-col"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="gap-5 flex flex-wrap justify-center font-mono">
        {currentItems.map((sign, index) => {
          const points = getLevelPoints(sign.level, level);
          const isCompleted = points > 0;
          return (
            <div
              key={index}
              className={`flex flex-col items-center justify-center font-bold rounded-full w-20 h-20 hover:scale-110 transition-transform duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00e5ff] ${
                isCompleted
                  ? "bg-[#ff2424] hover:bg-[#f34d41]"
                  : "bg-gray-400 hover:bg-gray-300"
              }`}
              style={{
                border: "3px solid black",
                boxShadow: `0 0 10px rgba(255, 255, 255, 0.8),
                  0 0 20px rgba(255, 255, 255, 0.6),
                  0 0 30px rgba(255, 255, 255, 0.4)`,
              }}
              onClick={() => openModal(sign)}
            >
              <h1
                className={`text-2xl ${
                  isCompleted ? "text-yellow-400" : "text-black"
                }`}
              >
                {sign.level}
              </h1>
              {isCompleted ? (
                <div className="text-xs mt-1">{renderStars(points)}</div>
              ) : (
                <div className="text-xs text-[#5f5d5d] mt-1">LOCKED</div>
              )}
            </div>
          );
        })}
      </div>

      {/* Pagination Buttons */}
      <div className="absolute bottom-10 flex gap-5">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="bg-gray-800 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={startIndex + itemsPerPage >= cssLevel.length}
          className="bg-gray-800 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Back Button */}
      <Link to="/home/languagepick">
        <div className="absolute top-5 left-5 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 48 48"
          >
            <path
              fill="#fff10c"
              fillRule="evenodd"
              stroke="#000"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M44 40.8361C39.1069 34.8632 34.7617 31.4739 30.9644 30.6682C27.1671 29.8625 23.5517 29.7408 20.1182 30.303V41L4 23.5453L20.1182 7V17.167C26.4667 17.2172 31.8638 19.4948 36.3095 24C40.7553 28.5052 43.3187 34.1172 44 40.8361Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </Link>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        level={selectedLevel}
        title={selectedCategory}
        data={levelModalData}
      />
    </div>
  );
};

export default Csslevel;
