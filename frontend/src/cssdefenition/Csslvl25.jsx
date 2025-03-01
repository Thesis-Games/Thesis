import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";
import { Link } from "react-router-dom";

const Csslvl25 = () => {
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

        <div className="flex flex-col items-center justify-center relative font-mono">
          <div className="font-bold text-4xl mt-5">
            <h1>Level 25: CSS Variables</h1>
          </div>
          <div className="py-1 px-5 text-lg text-center mt-2 leading-relaxed text-[#414040]">
            <p>
            CSS Variables, also known as custom properties, allow you to store values in variables to reuse throughout your CSS.
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
    {"      :root {"} <br />
    {"        --planet-color: lightblue;"} <br />
    {"        --planet-size: 100px;"} <br />
    {"      }"} <br />
    {"      .planet {"} <br />
    {"        width: var(--planet-size);"} <br />
    {"        height: var(--planet-size);"} <br />
    {"        background-color: var(--planet-color);"} <br />
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

export default Csslvl25;
