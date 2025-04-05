import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";

const Cssq20 = () => {
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
        <Csstitle title={"LEVEL 20"} />

        <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
          <div className="font-bold text-lg text-center px-5  mt-2 ">
            <p>
              Fill in the missing syntax to reduce the size of the planet on
              screens smaller than 800px.
            </p>
            <p className="text-sm text-gray-400 mt-2">
              <strong>Hint:</strong> Use smaller <code>width</code> and
              <code>height</code> in the media query.
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
                  {"      .planet {"}
                  <br />
                  {"        width: 100px;"}
                  <br />
                  {"        height: 100px;"}
                  <br />
                  {"        background-color: lightblue;"}
                  <br />
                  {"      }"}
                  <br />
                  {"      @media (max-width: 800px) {"}
                  <br />
                  {"        .planet {"}
                  <br />
                  {"          width: "}
                  <input
                    type="text"
                    placeholder=""
                    className="rounded-sm outline-none w-[80px] text-black px-1 mt-1"
                    maxLength={10}
                  />
                  {";"}
                  <br />
                  {"          height: "}
                  <input
                    type="text"
                    placeholder=""
                    className="rounded-sm outline-none w-[80px] text-black px-1 mt-1"
                    maxLength={10}
                  />
                  {";"}
                  <br />
                  {"        }"}
                  <br />
                  {"      }"}
                  <br />
                  {"    </style>"}
                  <br />
                  {"  </head>"}
                  <br />
                  {"  <body>"}
                  <br />
                  {'    <div class="planet"></div>'}
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
      <Cssbutton></Cssbutton>
    </div>
  );
};

export default Cssq20;
