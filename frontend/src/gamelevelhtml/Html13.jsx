import React from "react";
import background from "../picture/background.png";
import Gamebutton from "./Gamebutton";
import LayoutGame from "./LayoutGame";
import TitleHTML from "./TitleHTML";
const Html13 = () => {
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
          <TitleHTML title={"LEVEL 13"} />
        </div>

        <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
          <div className="font-bold text-3xl mt-2">
            <h1>Level 13: Using the &lt;strong&gt; and &lt;em&gt; Tags</h1>
          </div>
          <div className="p-5 md:py-1 px-5 text-lg text-center md:text-1xl leading-relaxed text-[#414040] ">
            <p>
              The &lt;strong&gt; tag is used to make text bold, and the
              &lt;em&gt; tag is used to italicize text. These tags indicate
              emphasis in text.
            </p>
          </div>

          <div className="py-4 px-5 text-sm leading-relaxed text-[#ffffff] bg-[#222] rounded-md">
            <div>
              <p>Example:</p>
              <p>
                &lt;html&gt; <br></br>
                &lt;body&gt;
                <br></br>
                &lt;p&gt;&lt;strong&gt;Mission Complete:&lt;/strong&gt; The crew
                has successfully landed on Mars.&lt;/p&gt;
                <br></br>
                &lt;p&gt;&lt;em&gt;Warning:&lt;/em&gt; The oxygen levels are
                low.&lt;/p&gt;
                <br></br>
                &lt;/body&gt; <br></br>
                &lt;/html&gt;
              </p>
            </div>
          </div>
        </div>
      </LayoutGame>
      <Gamebutton></Gamebutton>
    </div>
  );
};

export default Html13;
