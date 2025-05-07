import React from "react";
import { useEffect, useState } from "react";
import {
  getLeaderBoard,
  createLeaderBoardAndLevelPoints,
} from "../services/leader-board-service";
import { handleErrorAlert } from "../component/sweet-alert";

const LeaderBoardHook = () => {
  const [leaderBoardData, setLeaderBoardData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCreateLeaderBoardAndLevelPoints = async (
    category,
    level,
    points
  ) => {
    setLoading(true);
    try {
      const data = await createLeaderBoardAndLevelPoints(
        category,
        level,
        points
      );

      return data;
    } catch (error) {
      handleErrorAlert(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchLeaderBoard = async () => {
      try {
        const data = await getLeaderBoard();
        setLeaderBoardData(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLeaderBoard();
  }, []);
  return { leaderBoardData, handleCreateLeaderBoardAndLevelPoints, loading };
};

export default LeaderBoardHook;
