import React from "react";
import background from "../picture/marsbg.gif"; // Assuming this path is correct
import Csslayout from "../csscomponent/Csslayout"; // Assuming this is a wrapper component
import CssbtQ from "../csscomponent/CssbtnQ"; // Assuming this is a button component
import Csstitle from "../csscomponent/Csstitle"; // Assuming this renders a title

const Cssq1 = () => {
  return (
    <>
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
          <div className="flex flex-col items-center justify-center space-y-6 font-mono">
            <Csstitle title={"LEVEL 1"} />

            <div className="flex items-center justify-center flex-col relative space-y-6 font-mono">
              <div className="font-bold text-4xl">
                <h1>Level 1: Basic Styling</h1>
              </div>
              <div className="md:py-1 px-5 text-lg text-center leading-relaxed font-bold">
                <p>
                  Fill in the missing syntax to set the background color to
                  "darkgrey" and the text color to "white".
                </p>
                <p className="text-sm text-gray-400">
                  Hint: Use CSS color names like "darkgrey" and "white".
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="flex px- py-4 text-[13px] leading-relaxed text-[#ffffff] bg-[#222] rounded-md">
                  <pre className="whitespace-pre-wrap font-mono text-sm">
                    <code>
                      {"<html>"}
                      <br />
                      {"  <head>"}
                      <br />
                      {"    <style>"}
                      <br />
                      {"      body {"}
                      <br />
                      {"        background-color: "}
                      <input
                        type="text"
                        placeholder="e.g., darkgrey"
                        className="rounded-sm outline-none w-[70px] text-black px-1"
                        maxLength={10}
                      />
                      {";"}
                      <br />
                      {"        color: "}
                      <input
                        type="text"
                        placeholder="e.g., white"
                        className="rounded-sm outline-none w-[45px] text-black px-1"
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
                      {"    <h1>Space Expedition Begins</h1>"}
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
          </div>
        </Csslayout>
        <CssbtQ />
      </div>
    </>
  );
};

export default Cssq1;
