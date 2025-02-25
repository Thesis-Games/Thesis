import React from "react";
import background from "../picture/background.png";
import Gamebutton from "./Gamebutton";
import LayoutGame from "./LayoutGame";
import TitleHTML from "./TitleHTML";

const Html3 = () => {
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
          <TitleHTML title={"LEVEL 3  "} />
        </div>

        <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
          <div className="font-bold text-4xl md:text-5xl mt-2">
            <h1>Level 3: Links</h1>
          </div>
          <div className="p-5 md:py-1 px-5 text-lg text-center md:text-1xl leading-relaxed text-[#414040] ">
            <p>
              The &lt;a&gt; tag is used to create hyperlinks. The href attribute
              specifies the destination of the link, and the text inside the
              &lt;a&gt; tag is what users click on.
            </p>
          </div>
          <div className="p-5 text-1xl  leading-relaxed text-[#ffffff] bg-[#222] rounded-md  ">
            <p>Example:</p>
            <p>
              &lt;html&gt; <br></br>
              &lt;body&gt;
              <br></br>
              &lt;a href="https://www.nasa.gov"&gt; Visit NASA for more space
              missions&lt;/a&gt;
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

export default Html3;
