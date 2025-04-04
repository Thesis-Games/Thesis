import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";

const Cssq16 = () => {
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
        <Csstitle title={"LEVEL 16"} />

        <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
          <div className="font-bold text-lg text-center px-5 mt-2">
            <p>
              Fill in the missing syntax to create a grid with two equal
              columns.
            </p>
            <p className="text-sm text-gray-400 mt-2">
              <strong>Hint:</strong> Use <code>grid-template-columns</code> with
              a value that creates two **equal** columns.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="px-6 py-1 text-[10px] mt-2 leading-relaxed text-[#ffffff] bg-[#222] rounded-md">
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
                  {"        grid-template-columns: "}
                  <input
                    type="text"
                    placeholder="1fr 1fr"
                    className="rounded-sm outline-none w-[110px] text-black px-1"
                    maxLength={11}
                  />
                  {";"}
                  <br />
                  {"        gap: 10px;"}
                  <br />
                  {"      }"}
                  <br />
                  {"      .item {"}
                  <br />
                  {"        background-color: lightyellow;"}
                  <br />
                  {"        height: 100px;"}
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
                  {'      <div class="item">A</div>'}
                  <br />
                  {'      <div class="item">B</div>'}
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

export default Cssq16;
