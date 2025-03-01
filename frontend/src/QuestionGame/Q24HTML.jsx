import React from "react";
import background from "../picture/earthbg.gif";
import LayoutGame from "../gamelevelhtml/LayoutGame";
import TitleHTML from "../gamelevelhtml/TitleHTML";
import Questionbutton from "./Questionbutton";
import { LifeCompontent } from "./LifeCompontent";

const Q24HTML = () => {
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
          <TitleHTML title={"LEVEL 24"} />
        </div>
        <LifeCompontent></LifeCompontent>

        <div className="flex items-center justify-center flex-col relative space-y-6 font-mono mt-5">
          <div className="font-bold text-2xl text-center px-10">
            <h1>
              Meta tags provide metadata for search engines and improve SEO
              (Search Engine Optimization).
            </h1>
          </div>

          <div className="text-[#ffffff] bg-[#222] px-7 py-4 rounded-md text-sm font-mono">
            <div>
              <p>&lt;html&gt;</p>
              <p className="ml-4">&lt;head&gt;</p>
              <p className="ml-8">
                &lt;meta name="
                <input
                  type="text"
                  className="rounded-sm outline-none w-[10px] text-black mx-1 mt-2"
                  placeholder=""
                />
                " content="Astronaut Training Website" &gt;
              </p>
              <p className="ml-8">
                &lt;meta name="
                <input
                  type="text"
                  className="rounded-sm outline-none w-[120px] text-black mx-1 mt-2"
                  placeholder=""
                />
                " content="astronaut, space, mars, moon" &gt;
              </p>
              <p className="ml-4">&lt;/head&gt;</p>
              <p className="ml-4">&lt;body&gt;</p>
              <p className="ml-8">&lt;h1&gt;Astronaut Training&lt;/h1&gt;</p>
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

export default Q24HTML;
