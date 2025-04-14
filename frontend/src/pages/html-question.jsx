import { useState, useEffect, Suspense, lazy } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LayoutGame from "../gamelevelhtml/LayoutGame";
import background from "../picture/earthbg.gif";
import TitleHTML from "../gamelevelhtml/TitleHTML";
import Questionbutton from "../QuestionGame/Questionbutton";
import FinishModal from "../component/custom-modal/finish-modal";
import QuestionHtmlHook from "../hook/question-html-hook";
import { handleErrorAlert } from "../component/sweet-alert";
import TimerDisplay from "../utils/timer-display";

// Map level to question components, handling inconsistent file naming
const questionComponents = Array.from({ length: 25 }, (_, i) => {
  const level = i + 1;
  // Handle special cases for question-8, question-9, question-10
  const fileName =
    level === 8 || level === 9 || level === 10
      ? `question-${level}`
      : `question${level}`;
  return lazy(() => import(`../component/question-html/${fileName}`));
});

const HtmlQuestion = () => {
  const { category, level } = useParams();
  const { questionData, handleGetQuestion } = QuestionHtmlHook();
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
    handleGetQuestion(category, level);
  }, [category, level, handleGetQuestion]);

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
    navigate("/languagepick/start");
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
        <TitleHTML title={`LEVEL ${level}`} />
        {renderQuestion()}
        <Questionbutton
          handleCorrectAnswer={handleCorrectAnswer}
          handleExit={handleNavigate}
        />
        <TimerDisplay time={time} />
      </LayoutGame>
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

export default HtmlQuestion;
