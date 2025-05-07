import React, { useState } from "react";
import background from "../picture/spacebg.gif";
import {
  htmlLesson,
  cssLesson,
  jsLesson,
} from "../../../backend/src/utils/lesson";
import { Link } from "react-router-dom";
import LessonModal from "../component/custom-modal/modal-lessson";

const Lessonpage = () => {
  const [showModal, setShowModal] = useState(false);
  const [lesson, setLesson] = useState(null);
  const [title, setTitle] = useState(null);

  const handleOpenModal = (lesson, title) => {
    setLesson(lesson);
    setTitle(title);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const SubjectButton = ({ children, onClick }) => (
    <button
      onClick={onClick}
      className="flex items-center justify-center bg-gradient-to-br from-[#1792f7] to-[#00e5ff] font-bold text-black text-xl hover:from-[#44abff] hover:to-[#00f7ff] hover:scale-105 transition-all duration-300 rounded-full w-[220px] h-[80px] p-5 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#00e5ff]/50 shadow-lg shadow-[#1792f7]/30 hover:shadow-[#44abff]/40"
    >
      {children}
    </button>
  );

  return (
    <div
      className="w-full min-h-screen relative flex items-center justify-center flex-col py-20"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Link
        to="/home"
        className="absolute top-10 left-10 cursor-pointer hover:scale-110 transition-transform duration-300"
        aria-label="Back to home"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 48 48"
          className="drop-shadow-lg hover:drop-shadow-xl transition-all"
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
      </Link>

      <div className="relative z-10 w-full max-w-4xl px-4">
        <h1 className="text-5xl font-bold text-center text-white mb-16 font-mono drop-shadow-[0_0_10px_rgba(0,229,255,0.7)]">
          Coding Lessons
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {/* HTML Card */}
          <div className="flex flex-col items-center relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none"></div>
            <SubjectButton onClick={() => handleOpenModal(htmlLesson, "HTML")}>
              HTML
            </SubjectButton>
            <p className="text-white mt-4 text-center max-w-xs relative z-10 bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
              Learn the structure of web pages with HTML
            </p>
          </div>

          {/* CSS Card */}
          <div className="flex flex-col items-center relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none"></div>
            <SubjectButton onClick={() => handleOpenModal(cssLesson, "CSS")}>
              CSS
            </SubjectButton>
            <p className="text-white mt-4 text-center max-w-xs relative z-10 bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
              Style your web pages with beautiful designs
            </p>
          </div>

          {/* JavaScript Card */}
          <div className="flex flex-col items-center relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none"></div>
            <SubjectButton
              onClick={() => handleOpenModal(jsLesson, "JAVASCRIPT")}
            >
              JAVASCRIPT
            </SubjectButton>
            <p className="text-white mt-4 text-center max-w-xs relative z-10 bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
              Add interactivity to your websites
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      <LessonModal
        lesson={lesson}
        title={title}
        closeModal={handleCloseModal}
        openModalValue={showModal}
      />
    </div>
  );
};

export default Lessonpage;
