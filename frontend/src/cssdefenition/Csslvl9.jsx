import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";
import { Link } from "react-router-dom";

const Csslvl9 = () => {
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
        <Csstitle title={"LEVEL 9"} />

        <div className="flex flex-col items-center justify-center relative font-mono">
          <div className="font-bold text-4xl mt-5">
            <h1>Level 9:  Clearfix</h1>
          </div>
          <div className="py-1 px-5 text-lg text-center mt-2 leading-relaxed text-[#414040]">
            <p>
            The clearfix method is used to clear floats, ensuring that the container adjusts its height to contain floated elements.
            </p>
          </div>

          {/* Adjusted margin using Tailwind only */}
          <div className="px-6 py- text-[13px] mt-3 leading-relaxed text-[#ffffff] bg-[#222] rounded-md">
            <p>Example:</p>
            <pre className="whitespace-pre-wrap font-mono text-sm">
            <code>
        {"<html>"}
        <br />
        {"   <head>"}
        <br />
        {"    <style>"}
        <br />
        {"      .container::after {"}
        <br />
        {'        content: "";'}
        <br />
        {"        clear: both;"}
        <br />
        {"        display: table;"}
        <br />
        {"      }"}
        <br />
        {"      .item {"}
        <br />
        {"        float: left;"}
        <br />
        {"        width: 50px;"}
        <br />
        {"        height: 50px;"}
        <br />
        {"        background-color: pink;"}
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
        {'      <div class="item"></div>'}
        <br />
        {'      <div class="item"></div>'}
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

export default Csslvl9;
