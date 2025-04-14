import { useState, useEffect, Suspense, lazy } from "react";
import { useParams, useNavigate } from "react-router-dom";
import background from "../picture/moonbg.gif";
import Jstittle from "../Jscomponent/Jstittle";
import Jsbutton from "../Jscomponent/Jsbutton";
import TimerDisplay from "../utils/timer-display";
import FinishModal from "../component/custom-modal/finish-modal";
import QuestionJsHook from "../hook/question-js-hook";
import { handleErrorAlert } from "../component/sweet-alert";
import LayoutGame from "../gamelevelhtml/LayoutGame";

// Map level to question components
const questionComponents = Array.from({ length: 25 }, (_, i) =>
  lazy(() => import(`../component/question-js/question${i + 1}`))
);

export const JsQuestion = () => {
  const { category, level } = useParams();
  const { questionData, handleGetQuestion } = QuestionJsHook();
  const [time, setTime] = useState(0);
  const [stars, setStars] = useState(3);
  const [isRunning, setIsRunning] = useState(true);
  const [finishModalOpen, setFinishModalOpen] = useState(false);
  const [answerInput, setAnswerInput] = useState({
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (category && level) {
      handleGetQuestion(category, level);
    }
  }, [category, level]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (time >= 240) setStars(1);
    else if (time >= 120) setStars(2);
    else setStars(3);
  }, [time]);

  const handleAnswerChange = (event) => {
    const { name, value } = event.target;
    setAnswerInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleCorrectAnswer = () => {
    const isCorrect = Object.keys(answerInput).every((key) => {
      if (questionData[key]) {
        return answerInput[key].trim() === questionData[key];
      }
      return true;
    });

    if (isCorrect) {
      setIsRunning(false);
      setFinishModalOpen(true);
    } else {
      handleErrorAlert("Wrong Answer");
    }
  };

  const handleNavigate = () => {
    navigate("/languagepick/jslevel");
  };

  const renderQuestion = () => {
    const levelIndex = Number(level) - 1;
    if (levelIndex < 0 || levelIndex >= questionComponents.length) {
      return <div>Invalid Level</div>;
    }

    const QuestionComponent = questionComponents[levelIndex];
    return (
      <Suspense fallback={<div>Loading Question...</div>}>
        <QuestionComponent
          data={questionData}
          handleAnswerChange={handleAnswerChange}
          answerInput={answerInput}
        />
      </Suspense>
    );
  };

  if (!questionData) {
    return <div>Loading...</div>;
  }

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
      <LayoutGame>
        <Jstittle title={`LEVEL ${level}`} />
        {renderQuestion()}
        <TimerDisplay time={time} />
      </LayoutGame>
      <Jsbutton
        handleCorrectAnswer={handleCorrectAnswer}
        handleExit={handleNavigate}
      />
      <FinishModal
        points={stars}
        level={level}
        time={time}
        finishModalOpen={finishModalOpen}
        category={category}
        setFinishModalOpen={setFinishModalOpen}
      />
    </div>
  );
};

export default JsQuestion;
