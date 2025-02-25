import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";

const Csslvl2 = () => {
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
          <div className="font-bold  text-4xl mt-2">
            <h1>Level 2: Font Size and Family</h1>
          </div>
          <div className=" py-1 px-5 text-lg text-center leading-relaxed text-[#414040] mb- ">
            <p>
              The font-size property defines the size of the font, and
              font-family allows you to change the typeface of the text.
            </p>
          </div>
          <div className="px-6 py-4 text-[13px] mt-5 leading-relaxed text-[#ffffff] bg-[#222] rounded-md">
            <p>Example:</p>
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
                  placeholder="e.g., 30px"
                  className="rounded-sm outline-none w-[70px] text-black px-1"
                  maxLength={10}
                />
                {";"}
                <br />
                {"        font-family: "}
                <input
                  type="text"
                  placeholder="e.g., Arial"
                  className="rounded-sm outline-none w-[100px] text-black px-1"
                  maxLength={20}
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
      </Csslayout>
      <Cssbutton></Cssbutton>
    </div>
  );
};

export default Csslvl2;
