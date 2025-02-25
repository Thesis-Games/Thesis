import React from "react";
import background from "../picture/earthbg.gif";
import LayoutGame from "../gamelevelhtml/LayoutGame";
import TitleHTML from "../gamelevelhtml/TitleHTML";
import Questionbutton from "./Questionbutton";
import { LifeCompontent } from "./LifeCompontent";

const Q23HTML = () => {
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
          <TitleHTML title={"LEVEL 23"} />
        </div>
        <LifeCompontent></LifeCompontent>

        <div className="flex items-center justify-center flex-col relative space-y-6 font-mono mt-5">
          <div className="font-bold text-2xl text-center px-10">
            <h1>
              Fill in the missing syntax to make links to Mars missions turn
              blue when hovered.
            </h1>
          </div>

          <div className="text-[#ffffff] bg-[#222] px-7  py-4 rounded-md text-sm font-mono">
            <div className="">
              <p>&lt;html&gt;</p>
              <p className="ml-4 ">&lt;head&gt;</p>
              <p className="ml-8">&lt;style&gt;</p>
              <p className="ml-12">
                a:hover &#123; color:
                <input
                  type="text"
                  className="rounded-sm outline-none w-[35px] text-black mx-1 mt-2"
                  placeholder=""
                  maxLength={4}
                />
                ; &#125;
              </p>
              <p className="ml-8">&lt;/style&gt;</p>
              <p className="ml-4">&lt;/head&gt;</p>
              <p className="ml-4">&lt;body&gt;</p>
              <p className="ml-8">
                &lt;a href="
                <input
                  type="text"
                  className="rounded-sm outline-none w-[155px] text-black mx-1 mt-2"
                  placeholder=""
                />
                " &gt;Visit Mars Missions&lt;/a&gt;
              </p>
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

export default Q23HTML;
