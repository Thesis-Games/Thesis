import { useState } from "react";
import {
  getLevelByUser,
  getLevel,
  validateLevel,
} from "../services/level-service";
import { useNavigate } from "react-router-dom";
import { handleErrorAlert } from "../component/sweet-alert";
const LevelHook = () => {
  const [level, setLevel] = useState([]);
  const [levelModalData, setLevelModalData] = useState();
  const [errorValidate, setErrorValidate] = useState(null);

  const navigate = useNavigate();

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

  const handleValidateLevel = async (category, level) => {
    try {
      const response = await validateLevel(category, level);

      if (response.message === "Level validated successfully") {
        if (category == "HTML") {
          navigate(`/questions/html/${category}/${level}`);
        } else if (category == "CSS") {
          navigate(`/questions/css/${category}/${level}`);
        } else {
          navigate(`/questions/js/${category}/${level}`);
        }
      }
    } catch (error) {
      handleErrorAlert("Finish Previos Level");
    }
  };

  return {
    level,
    handleGetLevel,
    levelModalData,
    handleGetLevelModal,
    handleValidateLevel,
    errorValidate,
  };
};

export default LevelHook;
