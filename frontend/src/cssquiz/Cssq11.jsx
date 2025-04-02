import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";

const Cssq11 = () => {
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
        <Csstitle title={"LEVEL 11"} />

        <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
          <div className="font-bold text-lg text-center px-10 mt-5">
            <p>
              Fill in the missing syntax to change the background color to red
              when hovering over the Mars Mission button.
            </p>
            <p className="text-sm text-gray-400">
              Hint: To change the background color on hover, use `:hover` and
              set the `background-color` to `red`.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="px-6 py-4 text-[13px] leading-relaxed text-[#ffffff] bg-[#222] rounded-md">
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
                    placeholder="e.g., background-color 0.5s"
                    className="rounded-sm outline-none w-[130px] text-black px-1"
                    maxLength={16}
                  />
                  {";"}
                  <br />
                  {"      }"}
                  <br />
                  {"      .button:hover {"}
                  <br />
                  {"        background-color: "}
                  <input
                    type="text"
                    placeholder="red"
                    className="rounded-sm outline-none w-[30px] text-black px-1"
                    maxLength={3}
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

export default Cssq11;
