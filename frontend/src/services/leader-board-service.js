import axios from "axios";
export const getLeaderBoard = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/leaderboard");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const createLeaderBoardAndLevelPoints = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/leaderboard/create-point",
      {
        category: data.category,
        level: data.level,
        points: data.points,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
