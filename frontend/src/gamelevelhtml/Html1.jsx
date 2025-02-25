import React from "react";
import background from "../picture/earthbg.gif";
import Gamebutton from "./Gamebutton";
import LayoutGame from "./LayoutGame";
import TitleHTML from "./TitleHTML";

const Html1 = () => {
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
          <TitleHTML title={"LEVEL 1"} />
        </div>

        <div className="flex items-center justify-center flex-col relative space-y-6 font-mono">
          <div className="font-bold text-4xl md:text-5xl">
            <h1>WHAT IS HTML</h1>
          </div>
          <div className="p-5 md:p-10 text-lg text-center md:text-2xl leading-relaxed text-[#414040] ">
            HTML (HyperText Markup Language) is the foundational language used
            to create and structure content on the web. It consists of a series
            of elements represented by tags, which define the structure and
            behavior of web pages.
          </div>
        </div>
      </LayoutGame>
      <Gamebutton></Gamebutton>
    </div>
  );
};

export default Html1;
