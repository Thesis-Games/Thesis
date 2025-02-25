import React from "react";
import background from "../picture/background.png";
import Gamebutton from "./Gamebutton";
import LayoutGame from "./LayoutGame";
import TitleHTML from "./TitleHTML";
const Html15 = () => {
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
          <TitleHTML title={"LEVEL 15"} />
        </div>

        <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
          <div className="font-bold text-4xl mt-2">
            <h1>Level 15: Adding a Video</h1>
          </div>
          <div className="p-5 md:py-1 px-5 text-lg text-center md:text-1xl leading-relaxed text-[#414040] ">
            <p>
              The &lt;video&gt; tag is used to embed video files into a webpage.
              It can include the controls attribute to provide play, pause, and
              volume options.
            </p>
          </div>

          <div className="py-4 px-5 text-1xl leading-relaxed text-[#ffffff] bg-[#222] rounded-md">
            <div>
              <p>
                <strong>Example:</strong>
              </p>
              <p>
                &lt;html&gt; <br />
                &lt;body&gt;
                <br />
                &nbsp;&nbsp;&lt;video src=&quot;space_video.mp4&quot;
                controls&gt;&lt;/video&gt;
                <br />
                &lt;/body&gt; <br />
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

export default Html15;
