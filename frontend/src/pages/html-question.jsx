import { useState } from "react";
import { useParams } from "react-router-dom";
import LayoutGame from "../gamelevelhtml/LayoutGame";
import background from "../picture/earthbg.gif";
import TitleHTML from "../gamelevelhtml/TitleHTML";
import { LifeCompontent } from "../QuestionGame/LifeCompontent";
import Questionbutton from "../QuestionGame/Questionbutton";
const HtmlQuestion = () => {
  return (
    <div
      className="w-full h-screen relative flex items-center justify-center flex-col"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <LayoutGame>
        <div>
          <TitleHTML title={"LEVEL 2"} />
        </div>

        <LifeCompontent></LifeCompontent>
      </LayoutGame>
      <Questionbutton></Questionbutton>
    </div>
  );
};

export default HtmlQuestion;
