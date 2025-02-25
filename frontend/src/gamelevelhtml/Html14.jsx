import React from "react";
import background from "../picture/background.png";
import Gamebutton from "./Gamebutton";
import LayoutGame from "./LayoutGame";
import TitleHTML from "./TitleHTML";
const Html14 = () => {
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
          <TitleHTML title={"LEVEL 14"} />
        </div>

        <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
          <div className="font-bold text-4xl mt-2">
            <h1>Level 14: Input Fields for Forms</h1>
          </div>
          <div className="p-5 md:py-1 px-5 text-lg text-center md:text-1xl leading-relaxed text-[#414040] ">
            <p>
              The &lt;input&gt; tag is used to create various types of input
              fields, such as text, checkboxes, radio buttons, etc.
            </p>
          </div>

          <div className="py-4 px-5 text-sm leading-relaxed text-[#ffffff] bg-[#222] rounded-md">
            <div>
              <p>Example:</p>
              <p>
                &lt;html&gt; <br />
                &lt;body&gt;
                <br />
                &lt;form action=&quot;/submit&quot;&gt; <br />
                &nbsp;&nbsp;&lt;input type=&quot;text&quot;
                name=&quot;name&quot; placeholder=&quot;Enter your name&quot;
                /&gt;
                <br />
                &nbsp;&nbsp;&lt;input type=&quot;submit&quot;
                value=&quot;Submit&quot; /&gt;
                <br />
                &lt;/form&gt; <br />
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

export default Html14;
