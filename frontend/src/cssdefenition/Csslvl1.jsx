import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";

const Csslvl1 = () => {
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
        <Csstitle title={"LEVEL 1"} />

        <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
          <div className="font-bold  text-4xl mt-2">
            <h1>Level 1: Basic Styling</h1>
          </div>
          <div className=" md:py-1 px-5 text-lg text-center leading-relaxed text-[#414040]  ">
            <p>
              The color property is used to change the color of text, and the
              background-color property is used to change the background color
              of elements.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="px-6 py-4 text-[13px] mt-5 leading-relaxed text-[#ffffff] bg-[#222] rounded-md">
              <p>Example:</p>
              <pre className="whitespace-pre-wrap font-mono text-sm ">
                <code>
                  {"<html>"}
                  <br />
                  {"   <head>"}
                  <br />
                  {"    <style>"}
                  <br />
                  {"      body {"}
                  <br />
                  {"        background-color: lightblue;"}
                  <br />
                  {"        color: darkblue;"}
                  <br />
                  {"      }"}
                  <br />
                  {"    </style>"}
                  <br />
                  {"  </head>"}
                  <br />
                  {"  <body>"}
                  <br />
                  {"    <h1>Welcome to the Space Odyssey</h1>"}
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

export default Csslvl1;
