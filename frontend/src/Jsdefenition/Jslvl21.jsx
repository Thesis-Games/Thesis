import React from "react";
import background from "../picture/moonbg.gif";
import Jslayout from "../Jscomponent/Jslayout";
import Jstittle from "../Jscomponent/Jstittle";
import Jsbutton from "../Jscomponent/Jsbutton";
import { Link } from "react-router-dom";

const Jslvl21 = () => {
  /**
   * Component for the Level 7 page.
   * @returns {React.ReactElement}
   */
  return (
    <>
      <div
        className="w-full h-screen flex flex-col items-center justify-center relative"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Jslayout>
          <div className="w-full h-full flex flex-col  font-mono">
            <Jstittle title={"LEVEL 21"} />
            {/* Title and subtitle */}
            <div className="mt-20 text-center space-y-6">
              <h1 className="font-bold text-4xl">Level 21: DOM Manipulation (Selecting Elements)
</h1>
            </div>

            <div className="w-full text-center mt-5 px-10">
              {/* Introduction text */}
              <p className="text-lg text-[#414040]">
              You can make buttons on a website do fun things, like starting your rover.

              </p>
            </div>

            {/* Code Block - Now Centered */}
            {/* Code block */}
            <div className="w-full flex justify-center items-center mt-3">
              <div className="bg-[#222] rounded-md text-white text-[10px]   ">
                <pre className="whitespace-pre-wrap leading-relaxed px-5 py-10">
                  <p>Example:</p>
                  <code>
  {"document.getElementById(\"moonButton\").addEventListener(\"click\", function() {"}
  <br />
  {'  alert("Rover starts exploring!");'}
  <br />
  {"});"}
</code>
                </pre>
              </div>
            </div>
          </div>
        </Jslayout>
        <Jsbutton />
      </div>
    </>
  );
};

export default Jslvl21;
