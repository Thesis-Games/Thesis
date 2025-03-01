import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";
import { Link } from "react-router-dom";

const Csslvl17 = () => {
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
        <Csstitle title={"LEVEL 17"} />

        <div className="flex flex-col items-center justify-center relative font-mono">
          <div className="font-bold text-4xl mt-5">
            <h1>Level 17:   Advanced Grid Layout</h1>
          </div>
          <div className="py-1 px-5 text-lg text-center mt-2 leading-relaxed text-[#414040]">
            <p>
            You can control the layout of grid items with grid-column and grid-row properties.
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
        {"      .container {"}
        <br />
        {"        display: grid;"}
        <br />
        {"        grid-template-columns: repeat(3, 1fr);"}
        <br />
        {"        grid-gap: 10px;"}
        <br />
        {"      }"}
        <br />
        {"      .item {"}
        <br />
        {"        background-color: lightblue;"}
        <br />
        {"        height: 100px;"}
        <br />
        {"      }"}
        <br />
        {"      .large {"}
        <br />
        {"        grid-column: span 2;"}
        <br />
        {"      }"}
        <br />
        {"    </style>"}
        <br />
        {"  </head>"}
        <br />
        {"  <body>"}
        <br />
        {'    <div class="container">'}
        <br />
        {'      <div class="item">1</div>'}
        <br />
        {'      <div class="item large">2 (large)</div>'}
        <br />
        {'      <div class="item">3</div>'}
        <br />
        {"    </div>"}
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

export default Csslvl17;
