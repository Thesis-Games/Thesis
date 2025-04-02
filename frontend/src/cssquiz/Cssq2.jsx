import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";

const Cssq2 = () => {
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
        <Csstitle title={"LEVEL 2"} />

        <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
          <div className="font-bold text-lg text-center px-10 mt-5">
            <p>
              Fill in the missing syntax to set the font size to 40px and the
              font family to 'Verdana'.
            </p>
            <p className="text-sm text-gray-400">
              Hint: Use "40px" for font size and "Verdana" for font family.
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
                  {"      h1 {"}
                  <br />
                  {"        font-size: "}
                  <input
                    type="text"
                    placeholder="e.g., 40px"
                    className="rounded-sm outline-none w-[40px] text-black px-1"
                    maxLength={5}
                  />
                  {";"}
                  <br />
                  {"        font-family: "}
                  <input
                    type="text"
                    placeholder="e.g., Verdana"
                    className="rounded-sm outline-none w-[65px] text-black px-1 mt-2"
                    maxLength={8}
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
                  {"    <h1>Galaxy Explorer</h1>"}
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

export default Cssq2;
