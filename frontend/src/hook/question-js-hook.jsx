import { useState } from "react";
import { getJsQuestionAndAnswer } from "../services/question-services";

const useQuestionJsHook = () => {
  const [questionData, setQuestionData] = useState(null);

  const handleGetQuestion = async (category, level) => {
    try {
      const response = await getJsQuestionAndAnswer(category, level);
      setQuestionData(response);
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  };

  return { questionData, handleGetQuestion };
};

export default useQuestionJsHook;
