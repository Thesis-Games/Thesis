import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";
import { Link } from "react-router-dom";

const Csslvl13 = () => {
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
        <Csstitle title={"LEVEL 13"} />

        <div className="flex flex-col items-center justify-center relative font-mono">
          <div className="font-bold text-4xl mt-5">
            <h1>Level 13: Box Shadow</h1>
          </div>
          <div className="py-1 px-5 text-lg text-center mt-2 leading-relaxed text-[#414040]">
            <p>
              The Mars Rover moves on a dusty surface, and it casts a shadow!
              The box-shadow property helps create a realistic shadow effect on
              elements.
            </p>
          </div>

          {/* Adjusted margin using Tailwind only */}
          <div className="px-6 py-1 text-[13px] mt-5 leading-relaxed text-[#ffffff] bg-[#222] rounded-md">
            <p>Example:</p>
            <pre className="whitespace-pre-wrap font-mono text-sm">
              <code>
                {"<html>"}
                <br />
                {"  <head>"}
                <br />
                {"    <style>"}
                <br />
                {"      .box {"}
                <br />
                {"        width: 200px;"}
                <br />
                {"        height: 200px;"}
                <br />
                {"        background-color: lightgreen;"}
                <br />
                {"        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);"}
                <br />
                {"      }"}
                <br />
                {"    </style>"}
                <br />
                {"  </head>"}
                <br />
                {"  <body>"}
                <br />
                {'    <div class="box"></div>'}
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

export default Csslvl13;
