import React from "react";
import background from "../picture/background.png";
import Gamebutton from "./Gamebutton";
import LayoutGame from "./LayoutGame";
import TitleHTML from "./TitleHTML";

const Html23 = () => {
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
          <TitleHTML title={"LEVEL 22"} />
        </div>

        <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
          <div className="font-bold text-4xl mt-5">
            <h1>Level 22: Working with Forms</h1>
          </div>
          <div className="p-5 md:py-1 px-5 text-lg text-center md:text-1xl leading-relaxed text-[#414040]">
            <p>
              Forms allow users to input data. Use the &lt;input&gt; tag for
              text, checkboxes, radio buttons, and more.
            </p>
          </div>

          <div className="py-4 px-5  leading-relaxed text-[#ffffff] bg-[#222] rounded-md ">
            <pre className="whitespace-pre-wrap font-mono text-sm">
              <code>
                {"<html>"}
                <br />
                {"  <body>"}
                <br />
                {"    <form>"}
                <br />
                {"      <label for='name'>Astronaut Name:</label>"}
                <br />
                {"      <input type='text' id='name' name='name' />"}

                <br />
                {"      <label for='mission'>Mission Type:</label>"}
                <br />
                {
                  "      <input type='radio' id='moon' name='mission' value='moon' />Moon"
                }
                <br />
                {
                  "      <input type='radio' id='mars' name='mission' value='mars' />Mars"
                }
                <br />

                {"      <input type='submit' value='Submit' />"}
                <br />
                {"    </form>"}
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

export default Html23;
