import React from "react";
import background from "../picture/background.png";
import Gamebutton from "./Gamebutton";
import LayoutGame from "./LayoutGame";
import TitleHTML from "./TitleHTML";

const Html5 = () => {
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
          <TitleHTML title={"LEVEL 5"} />
        </div>

        <div className="flex flex-col relative space-y-2 font-mono">
          <div className="font-bold text-4xl md:text-5xl mt-2 text-center">
            <h1>Level 5: Lists</h1>
          </div>
          <div className="p-5 md:py-1 px-5 text-base text-center md:text-1xl leading-relaxed text-[#414040]">
            <p>
              Lists in HTML can be either ordered (numbered) or unordered
              (bulleted). The &lt;ul&gt; tag is for unordered lists, and
              &lt;ol&gt; is for ordered lists. Each list item is defined with
              the &lt;li&gt; tag.
            </p>
          </div>
          <div className="py-2 px-5 m-48 leading-relaxed text-[#ffffff] bg-[#222] rounded-md text-xs text-left">
            <p>Example:</p>
            <p>
              &lt;html&gt; <br />
              &lt;body&gt;
              <br />
              &lt;ul&gt; <br />
              {""}&lt;li&gt;Item 1&lt;/li&gt; <br />
              {""}&lt;li&gt;Item 2&lt;/li&gt; <br />
              {""}&lt;li&gt;Item 3&lt;/li&gt; <br />
              &lt;/ul&gt;
              <br />
              &lt;/body&gt; <br />
              &lt;/html&gt;
            </p>
          </div>
        </div>
      </LayoutGame>
      <Gamebutton></Gamebutton>
    </div>
  );
};

export default Html5;
