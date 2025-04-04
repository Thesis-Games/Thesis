import { getQuestion } from "../services/question-services";
import { useState } from "react";
const QuestionHook = () => {
  const [questionData, setQuestionData] = useState();

  const handleGetQuestion = async (category, level) => {
    try {
      const response = await getQuestion(category, level);

      setQuestionData(response);
    } catch (error) {
      throw error;
    }
  };

  return { questionData, handleGetQuestion };
};

export default QuestionHook;
