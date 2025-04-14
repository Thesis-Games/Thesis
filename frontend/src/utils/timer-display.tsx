import React from "react";
import { formatTime } from "./time-formater";
const TimerDisplay = ({ time }) => {
  return (
    <div className="absolute flex justify-center items-center top-5 right-6 gap-2">
      <h1 className="text-xl font-bold">Timer: {formatTime(time)}</h1>
    </div>
  );
};

export default TimerDisplay;
