import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";
import { Link } from "react-router-dom";

const Csslvl12 = () => {
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
        <Csstitle title={"LEVEL 12"} />

        <div className="flex flex-col items-center justify-center relative font-mono">
          <div className="font-bold text-4xl mt-5">
            <h1>LEVEL 12: Border Radius</h1>
          </div>
          <div className="py-1 px-5 text-lg text-center mt-2 leading-relaxed text-[#414040]">
            <p>
              A Mars landing pad can have sharp or smooth edges. The
              border-radius property helps round the corners of an element,
              making it look more futuristic!
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
                {"      .button {"}
                <br />
                {"        width: 100px;"}
                <br />
                {"        height: 50px;"}
                <br />
                {"        background-color: lightblue;"}
                <br />
                {"        border-radius: 10px;"}
                <br />
                {"      }"}
                <br />
                {"    </style>"}
                <br />
                {"  </head>"}
                <br />
                {"  <body>"}
                <br />
                {'    <button class="button">Spaceport</button>'}
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

export default Csslvl12;
