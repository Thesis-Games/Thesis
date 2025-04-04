import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";

const Cssq13 = () => {
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
        <Csstitle title={"LEVEL 13"} />

        <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
          <div className="font-bold text-lg text-center px-10 mt-5">
            <p>
              Complete the missing code to create a shadow for the Mars Rover
              with a 15px offset, 30px blur, and 0.3 opacity.
            </p>
            <p className="text-sm text-gray-400">
              Hint: Use the `box-shadow` property with the following format:
              `offsetX offsetY blur radius color`.
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
                  {"      .box {"}
                  <br />
                  {"        width: 200px;"}
                  <br />
                  {"        height: 200px;"}
                  <br />
                  {"        background-color: yellow;"}
                  <br />
                  {"        box-shadow: "}
                  <input
                    type="text"
                    placeholder="e.g., 15px"
                    className="rounded-sm outline-none w-[30px] text-black px-1"
                    maxLength={5}
                  />{" "}
                  <input
                    type="text"
                    placeholder="e.g., 30px"
                    className="rounded-sm outline-none w-[30px] text-black px-1"
                    maxLength={5}
                  />{" "}
                  <input
                    type="text"
                    placeholder="e.g., 30px"
                    className="rounded-sm outline-none w-[30px] text-black px-1"
                    maxLength={5}
                  />
                  {" rgba(0, 0, 0, "}
                  <input
                    type="text"
                    placeholder="e.g., 0.3"
                    className="rounded-sm outline-none w-[30px] text-black px-1"
                    maxLength={3}
                  />
                  {")"}
                  <br />
                  {"      }"}
                  <br />
                  {"    </style>"}
                  <br />
                  {"  </head>"}
                  <br />
                  {"  <body>"}
                  <br />
                  {'    <div class="box">🚜 Mars Rover</div>'}
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

export default Cssq13;
