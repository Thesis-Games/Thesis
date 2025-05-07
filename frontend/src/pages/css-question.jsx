import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import background from "../picture/marsbg.gif";
import CssbtQ from "../csscomponent/CssbtnQ";
import Csstitle from "../csscomponent/Csstitle";
import FinishModal from "../component/custom-modal/finish-modal";
import QuestionCssHook from "../hook/question-css-hook";
import LayoutGame from "../gamelevelhtml/LayoutGame";

// Import all question components

import Question1 from "../component/question-css/question1";
import Question2 from "../component/question-css/question2";
import Question3 from "../component/question-css/question3";
import Question4 from "../component/question-css/question4";
import Question5 from "../component/question-css/question5";
import Question6 from "../component/question-css/question6";
import Question7 from "../component/question-css/question7";
import Question8 from "../component/question-css/question8";
import Question9 from "../component/question-css/question9";
import Question10 from "../component/question-css/question10";
import Question11 from "../component/question-css/question11";
import Question12 from "../component/question-css/question12";
import Question13 from "../component/question-css/question13";
import Question14 from "../component/question-css/question14";
import Question15 from "../component/question-css/question15";
import Question16 from "../component/question-css/question16";
import Question17 from "../component/question-css/question17";
import Question18 from "../component/question-css/question18";
import Question19 from "../component/question-css/question19";
import Question20 from "../component/question-css/question20";
import Question21 from "../component/question-css/question21";
import Question22 from "../component/question-css/question22";
import Question23 from "../component/question-css/question23";
import Question24 from "../component/question-css/question24";
import Question25 from "../component/question-css/question25";
import { handleErrorAlert } from "../component/sweet-alert";
import { useNavigate } from "react-router-dom";
import TimerDisplay from "../utils/timer-display";
export const CssQuestion = () => {
  const { category, level } = useParams();
  const { questionData, handleGetQuestion } = QuestionCssHook();
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

  const handleAnswerChange = (event) => {
    const { name, value } = event.target;
    setAnswerInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

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
      case 11:
        return (
          <Question11
            data={questionData}
            handleAnswerChange={handleAnswerChange}
            answerInput={answerInput}
          />
        );
      case 12:
        return (
          <Question12
            data={questionData}
            handleAnswerChange={handleAnswerChange}
            answerInput={answerInput}
          />
        );
      case 13:
        return (
          <Question13
            data={questionData}
            handleAnswerChange={handleAnswerChange}
            answerInput={answerInput}
          />
        );
      case 14:
        return (
          <Question14
            data={questionData}
            handleAnswerChange={handleAnswerChange}
            answerInput={answerInput}
          />
        );
      case 15:
        return (
          <Question15
            data={questionData}
            handleAnswerChange={handleAnswerChange}
            answerInput={answerInput}
          />
        );
      case 16:
        return (
          <Question16
            data={questionData}
            handleAnswerChange={handleAnswerChange}
            answerInput={answerInput}
          />
        );
      case 17:
        return (
          <Question17
            data={questionData}
            handleAnswerChange={handleAnswerChange}
            answerInput={answerInput}
          />
        );
      case 18:
        return (
          <Question18
            data={questionData}
            handleAnswerChange={handleAnswerChange}
            answerInput={answerInput}
          />
        );
      case 19:
        return (
          <Question19
            data={questionData}
            handleAnswerChange={handleAnswerChange}
            answerInput={answerInput}
          />
        );
      case 20:
        return (
          <Question20
            data={questionData}
            handleAnswerChange={handleAnswerChange}
            answerInput={answerInput}
          />
        );
      case 21:
        return (
          <Question21
            data={questionData}
            handleAnswerChange={handleAnswerChange}
            answerInput={answerInput}
          />
        );
      case 22:
        return (
          <Question22
            data={questionData}
            handleAnswerChange={handleAnswerChange}
            answerInput={answerInput}
          />
        );
      case 23:
        return (
          <Question23
            data={questionData}
            handleAnswerChange={handleAnswerChange}
            answerInput={answerInput}
          />
        );
      case 24:
        return (
          <Question24
            data={questionData}
            handleAnswerChange={handleAnswerChange}
            answerInput={answerInput}
          />
        );
      case 25:
        return (
          <Question25
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
    navigate("/languagepick/csslevel");
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
        <Csstitle title={`LEVEL ${level}`} />
        {renderQuestion()}

        <TimerDisplay time={time} />
      </LayoutGame>
      <CssbtQ
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

export default CssQuestion;
