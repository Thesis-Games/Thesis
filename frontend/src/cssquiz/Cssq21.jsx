import React from "react";
import background from "../picture/marsbg.gif"; // Assuming this path is correct
import Csslayout from "../csscomponent/Csslayout"; // Assuming this is a wrapper component
import CssbtQ from "../csscomponent/CssbtnQ"; // Assuming this is a button component
import Csstitle from "../csscomponent/Csstitle"; // Assuming this renders a title

const Cssq21 = () => {
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
            <Csstitle title={"LEVEL 21"} />

            <div className="flex items-center justify-center flex-col relative space-y-6 font-mono">
              <div className="font-bold text-4xl">
                <h1>Level 21: Overflow Property</h1>
              </div>
              <div className="md:py-1 px-5 text-lg text-center leading-relaxed font-bold">
                <p>
                  Fill in the missing syntax to hide the overflowing content
                  inside the container.
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  <strong>Hint:</strong> Use <code>overflow: hidden;</code> to
                  cut off content that exceeds the container.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className=" flex   px-7 py-4 text-[13px] leading-relaxed text-[#ffffff] bg-[#222] rounded-md">
                  <pre className="whitespace-pre-wrap font-mono text-sm">
                    <code>
                      {"<html>"}
                      <br />
                      {"  <head>"}
                      <br />
                      {"    <style>"}
                      <br />
                      {"      .container {"}
                      <br />
                      {"        width: 300px;"}
                      <br />
                      {"        height: 200px;"}
                      <br />
                      {"        overflow: "}
                      <input
                        type="text"
                        placeholder=""
                        className="rounded-sm outline-none w-[70px] text-black px-1"
                        maxLength={7}
                      />
                      {";"}
                      <br />
                      {"        border: 1px solid #ccc;"}
                      <br />
                      {"      }"}
                      <br />
                      {"      .content {"}
                      <br />
                      {"        width: 500px;"}
                      <br />
                      {"        height: 500px;"}
                      <br />
                      {"        background-color: lightyellow;"}
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
                      {'      <div class="content"></div>'}
                      <br />
                      {"    </div>"}
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

export default Cssq21;
