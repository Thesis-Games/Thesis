import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";
import { Link } from "react-router-dom";

const Csslvl15 = () => {
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
        <Csstitle title={"LEVEL 15"} />

        <div className="flex flex-col items-center justify-center relative font-mono">
          <div className="font-bold text-4xl mt-5">
            <h1>Level 15: Align Items in Flexbox</h1>
          </div>
          <div className="py-1 px-5 text-lg text-center mt-2 leading-relaxed text-[#414040]">
            <p>
              The align-items property in flexbox allows you to align items
              vertically within a container.
            </p>
          </div>

          {/* Adjusted margin using Tailwind only */}

          <div className="px-6 py-1  text-[9px] mt-2 leading-relaxed text-[#ffffff] bg-[#222] rounded-md">
            <p>Example:</p>
            <pre className="whitespace-pre-wrap font-mono ">
              <code>
                {"<html>"}
                <br />
                {"  <head>"}
                <br />
                {"    <style>"}
                <br />
                {"      .container {"}
                <br />
                {"        display: flex;"}
                <br />
                {"        align-items: center;"}
                <br />
                {"        height: 300px;"}
                <br />
                {"      }"}
                <br />
                {"      .item {"}
                <br />
                {"        width: 100px;"}
                <br />
                {"        height: 100px;"}
                <br />
                {"        background-color: darkorange;"}
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
                {'      <div class="item">2</div>'}
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

export default Csslvl15;
