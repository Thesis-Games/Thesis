import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";
import { Link } from "react-router-dom";

const Csslvl20 = () => {
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
        <Csstitle title={"LEVEL 20"} />

        <div className="flex flex-col items-center justify-center relative font-mono">
          <div className="font-bold text-4xl mt-5">
            <h1>Level 20:  Responsive Design with Media Queries</h1>
          </div>
          <div className="py-1 px-5 text-lg text-center mt-2 leading-relaxed text-[#414040]">
            <p>
            Media queries allow you to apply styles based on the screen size or device type.
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
        {"        background-color: lightpink;"}
        <br />
        {"      }"}
        <br />
        {"      @media (max-width: 600px) {"}
        <br />
        {"        .planet {"}
        <br />
        {"          width: 50px;"}
        <br />
        {"          height: 50px;"}
        <br />
        {"        }"}
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

export default Csslvl20;
