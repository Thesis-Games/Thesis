import React from "react";
import background from "../picture/earthbg.gif";
import LayoutGame from "../gamelevelhtml/LayoutGame";
import TitleHTML from "../gamelevelhtml/TitleHTML";
import Questionbutton from "./Questionbutton";
import { LifeCompontent } from "./LifeCompontent";

const Q25HTML = () => {
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
          <TitleHTML title={"LEVEL 25"} />
        </div>
        <LifeCompontent></LifeCompontent>

        <div className="flex items-center justify-center flex-col relative space-y-6 font-mono mt-5">
          <div className="font-bold text-2xl text-center px-10">
            <h1>
              Fill in the missing syntax to create a checkbox for "Join Space
              Crew" and a submit button.
            </h1>
          </div>

          <div className="  px-6 py-4 mt-20 text-sm leading-relaxed text-white bg-[#222] rounded-md    font-mono">
            <div>
              <p>&lt;html&gt;</p>
              <p className="ml-4">&lt;head&gt;</p>
              <p className="ml-4">&lt;body&gt;</p>
              <p className="ml-8">&lt;form&gt;</p>
              <p className="ml-12">
                &lt;label for="
                <input
                  type="text"
                  className="rounded-sm outline-none w-[80px] text-black mx-1 mt-2"
                  placeholder=""
                />
                "&gt;Join Space Crew&lt;/label&gt;
              </p>
              <p className="ml-12">
                &lt;input type="
                <input
                  type="text"
                  className="rounded-sm outline-none w-[80px] text-black mx-1 mt-2"
                  placeholder=""
                />
                " id="crew" name="crew"&gt;
              </p>
              <p className="ml-12">
                &lt;input type="submit" value="
                <input
                  type="text"
                  className="rounded-sm outline-none w-[80px] text-black mx-1 mt-2 mb-2"
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

export default Q25HTML;
