import axios from "axios";

export const getQuestion = async (category, level) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/question-answer/${category}/${level}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getHtmlQuestionAndAnswer = async (category, level) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/html/${category}/${level}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
