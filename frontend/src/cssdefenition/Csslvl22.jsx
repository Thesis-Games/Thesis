import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";

const Csslvl22 = () => {
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
        <Csstitle title={"LEVEL 22"} />

        <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
          <div className="font-bold  text-4xl mt-2">
            <h1>Level 22: Z-index for Layering</h1>
          </div>
          <div className=" py-1 px-5 text-lg text-center leading-relaxed text-[#414040] mb- ">
            <p>
            The z-index property controls the stacking order of elements. Higher values are displayed on top of lower values.

            </p>
          </div>
          <div className="px-6 py-4 text-[13px] mt-5 leading-relaxed text-[#ffffff] bg-[#222] rounded-md">
            <p>Example:</p>
            <pre className="whitespace-pre-wrap font-mono text-sm">
  <code>
    {"<html>"}
    <br />
    {"  <head>"}
    <br />
    {"    <style>"}
    <br />
    {"      .planet {"}
    <br />
    {"        position: absolute;"}
    <br />
    {"        width: 100px;"}
    <br />
    {"        height: 100px;"}
    <br />
    {"        background-color: lightcoral;"}
    <br />
    {"        z-index: 2;"}
    <br />
    {"      }"}
    <br />
    {"      .ship {"}
    <br />
    {"        position: absolute;"}
    <br />
    {"        width: 100px;"}
    <br />
    {"        height: 100px;"}
    <br />
    {"        background-color: lightblue;"}
    <br />
    {"        z-index: 1;"}
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
    {'    <div class="ship"></div>'}
    <br />
    {"  </body>"}
    <br />
    {"</html>"}
  </code>
</pre>
          </div>
        </div>
      </Csslayout>
      <Cssbutton></Cssbutton>
    </div>
  );
};

export default Csslvl22;
