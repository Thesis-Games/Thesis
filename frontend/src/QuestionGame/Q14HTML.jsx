import React from "react";
import background from "../picture/earthbg.gif";
import LayoutGame from "../gamelevelhtml/LayoutGame";
import TitleHTML from "../gamelevelhtml/TitleHTML";
import Questionbutton from "./Questionbutton";
import { LifeCompontent } from "./LifeCompontent";
const Q14HTML = () => {
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
          <TitleHTML title={"LEVEL 14"} />
        </div>

        <LifeCompontent></LifeCompontent>
        <div className="flex items-center justify-center flex-col relative space-y-6 font-mono">
          <div className="font-bold  text-2xl text-center px-10">
            <h1>
              Fill in the missing syntax to create an input field for "Astronaut
              ID" and a submit button.
            </h1>
          </div>

          <div className="">
            <div className="text-[#ffffff] bg-[#222] p-5 rounded-md mt-2 text-sl ">
              <p>
                &lt;html&gt; <br />
                &lt;body&gt;
                <br />
                &lt;form action="
                <input
                  type="text"
                  className="rounded-sm outline-none w-[100px] text-black mx-1"
                  onChange={(e) => setActionInput(e.target.value)}
                  placeholder=""
                />
                "&gt;
                <br />
                &nbsp;&nbsp;&lt;input type="text" name="
                <input
                  type="text"
                  className="rounded-sm outline-none w-[100px] text-black mx-1 mt-2"
                  onChange={(e) => setNameInput(e.target.value)}
                  placeholder=""
                />
                " placeholder="Enter Astronaut ID" /&gt;
                <br />
                &nbsp;&nbsp;&lt;input type="submit" value="
                <input
                  type="text"
                  className="rounded-sm outline-none w-[80px] text-black mx-1 mt-2"
                  onChange={(e) => setSubmitInput(e.target.value)}
                  placeholder=""
                />
                " /&gt;
                <br />
                &lt;/form&gt;
                <br />
                &lt;/body&gt; <br />
                &lt;/html&gt;
              </p>
            </div>
          </div>
        </div>
      </LayoutGame>

      <Questionbutton></Questionbutton>
    </div>
  );
};
export default Q14HTML;
