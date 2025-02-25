import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";

const Csslvl3 = () => {
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
        <Csstitle title={"LEVEL 3"} />

        <div className="flex flex-col items-center justify-center relative font-mono">
          <div className="font-bold text-4xl mt-2">
            <h1>Level 3: Border Styling</h1>
          </div>
          <div className="py-1 px-5 text-lg text-center leading-relaxed text-[#414040]">
            <p>
              The border property allows you to add a border to an element. It
              requires values for width, style, and color.
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
                {"        border: 5px solid green;"} <br />
                {"      }"} <br />
                {"    </style>"} <br />
                {"  </head>"} <br />
                {"  <body>"} <br />
                {'    <div class="planet">Planet Earth</div>'} <br />
                {"  </body>"} <br />
                {"</html>"}
              </code>
            </pre>
          </div>
        </div>
      </Csslayout>
      <Cssbutton />
    </div>
  );
};

export default Csslvl3;
