import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";

const Cssq25 = () => {
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
        <Csstitle title={"LEVEL 25"} />

        <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
          <div className="font-bold text-lg text-center px-10  mt-5 ">
            <p>
              Fill in the missing syntax to use CSS variables for width, height,
              and color of the spaceship.
            </p>
            <p className="text-sm text-gray-400 mt-2">
              <strong>Hint:</strong> Use <code>var()</code> to apply values from{" "}
              <code>:root</code> variables.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="px-6 py-4 text-[13px] mt-10 leading-relaxed text-[#ffffff] bg-[#222] rounded-md">
              <pre className="whitespace-pre-wrap font-mono text-sm">
                <code>
                  {"<html>"} <br />
                  {"  <head>"} <br />
                  {"    <style>"} <br />
                  {"      :root {"} <br />
                  {"        --ship-color: lightblue;"} <br />
                  {"        --ship-width: 100px;"} <br />
                  {"        --ship-height: 100px;"} <br />
                  {"      }"} <br />
                  {"      .ship {"} <br />
                  {"        width: var("}
                  <input
                    type="text"
                    placeholder=""
                    className="rounded-sm outline-none w-[80px] text-black px-1 mt-1"
                    maxLength={15}
                  />
                  {");"} <br />
                  {"        height: var("}
                  <input
                    type="text"
                    placeholder=""
                    className="rounded-sm outline-none w-[80px] text-black px-1 mt-1"
                    maxLength={15}
                  />
                  {");"} <br />
                  {"        background-color: var("}
                  <input
                    type="text"
                    placeholder=""
                    className="rounded-sm outline-none w-[100px] text-black px-1 mt-1"
                    maxLength={15}
                  />
                  {");"} <br />
                  {"      }"} <br />
                  {"    </style>"} <br />
                  {"  </head>"} <br />
                  {"  <body>"} <br />
                  {'    <div class="ship"></div>'} <br />
                  {"  </body>"} <br />
                  {"</html>"} <br />
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

export default Cssq25;
