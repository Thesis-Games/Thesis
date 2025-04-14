import { useState } from "react";
import { getJsQuestionAndAnswer } from "../services/question-services";

const QuestionJsHook = () => {
  const [questionData, setQuestionData] = useState({});

  const handleGetQuestion = async (category, level) => {
    try {
      const response = await getJsQuestionAndAnswer(category, level);

      setQuestionData(response);
    } catch (error) {
      throw error;
    }
  };

  return { questionData, handleGetQuestion };
};

export default QuestionJsHook;
