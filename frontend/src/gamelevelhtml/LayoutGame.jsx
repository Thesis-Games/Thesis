import React, { useRef, useState, useEffect } from "react";
import bgmusic from "../assets/backgroundmusic.mp3";

const LayoutGame = ({ children }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(
    () => localStorage.getItem("isMusicPlaying") !== "false"
  );

  useEffect(() => {
    const handleAudio = async () => {
      if (!audioRef.current) return;

      try {
        if (isPlaying) {
          audioRef.current.currentTime = 0;
          await audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      } catch (err) {
        console.error("Audio playback error:", err);
      }
    };

    handleAudio();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [isPlaying]);

  const toggleMusic = () => {
    const newState = !isPlaying;
    setIsPlaying(newState);
    localStorage.setItem("isMusicPlaying", newState.toString());
  };

  return (
    <div className="relative">
      <audio ref={audioRef} loop>
        <source src={bgmusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="absolute flex justify-center items-center top-5 left-6 gap-2 z-10">
        <button
          onClick={toggleMusic}
          className="text-black hover:scale-110 transition duration-300"
          aria-label={isPlaying ? "Mute music" : "Unmute music"}
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={48}
              height={48}
              viewBox="0 0 20 20"
            >
              <path
                fill="#797979"
                fillRule="evenodd"
                d="M9.383 3.076A1 1 0 0 1 10 4v12a1 1 0 0 1-1.707.707L4.586 13H2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2.586l3.707-3.707a1 1 0 0 1 1.09-.217m5.274-.147a1 1 0 0 1 1.414 0A9.97 9.97 0 0 1 19 10a9.97 9.97 0 0 1-2.929 7.071a1 1 0 0 1-1.414-1.414A7.97 7.97 0 0 0 17 10a7.97 7.97 0 0 0-2.343-5.657a1 1 0 0 1 0-1.414m-2.829 2.828a1 1 0 0 1 1.415 0A5.98 5.98 0 0 1 15 10a5.98 5.98 0 0 1-1.757 4.243a1 1 0 0 1-1.415-1.415A3.98 3.98 0 0 0 13 10a3.98 3.98 0 0 0-1.172-2.828a1 1 0 0 1 0-1.415"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={48}
              height={48}
              viewBox="0 0 24 24"
            >
              <path
                fill="#797979"
                d="M4.34 2.93L2.93 4.34L7.29 8.7L7 9H3v6h4l5 5v-6.59l4.18 4.18c-.65.49-1.38.88-2.18 1.11v2.06a8.94 8.94 0 0 0 3.61-1.75l2.05 2.05l1.41-1.41zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71m-7-8l-1.88 1.88L12 7.76zm4.5 8A4.5 4.5 0 0 0 14 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Main Container */}
      <div
        className="bg-[#fdfa27] opacity-100 rounded-lg shadow-lg w-[800px] h-auto py-20 px-10 flex items-center justify-center relative"
        style={{
          border: "10px solid black",
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
