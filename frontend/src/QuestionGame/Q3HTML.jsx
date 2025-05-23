import React from "react";
import background from "../picture/earthbg.gif";
import LayoutGame from "../gamelevelhtml/LayoutGame";
import TitleHTML from "../gamelevelhtml/TitleHTML";
import Questionbutton from "./Questionbutton";
import { LifeCompontent } from "./LifeCompontent";

const Q3HTML = () => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    // Allow only a single character input
    if (value.length > 50) {
      e.target.value = value.slice(0, 50); // Restrict to the first character
    }
  };

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
          <TitleHTML title={"LEVEL 3"} />
        </div>

        <LifeCompontent></LifeCompontent>
        <div className="flex items-center justify-center flex-col relative space-y-6 font-mono">
          <div className="font-bold  text-2xl text-center px-5">
            <h1>
              Fill in the missing syntax to create a paragraph about space
              exploration. Use the &lt;a&gt; tag.
            </h1>
          </div>

          <div className="">
            <div className="text-[#ffffff] bg-[#222] p-5 rounded-md mt-2 text-sl">
              <p>
                &lt;html&gt; <br></br>
                &lt;body&gt;
                <br></br>
                &lt;a href="
                <input
                  type="text"
                  placeholder=""
                  className="rounded-sm outline-none w-[225px] text-black"
                  onChange={handleInputChange} // Add the onChange handler here
                  maxLength={20} // Ensure only one character can be entered
                />
                "&gt; Explore the universe! &lt;/a&gt;
                <br></br>
                &lt;/body&gt; <br></br>&lt;/html&gt;
              </p>
            </div>
          </div>
        </div>
      </LayoutGame>
      <Questionbutton></Questionbutton>
    </div>
  );
};

export default Q3HTML;
