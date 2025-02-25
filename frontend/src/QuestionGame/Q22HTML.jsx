import React from "react";
import background from "../picture/earthbg.gif";
import LayoutGame from "../gamelevelhtml/LayoutGame";
import TitleHTML from "../gamelevelhtml/TitleHTML";
import Questionbutton from "./Questionbutton";
import { LifeCompontent } from "./LifeCompontent";
const Q22HTML = () => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    // Allow only a single character input
    if (value.length > 10) {
      e.target.value = value.slice(0, 10); // Restrict to the first character
    }
  };
  return (
    <div
      className="w-full h-screen relative flex items-center justify-center flex-col "
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

        <LifeCompontent></LifeCompontent>
        <div className="flex items-center justify-center flex-col relative space-y-6 font-mono mt-10">
          <div className="font-bold   text-sm text-center px-10">
            <h1>
              Fill in the missing syntax to create a table with headers "Rocket"
              and "Destination," and add two rows with values "Falcon 9" and
              "Moon" (for the first row), and "Starship" and "Mars" (for the
              second row).
            </h1>
          </div>

          <div className="text-[#ffffff] bg-[#222] p-2 rounded-md text-sm font-mono px-6">
            <div className=" ">
              <p>&lt;html&gt;</p>
              <p className="ml-4">&lt;body&gt;</p>
              <p className="ml-8">&lt;form&gt;</p>

              {/* Astronaut ID Input */}
              <p className="ml-12">
                &lt;label for="
                <input
                  type="text"
                  className="rounded-sm outline-none w-[50px] text-black mx-1 "
                  placeholder=""
                />
                "&gt;Astronaut's ID:&lt;/label&gt;
              </p>
              <p className="ml-12">
                &lt;input type="
                <input
                  type="text"
                  className="rounded-sm outline-none w-[50px] text-black mx-1 mt-2"
                  placeholder=""
                />
                " id="astronautId" name="astronautId"&gt;
              </p>

              {/* Mission Selection */}
              <p className="ml-12">
                &lt;label for="
                <input
                  type="text"
                  className="rounded-sm outline-none w-[50px] text-black mx-1 mt-2"
                  placeholder=""
                />
                "&gt;Mission:&lt;/label&gt;
              </p>
              <p className="ml-12 mt-2">
                &lt;input type="radio" id="moon" name="mission"
                value="moon"&gt;Moon
              </p>
              <p className="ml-12 mt-2">
                &lt;input type="radio" id="mars" name="mission"
                value="mars"&gt;Mars
              </p>

              {/* Submit Button */}
              <p className="ml-12">
                &lt;input type="submit" value="
                <input
                  type="text"
                  className="rounded-sm outline-none w-[50px] text-black mx-1 mt-2"
                  placeholder=""
                />
                "&gt;
              </p>

              <p className="ml-8">&lt;/form&gt;</p>
              <p className="ml-4">&lt;/body&gt;</p>
              <p>&lt;/html&gt;</p>
            </div>
          </div>
        </div>
      </LayoutGame>

      <Questionbutton></Questionbutton>
    </div>
  );
};

export default Q22HTML;
