import { useState } from "react";
import { getLevelByUser, getLevel } from "../services/level-service";

const LevelHook = () => {
  const [level, setLevel] = useState([]);
  const [levelModalData, setLevelModalData] = useState();
  const handleGetLevel = async (category) => {
    try {
      const response = await getLevelByUser(category);
      setLevel(response.data);
    } catch (error) {
      console.error(
        "Error fetching level:",
        error.response?.data || error.message
      );
    }
  };
  const handleGetLevelModal = async (category, level) => {
    try {
      const response = await getLevel(category, level);
      setLevelModalData(response.data);
    } catch (error) {
      console.error(
        "Error fetching level:",
        error.response?.data || error.message
      );
    }
  };

  return { level, handleGetLevel, levelModalData, handleGetLevelModal };
};

export default LevelHook;
