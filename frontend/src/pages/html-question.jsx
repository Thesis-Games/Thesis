import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LayoutGame from "../gamelevelhtml/LayoutGame";
import background from "../picture/earthbg.gif";
import TitleHTML from "../gamelevelhtml/TitleHTML";
import Questionbutton from "../QuestionGame/Questionbutton";
import FinishModal from "../component/custom-modal/finish-modal";
import QuestionHtmlHook from "../hook/question-html-hook";
import { formatTime } from "../utils/time-formater";
// Import all question components
import Question1 from "../component/question-html/question1";
import Question2 from "../component/question-html/question2";
import Question3 from "../component/question-html/question3";
import Question4 from "../component/question-html/question4";
import Question5 from "../component/question-html/question5";
import Question6 from "../component/question-html/question6";
import Question7 from "../component/question-html/question7";
import Question8 from "../component/question-html/question-8";
import Question9 from "../component/question-html/question-9";
import Question10 from "../component/question-html/question-10";
import { handleErrorAlert } from "../component/sweet-alert";
import { useNavigate } from "react-router-dom";
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
  }, [category, level]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (time < 120) setStars(3);
    else if (time >= 120 && time <= 240) setStars(2);
    else setStars(1);
  }, [time]);

  // Format time as MM:SS

  // Handle input changes
  const handleAnswerChange = (event) => {
    const { name, value } = event.target;
    setAnswerInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  // Handle answer submission
  const handleCorrectAnswer = () => {
    if (
      answerInput.answer1.trim() === questionData.answer1 &&
      answerInput.answer2.trim() === questionData.answer2 &&
      answerInput.answer3.trim() === questionData.answer3 &&
      answerInput.answer4.trim() === questionData.answer4
    ) {
      setIsRunning(false);
      setFinishModalOpen(true);
    } else {
      handleErrorAlert("Wrong Answer");
    }
  };

  const renderQuestion = () => {
    switch (Number(level)) {
      case 1:
        return (
          <Question1
            data={questionData}
            handleAnswerChange={handleAnswerChange}
            answerInput={answerInput}
          />
        );
      case 2:
        return (
          <Question2
            data={questionData}
            handleAnswerChange={handleAnswerChange}
            answerInput={answerInput}
          />
        );
      case 3:
        return (
          <Question3
            data={questionData}
            handleAnswerChange={handleAnswerChange}
            answerInput={answerInput}
          />
        );
      case 4:
        return (
          <Question4
            data={questionData}
            handleAnswerChange={handleAnswerChange}
            answerInput={answerInput}
          />
        );
      case 5:
        return (
          <Question5
            data={questionData}
            handleAnswerChange={handleAnswerChange}
            answerInput={answerInput}
          />
        );
      case 6:
        return (
          <Question6
            data={questionData}
            handleAnswerChange={handleAnswerChange}
            answerInput={answerInput}
          />
        );
      case 7:
        return (
          <Question7
            data={questionData}
            handleAnswerChange={handleAnswerChange}
            answerInput={answerInput}
          />
        );
      case 8:
        return (
          <Question8
            data={questionData}
            handleAnswerChange={handleAnswerChange}
            answerInput={answerInput}
          />
        );
      case 9:
        return (
          <Question9
            data={questionData}
            handleAnswerChange={handleAnswerChange}
            answerInput={answerInput}
          />
        );
      case 10:
        return (
          <Question10
            data={questionData}
            handleAnswerChange={handleAnswerChange}
            answerInput={answerInput}
          />
        );
      default:
        return null;
    }
  };

  const handleNavigate = () => {
    navigate("/languagepick/start");
  };
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
        <div className="absolute flex justify-center items-center top-5 right-6 gap-2">
          <h1 className="text-xl font-bold">Timer: {formatTime(time)}</h1>
        </div>
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
