import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";
import { Link } from "react-router-dom";

const Csslvl19 = () => {
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
        <Csstitle title={"LEVEL 19"} />

        <div className="flex flex-col items-center justify-center relative font-mono">
          <div className="font-bold text-4xl mt-5">
            <h1>Level 19: Pseudo Elements</h1>
          </div>
          <div className="py-1 px-5 text-lg text-center mt-2 leading-relaxed text-[#414040]">
            <p>
            Pseudo-elements allow you to style specific parts of an element. The ::before and ::after are commonly used to insert content before or after an element's original content.
            </p>
          </div>

          {/* Adjusted margin using Tailwind only */}
          <div className="px-6 py-1 text-[1px] mt-1 leading-relaxed text-[#ffffff] bg-[#222] rounded-md">
            <p>Example:</p>
            <pre className="whitespace-pre-wrap font-mono text-sm">
            <code>
        {"<html>"}
        <br />
        {"   <head>"}
        <br />
        {"    <style>"}
        <br />
        {"      .planet {"}
        <br />
        {"        width: 100px;"}
        <br />
        {"        height: 100px;"}
        <br />
        {"        background-color: lightblue;"}
        <br />
        {"        position: relative;"}
        <br />
        {"      }"}
        <br />
        {"      .planet::after {"}
        <br />
        {'        content: "🌕";'}
        <br />
        {"        position: absolute;"}
        <br />
        {"        top: 10px;"}
        <br />
        {"        left: 10px;"}
        <br />
        {"        font-size: 30px;"}
        <br />
        {"      }"}
        <br />
        {"    </style>"}
        <br />
        {"  </head>"}
        <br />
        {"  <body>"}
        <br />
        {'    <div class="planet"></div>'}
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

export default Csslvl19;
