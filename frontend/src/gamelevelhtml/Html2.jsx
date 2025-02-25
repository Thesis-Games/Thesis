import React from "react";
import background from "../picture/background.png";
import Gamebutton from "./Gamebutton";
import LayoutGame from "./LayoutGame";
import TitleHTML from "./TitleHTML";

const Html2 = () => {
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

        <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
          <div className="font-bold text-4xl md:text-5xl mt-2">
            <h1>Level 2: Paragraphs</h1>
          </div>
          <div className="p-5 md:py-1 px-5 text-lg text-center md:text-1xl leading-relaxed text-[#414040] ">
            <p>
              In HTML, paragraphs are created using the tag. A paragraph is a
              block of text that is usually displayed with space before and
              after it, making it visually separate from other content. Example
              A paragraph in HTML is written using the &lt;p&gt; tag. This tag
              is used to define text that is structured into blocks.
            </p>
          </div>
          <div className="p-5 text-1xl  leading-relaxed text-[#ffffff] bg-[#222] rounded-md  ">
            <p>Example:</p>
            <p>
              &lt;html&gt; <br></br>
              &lt;body&gt;
              <br></br>
              &lt;p&gt;In the year 2050, humans are ready to embark on a journey
              to Mars.h &lt;/p&gt;
              <br></br>
              &lt;/body&gt; <br></br>&lt;/html&gt;
            </p>
          </div>
        </div>
      </LayoutGame>
      <Gamebutton></Gamebutton>
    </div>
  );
};

export default Html2;
