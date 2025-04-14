import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";

const Cssq24 = () => {
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
        <Csstitle title={"LEVEL 24"} />

        <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
          <div className="font-bold text-lg text-center px-10  mt-5 ">
            <p>
              Fill in the missing syntax to transition both background color and
              scaling.
            </p>
            <p className="text-sm text-gray-400 mt-2">
              <strong>Hint:</strong> Use <code>transition</code> with both{" "}
              <code>background-color</code> and <code>transform</code>.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="px-6 py-4 text-[13px] mt-10 leading-relaxed text-[#ffffff] bg-[#222] rounded-md">
              <pre className="whitespace-pre-wrap font-mono text-sm">
                <code>
                  {"<html>"} <br />
                  {"  <head>"} <br />
                  {"    <style>"} <br />
                  {"      .planet {"} <br />
                  {"        width: 100px;"} <br />
                  {"        height: 100px;"} <br />
                  {"        background-color: lightgreen;"} <br />
                  {"        transition: "}
                  <input
                    type="text"
                    placeholder=""
                    className="rounded-sm outline-none w-[80px] text-black px-1 mt-1"
                    maxLength={10}
                  />
                  {" 0.5s, "}
                  <input
                    type="text"
                    placeholder=""
                    className="rounded-sm outline-none w-[80px] text-black px-1 mt-1"
                    maxLength={10}
                  />
                  {" 1s;"} <br />
                  {"      }"} <br />
                  {"      .planet:hover {"} <br />
                  {"        background-color: lightpink;"} <br />
                  {"        transform: "}
                  <input
                    type="text"
                    placeholder=""
                    className="rounded-sm outline-none w-[100px] text-black px-1 mt-1"
                    maxLength={15}
                  />
                  {";"} <br />
                  {"      }"} <br />
                  {"    </style>"} <br />
                  {"  </head>"} <br />
                  {"  <body>"} <br />
                  {'    <div class="planet"></div>'} <br />
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

export default Cssq24;
