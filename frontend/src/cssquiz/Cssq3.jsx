import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";

const Cssq3 = () => {
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
        <Csstitle title={"LEVEL 3"} />

        <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
          <div className="font-bold text-lg text-center px-10 mt-5">
            <p>
              Fill in the missing syntax to set the border of the "planet" to
              3px, solid, and red.
            </p>
            <p className="text-sm text-gray-400">
              Hint: Use "3px" for border thickness, "solid" for the border
              style, and "red" for the color.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="px-6 py-4 text-[13px] mt-10 leading-relaxed text-[#ffffff] bg-[#222] rounded-md">
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
                  {"        border: "}
                  <input
                    type="text"
                    placeholder="e.g., 3"
                    className="rounded-sm outline-none w-[40px] text-black px-1"
                    maxLength={3}
                  />
                  {"px "}
                  <input
                    type="text"
                    placeholder="e.g., solid"
                    className="rounded-sm outline-none w-[70px] text-black px-1"
                    maxLength={10}
                  />
                  {","}
                  <input
                    type="text"
                    placeholder="e.g., red"
                    className="rounded-sm outline-none w-[70px] text-black px-1"
                    maxLength={10}
                  />
                  {";"}
                  <br />
                  {"      }"}
                  <br />
                  {"    </style>"}
                  <br />
                  {"  </head>"}
                  <br />
                  {"  <body>"}
                  <br />
                  {"    <div class='planet'>Mars</div>"}
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
      <Cssbutton />
    </div>
  );
};

export default Cssq3;
