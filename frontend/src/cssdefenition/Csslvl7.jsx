import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";
import { Link } from "react-router-dom";

const Csslvl7 = () => {
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
      <Csslayout>
        <Csstitle title={"LEVEL 7"} />

        <div className="flex flex-col items-center justify-center relative font-mono">
          <div className="font-bold text-4xl mt-5">
            <h1>Level 7: Display Property</h1>
          </div>
          <div className="py-1 px-5 text-lg text-center mt-2 leading-relaxed text-[#414040]">
            <p>
            The display property controls the display type of an element, such as block, inline, and none.
            </p>
          </div>

          {/* Adjusted margin using Tailwind only */}
          <div className="px-10 py-1 text-[13px] mt-1 leading-relaxed text-[#ffffff] bg-[#222] rounded-md">
            <p>Example:</p>
            <pre className="whitespace-pre-wrap font-mono text-sm">
            <code>
        {"<html>"}
        <br />
        {"   <head>"}
        <br />
        {"    <style>"}
        <br />
        {"      .star {"}
        <br />
        {"        display: block;"}
        <br />
        {"        width: 50px;"}
        <br />
        {"        height: 50px;"}
        <br />
        {"        background-color: gold;"}
        <br />
        {"      }"}
        <br />
        {"    </style>"}
        <br />
        {"  </head>"}
        <br />
        {"  <body>"}
        <br />
        {'    <div class="star"></div>'}
        <br />
        {"  </body>"}
        <br />
        {"</html>"}
      </code>
    </pre>
          </div>
        </div>
      </Csslayout>
      <Cssbutton />
    </div>
  );
};

export default Csslvl7;
