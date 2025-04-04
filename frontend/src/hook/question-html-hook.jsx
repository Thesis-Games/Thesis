import { useState } from "react";
import { getHtmlQuestionAndAnswer } from "../services/question-services";
const QuestionHtmlHook = () => {
  const [questionData, setQuestionData] = useState({});

  const handleGetQuestion = async (category, level) => {
    try {
      const response = await getHtmlQuestionAndAnswer(category, level);

      setQuestionData(response);
    } catch (error) {
      throw error;
    }
  };

  return { questionData, handleGetQuestion };
};

export default QuestionHtmlHook;
