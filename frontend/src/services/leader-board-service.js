import axios from "axios";
export const getLeaderBoard = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/leaderboard");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const createLeaderBoardAndLevelPoints = async (
  category,
  level,
  points
) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/leaderboard/create-point",
      {
        category: category,
        level: level,
        points: points,
      },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
