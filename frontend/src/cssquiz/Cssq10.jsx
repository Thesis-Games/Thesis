import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";

const Cssq10 = () => {
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
        <Csstitle title={"LEVEL 10"} />

        <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
          <div className="font-bold text-lg text-center px-10 mt-5">
            <p>
              Fill in the missing syntax to transition the width property over 1
              second.
            </p>
            <p className="text-sm text-gray-400">
              Hint: Use `transition` to specify which property you want to
              animate, followed by the duration.
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
                  {"      .button {"}
                  <br />
                  {"        width: 100px;"}
                  <br />
                  {"        height: 50px;"}
                  <br />
                  {"        background-color: blue;"}
                  <br />
                  {"        transition: "}
                  <input
                    type="text"
                    placeholder="e.g., width"
                    className="rounded-sm outline-none w-[80px] text-black px-1"
                    maxLength={15}
                  />
                  {" 0.5s;"}
                  <br />
                  {"      }"}
                  <br />
                  {"      .button:hover {"}
                  <br />
                  {"        background-color: "}
                  <input
                    type="text"
                    placeholder="e.g., red"
                    className="rounded-sm outline-none w-[80px] text-black px-1"
                    maxLength={15}
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
                  {'    <button class="button">Mars Mission</button>'}
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

export default Cssq10;
