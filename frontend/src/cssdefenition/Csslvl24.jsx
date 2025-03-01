import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";

const Csslvl24 = () => {
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

        <div className="flex flex-col items-center justify-center relative font-mono">
          <div className="font-bold text-4xl mt-5">
            <h1>Level 24: Transitioning Multiple Properties</h1>
          </div>
          <div className="py-1 px-5 text-lg text-center mt-2 leading-relaxed text-[#414040]">
            <p>
            You can transition multiple properties at the same time, including background-color, transform, etc.
            </p>
          </div>

          {/* Adjusted margin using Tailwind only */}
          <div className="px-6 py-4 text-[13px] mt-5 leading-relaxed text-[#ffffff] bg-[#222] rounded-md">
            <p>Example:</p>
            <pre className="whitespace-pre-wrap font-mono text-sm">
  <code>
    {"<html>"} <br />
    {"  <head>"} <br />
    {"    <style>"} <br />
    {"      .planet {"} <br />
    {"        width: 100px;"} <br />
    {"        height: 100px;"} <br />
    {"        background-color: lightblue;"} <br />
    {"        transition: background-color 0.5s, transform 1s;"} <br />
    {"      }"} <br />
    {"      .planet:hover {"} <br />
    {"        background-color: lightcoral;"} <br />
    {"        transform: rotate(360deg);"} <br />
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
      </Csslayout>
      <Cssbutton />
    </div>
  );
};

export default Csslvl24;
