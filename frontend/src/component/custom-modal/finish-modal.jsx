import React, { useEffect } from "react";
import ModalTitle from "./modal-title";
import { StarRating } from "../../utils/star-rating";
import ConfettiExplosion from "react-confetti-explosion";
import victorySound from "../../assets/VICTORY  SOUND EFFECT - FREE SOUND EFFECT HD (NO COPYRIGHT).mp3"; // Ensure correct path
import { formatTime } from "../../utils/time-formater";
import LeaderBoardHook from "../../hook/leader-board-hook";
import { useNavigate } from "react-router-dom";

const FinishModal = ({
  points,
  level,
  finishModalOpen,
  time,
  category,
  setFinishModalOpen,
}) => {
  const { handleCreateLeaderBoardAndLevelPoints, loading } = LeaderBoardHook();
  const navigate = useNavigate();

  useEffect(() => {
    if (finishModalOpen) {
      const audio = new Audio(victorySound);
      audio.play();
    }
  }, [finishModalOpen]);

  if (!finishModalOpen) return null;

  const handleSuccess = async () => {
    const response = await handleCreateLeaderBoardAndLevelPoints(
      category,
      level,
      points
    );
    if (response) {
      setFinishModalOpen(false);
      navigate(
        category === "HTML"
          ? "/languagepick/start"
          : category === "CSS"
          ? "/languagepick/csslevel"
          : "/languagepick/jslevel"
      );
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="relative bg-[#3eff7e] p-1 rounded-lg w-auto max-w-md mx-4"
        style={{
          // Adds a 10px black border
          boxShadow: `
          0 0 10px rgba(255, 255, 255, 0.8), 
          0 0 20px rgba(255, 255, 255, 0.6), 
          0 0 30px rgba(255, 255, 255, 0.4)
        `,
        }}
      >
        <div className="bg-[#050505] p-1 rounded-lg w-auto">
          <div className="bg-[#06dea8] rounded-lg w-auto flex flex-col items-center justify-center p-5">
            <div className="p-5">
              <h1 className="text-xl font-tektur text-center font-semibold mb-2">
                Time: {formatTime(time)}
              </h1>
              <h1 className="text-3xl font-tektur text-center font-semibold mb-2">
                Level {level}
              </h1>
              <StarRating points={points || 0} />
            </div>
          </div>
        </div>
        <ModalTitle title={"Victory"} />
        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 ">
          <button
            className="bg-yellow-400 hover:bg-yellow-300 transition-colors text-black font-bold text-lg px-6 py-1 rounded-full border-4 border-black shadow-lg z-[60] w-[150px]"
            disabled={loading}
            onClick={handleSuccess}
          >
            {loading ? "Loading..." : "Play Again"}
          </button>
        </div>
      </div>
      <ConfettiExplosion particleCount={200} duration={3000} zIndex={100} />
    </div>
  );
};

export default FinishModal;
