import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";

const Cssq6 = () => {
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
        <Csstitle title={"LEVEL 6"} />

        <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
          <div className="font-bold text-lg text-center px-10 mt-5">
            <p>
              Fill in the missing syntax to position the spaceship 200px from
              the top and 150px from the left.
            </p>
            <p className="text-sm text-gray-400">
              Hint: Use the "top" and "left" properties with "position:
              absolute".
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
                  {"      .spaceship {"}
                  <br />
                  {"        position: absolute;"}
                  <br />
                  {"        top: "}
                  <input
                    type="text"
                    placeholder="e.g., 200px"
                    className="rounded-sm outline-none w-[50px] text-black px-1 mt-1"
                    maxLength={5}
                  />
                  {";"}
                  <br />
                  {"        left: "}
                  <input
                    type="text"
                    placeholder="e.g., 150px"
                    className="rounded-sm outline-none w-[50px] text-black px-1 mt-1"
                    maxLength={5}
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
                  {'    <div class="spaceship">Rocket</div>'}
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

export default Cssq6;
