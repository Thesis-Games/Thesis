import React from "react";
import background from "../picture/background.png";
import Gamebutton from "./Gamebutton";
import LayoutGame from "./LayoutGame";
import TitleHTML from "./TitleHTML";

const Html4 = () => {
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
          <TitleHTML title={"LEVEL 4"} />
        </div>

        <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
          <div className="font-bold text-4xl md:text-5xl mt-2">
            <h1>Level 4: Images</h1>
          </div>
          <div className="p-5 md:py-1 px-5 text-lg text-center md:text-1xl leading-relaxed text-[#414040] ">
            <p>
              The &lt;img&gt; tag is used to insert images. The src attribute
              specifies the path to the image file, and the alt attribute
              provides an alternative text description if the image is
              unavailable.
            </p>
          </div>
          <div className="p-5 text-1xl  leading-relaxed text-[#ffffff] bg-[#222] rounded-md  ">
            <p>Example:</p>
            <p>
              &lt;html&gt; <br></br>
              &lt;body&gt;
              <br></br>
              &lt;img src="rocket.jpg" alt="A spaceship launching"&gt;
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

export default Html4;
