import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";

const Csslvl21 = () => {
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
        <Csstitle title={"LEVEL 21"} />

        <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
          <div className="font-bold  text-4xl mt-2">
            <h1>Level 21:  Overflow Property</h1>
          </div>
          <div className=" md:py-1 px-5 text-lg text-center leading-relaxed text-[#414040]  ">
            <p>
            The overflow property controls what happens when content overflows an element's box. You can use auto, scroll, or hidden to handle it.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
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
    {"      .container {"}
    <br />
    {"        width: 300px;"}
    <br />
    {"        height: 200px;"}
    <br />
    {"        overflow: auto;"}
    <br />
    {"        border: 1px solid #ccc;"}
    <br />
    {"      }"}
    <br />
    {"      .content {"}
    <br />
    {"        width: 500px;"}
    <br />
    {"        height: 500px;"}
    <br />
    {"        background-color: lightgray;"}
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
    {'      <div class="content"></div>'}
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
        </div>
      </Csslayout>
      <Cssbutton></Cssbutton>
    </div>
  );
};

export default Csslvl21;
