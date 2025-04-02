import React from "react";
import background from "../picture/earthbg.gif";
import LayoutGame from "../gamelevelhtml/LayoutGame";
import TitleHTML from "../gamelevelhtml/TitleHTML";
import Questionbutton from "./Questionbutton";
import { LifeCompontent } from "./LifeCompontent";
const Q21HTML = () => {
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
          <TitleHTML title={"LEVEL 21"} />
        </div>

        <LifeCompontent></LifeCompontent>
        <div className="flex items-center justify-center flex-col relative space-y-6 font-mono mt-10">
          <div className="font-bold   text-lg text-center px-10">
            <h1>
              Fill in the missing syntax to create a table with headers "Rocket"
              and "Destination," and add one row with values "Falcon 9" and
              "Moon."
            </h1>
          </div>

          <div className="text-[#ffffff] bg-[#222] p-2 rounded-md text-sm font-mono">
            <p>
              &lt;html&gt; <br />
              &lt;body&gt;
              <br />
              &nbsp;&nbsp;&lt;table&gt; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;
              <input
                type="text"
                className="rounded-sm outline-none w-[65px] text-black mx-1"
                onChange={(e) => handleInputChange(0, e.target.value)}
                maxLength={8}
                placeholder=""
              />
              &lt;/td&gt; &nbsp;&nbsp;&lt;td&gt;
              <input
                type="text"
                className="rounded-sm outline-none w-[35px] text-black mx-1"
                onChange={(e) => handleInputChange(0, e.target.value)}
                maxLength={17}
                placeholder=""
              />
              &lt;/td&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;
              <input
                type="text"
                className="rounded-sm outline-none w-[63px] text-black mx-1"
                onChange={(e) => handleInputChange(2, e.target.value)}
                maxLength={8}
                placeholder=""
              />
              &lt;/td&gt; &nbsp;&nbsp;&lt;td&gt;
              <input
                type="text"
                className="rounded-sm outline-none w-[35px] text-black mx-1"
                onChange={(e) => handleInputChange(3, e.target.value)}
                maxLength={4}
                placeholder=""
              />
              &lt;/td&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt; <br />
              &nbsp;&nbsp;&lt;/table&gt; <br />
              &lt;/body&gt; <br />
              &lt;/html&gt;
            </p>
          </div>
        </div>
      </LayoutGame>

      <Questionbutton></Questionbutton>
    </div>
  );
};

export default Q21HTML;
