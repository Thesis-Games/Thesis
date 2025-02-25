import React from "react";
import background from "../picture/earthbg.gif";
import Gamebutton from "./Gamebutton";
import LayoutGame from "./LayoutGame";
import TitleHTML from "./TitleHTML";

const Html25 = () => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <LayoutGame>
        <TitleHTML title="LEVEL 25" />

        <div className="flex flex-col items-center  space-y-4 font-mono">
          <h1 className="font-bold text-4xl mt-5">
            Level 25: Creating an Interactive Form
          </h1>

          <p className="p-5  text-lg leading-relaxed text-center text-[#414040]">
            Forms can have interactive elements like checkboxes, radio buttons,
            and more. Use JavaScript for dynamic form actions.
          </p>

          {/* Ayos na margin at padding sa code block */}
          <div className="px-6 py-4 mt-10 text-sm leading-relaxed text-white bg-[#222] rounded-md shadow-lg">
            <pre className="whitespace-pre-wrap font-mono">
              <code>
                {"<html>\n"}
                {"  <head>\n"}
                {
                  "    <meta name='description' content='A website for space exploration' />\n"
                }
                {
                  "    <meta name='keywords' content='space, mars, rocket, mission' />\n"
                }
                {"  </head>\n"}
                {"  <body>\n"}
                {"    <h1>Space Exploration Website</h1>\n"}
                {"  </body>\n"}
                {"</html>\n"}
              </code>
            </pre>
          </div>
        </div>
      </LayoutGame>

      <Gamebutton />
    </div>
  );
};

export default Html25;
