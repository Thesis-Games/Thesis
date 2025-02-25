import React from "react";
import background from "../picture/earthbg.gif";
import LayoutGame from "../gamelevelhtml/LayoutGame";
import TitleHTML from "../gamelevelhtml/TitleHTML";
import Questionbutton from "./Questionbutton";
import { LifeCompontent } from "./LifeCompontent";
const Q13HTML = () => {
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
          <TitleHTML title={"LEVEL 13"} />
        </div>

        <LifeCompontent></LifeCompontent>
        <div className="flex items-center justify-center flex-col relative space-y-6 font-mono">
          <div className="font-bold  text-2xl text-center px-10">
            <h1>
              Fill in the missing syntax to emphasize the words "Mission Start"
              in bold and "Important" in italics.
            </h1>
          </div>

          <div className="">
            <div className="text-[#ffffff] bg-[#222] p-5 rounded-md mt-2 text-sl">
              <p>
                &lt;html&gt; <br />
                &lt;body&gt;
                <br />
                &lt;p&gt; &lt;strong&gt;
                <input
                  type="text"
                  placeholder=""
                  className="rounded-sm outline-none w-[110px] text-black mr-2" // Added 'mr-2' for spacing
                  onChange={(e) => handleInputChange(e.target.value)}
                  maxLength={12}
                />
                &lt;/strong&gt;: The rocket is ready for launch.&lt;/p&gt;
                <br />
                <br></br>
                &lt;p&gt; &lt;em&gt;
                <input
                  type="text"
                  placeholder=""
                  className="rounded-sm outline-none w-[80px] text-black mr-2" // Added 'mr-2' for spacing
                  onChange={(e) => handleInputChange(e.target.value)}
                  maxLength={9}
                />
                &lt;/em&gt;:Astronauts must wear suits for safety.&lt;/p&gt;
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

export default Q13HTML;
