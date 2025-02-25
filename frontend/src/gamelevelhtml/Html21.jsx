import React from "react";
import background from "../picture/background.png";
import Gamebutton from "./Gamebutton";
import LayoutGame from "./LayoutGame";
import TitleHTML from "./TitleHTML";

const Html21 = () => {
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
      <LayoutGame>
        <div>
          <TitleHTML title={"LEVEL 21"} />
        </div>

        <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
          <div className="font-bold text-4xl mt-5">
            <h1>Level 21: Using Tables for Layout</h1>
          </div>
          <div className="p-5 md:py-1 px-5 text-lg text-center md:text-1xl leading-relaxed text-[#414040]">
            <p>
              Tables can be used for more than just displaying data. You can use
              them to create layouts as well.
            </p>
          </div>

          <div className="py-4 px-5  leading-relaxed text-[#ffffff] bg-[#222] rounded-md ">
            <pre className="whitespace-pre-wrap font-mono text-sm">
              <code>
                {"<html>"}
                <br />
                {"  <body>"}
                <br />
                {"    <table border='1'>"}
                <br />
                {"      <tr>"}
                <br />
                {"        <td>Header 1</td>"}
                <br />
                {"        <td>Header 2</td>"}
                <br />
                {"      </tr>"}

                <br />
                {"    </table>"}
                <br />
                {"  </body>"}
                <br />
                {"</html>"}
              </code>
            </pre>
          </div>
        </div>
      </LayoutGame>
      <Gamebutton></Gamebutton>
    </div>
  );
};

export default Html21;
