import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";

const Cssq14 = () => {
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
        <Csstitle title={"LEVEL 14"} />

        <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
          <div className="font-bold text-lg text-center px-10 mt-5">
            <p>
              The Martian colony buildings should be stacked in a column instead
              of a row. Complete the missing code!
            </p>
            <p className="text-sm text-gray-400">
              Hint: Use the `flex-direction` property to control the arrangement
              of the buildings.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="px-6 py-4 text-[10px] mt-2 leading-relaxed text-[#ffffff] bg-[#222] rounded-md">
              <pre className="whitespace-pre-wrap font-mono">
                <code>
                  {"<html>"}
                  <br />
                  {"  <head>"}
                  <br />
                  {"    <style>"}
                  <br />
                  {"      .colony {"}
                  <br />
                  {"        display: "}
                  <input
                    type="text"
                    placeholder="flex"
                    className="rounded-sm outline-none w-[50px] text-black px-1 mb-2"
                    maxLength={10}
                  />
                  {";"}
                  <br />
                  {"        justify-content: "}
                  <input
                    type="text"
                    placeholder="center"
                    className="rounded-sm outline-none w-[50px] text-black px-1"
                    maxLength={10}
                  />
                  {";"}
                  <br />
                  {"        flex-direction: "}
                  <input
                    type="text"
                    placeholder="column"
                    className="rounded-sm outline-none w-[50px] text-black px-1"
                    maxLength={10}
                  />
                  {";"}
                  <br />
                  {"      }"}
                  <br />
                  {"      .building {"}
                  <br />
                  {"        width: 120px;"}
                  <br />
                  {"        height: 120px;"}
                  <br />
                  {"        background-color: lightgreen;"}
                  <br />
                  {"      }"}
                  <br />
                  {"    </style>"}
                  <br />
                  {"  </head>"}
                  <br />
                  {"  <body>"}
                  <br />
                  {'    <div class="colony">'}
                  <br />
                  {'      <div class="building">🏠 Hab Unit</div>'}
                  <br />
                  {'      <div class="building">🔬 Lab</div>'}
                  <br />
                  {'      <div class="building">🍽️ Mess Hall</div>'}
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
      <Cssbutton />
    </div>
  );
};

export default Cssq14;
