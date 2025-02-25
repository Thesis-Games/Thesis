import React from "react";
import background from "../picture/earthbg.gif";
import LayoutGame from "../gamelevelhtml/LayoutGame";
import TitleHTML from "../gamelevelhtml/TitleHTML";
import Questionbutton from "./Questionbutton";
import { LifeCompontent } from "./LifeCompontent";

const Q15HTML = () => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    // Allow only a single character input
    if (value.length > 10) {
      e.target.value = value.slice(0, 10); // Restrict to the first character
    }
  };
  return (
    <div
      className="w-full h-screen relative flex items-center justify-center flex-col "
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <LayoutGame>
        <div>
          <TitleHTML title={"LEVEL 15"} />
        </div>

        <LifeCompontent></LifeCompontent>
        <div className="flex items-center justify-center flex-col relative space-y-6 font-mono">
          <div className="font-bold  text-2xl text-center px-10">
            <h1>
              Fill in the missing syntax to embed a video of a rocket launch
              with the source rocket_launch.mp4.
            </h1>
          </div>

          <div className="">
            <div className="text-[#ffffff] bg-[#222] p-5 rounded-md mt-2 text-sl ">
              <p>
                &lt;html&gt; <br />
                &lt;body&gt;
                <br />
                &nbsp;&nbsp;&lt;video src="
                <input
                  type="text"
                  className="rounded-sm outline-none w-[150px] text-black mx-1"
                  onChange={(e) => setSubmitInput(e.target.value)}
                  maxLength={17}
                  placeholder=""
                />
                " controls&gt;&lt;/video&gt;
                <br />
                &lt;/body&gt; <br />
                &lt;/html&gt;
              </p>
            </div>
          </div>
        </div>
      </LayoutGame>

      <Questionbutton></Questionbutton>
    </div>
  );
};

export default Q15HTML;
