import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";

const Cssq22 = () => {
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
          <div className="font-bold text-lg text-center px-10  mt-5 ">
            <p>
              Fill in the missing syntax to layer the spaceship behind the
              planet.
            </p>
            <p className="text-sm text-gray-400 mt-2">
              <strong>Hint:</strong> Use <code>z-index</code> to put the ship
              behind the planet.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="px-6 py-4 text-[13px] mt-5 leading-relaxed text-[#ffffff] bg-[#222] rounded-md">
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
                  {"        background-color: lightgreen;"}
                  <br />
                  {"        z-index: "}
                  <input
                    type="text"
                    placeholder=""
                    className="rounded-sm outline-none w-[40px] text-black px-1"
                    maxLength={5}
                  />
                  {";"}
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
                  {"        background-color: lightgray;"}
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
                  <br />
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

export default Cssq22;
