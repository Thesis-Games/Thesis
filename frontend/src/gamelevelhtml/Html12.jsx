import React from "react";
import background from "../picture/background.png";
import Gamebutton from "./Gamebutton";
import LayoutGame from "./LayoutGame";
import TitleHTML from "./TitleHTML";

const Html12 = () => {
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
          <TitleHTML title={"LEVEL 12"} />
        </div>

        <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
          <div className="font-bold text-4xl mt-2">
            <h1>Level 12: Using the &lt;span&gt; Tag</h1>
          </div>
          <div className="p-5 md:py-1 px-5 text-lg text-center md:text-1xl leading-relaxed text-[#414040] ">
            <p>
              The &lt;span&gt; tag is an inline element that is used to style a
              part of the text without affecting the entire block.
            </p>
          </div>

          <div className="p-5 text-1xl  leading-relaxed text-[#ffffff] bg-[#222] rounded-md  ">
            <div className="">
              <p>Example:</p>
              <p>
                &lt;html&gt; <br></br>
                &lt;body&gt;
                <br></br>
                &lt;p&gt;Mission status: &lt;span style ="color:
                green";&gt;Success&lt;/span&gt;&lt;/p&gt;
                <br></br>
                &lt;/body&gt; <br></br>&lt;/html&gt;
              </p>
            </div>
          </div>
        </div>
      </LayoutGame>
      <Gamebutton></Gamebutton>
    </div>
  );
};

export default Html12;
