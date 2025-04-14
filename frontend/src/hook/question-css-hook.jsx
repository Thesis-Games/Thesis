import { useState } from "react";
import { getCssQuestionAndAnswer } from "../services/question-services";

const QuestionCssHook = () => {
  const [questionData, setQuestionData] = useState({});

  const handleGetQuestion = async (category, level) => {
    try {
      const response = await getCssQuestionAndAnswer(category, level);

      setQuestionData(response);
    } catch (error) {
      throw error;
    }
  };

  return { questionData, handleGetQuestion };
};

export default QuestionCssHook;
