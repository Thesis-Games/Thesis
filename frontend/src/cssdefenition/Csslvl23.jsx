import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";

const Csslvl23 = () => {
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
        <Csstitle title={"LEVEL 23"} />

        <div className="flex flex-col items-center justify-center relative font-mono">
          <div className="font-bold text-4xl mt-2">
            <h1>Level 23: Border Styling</h1>
          </div>
          <div className="py-1 px-5 text-lg text-center leading-relaxed text-[#414040]">
            <p>
            The box-sizing property controls how the width and height of an element are calculated, including padding and borders.

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
    {"        width: 200px;"} <br />
    {"        height: 200px;"} <br />
    {"        padding: 20px;"} <br />
    {"        border: 5px solid green;"} <br />
    {"        box-sizing: border-box;"} <br />
    {"        background-color: lightpink;"} <br />
    {"      }"} <br />
    {"    </style>"} <br />
    {"  </head>"} <br />
    {"  <body>"} <br />
    {'    <div class="planet">Planet Earth</div>'} <br />
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

export default Csslvl23;
