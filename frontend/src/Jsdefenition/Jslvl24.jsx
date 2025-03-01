import React from "react";
import background from "../picture/moonbg.gif";
import Jslayout from "../Jscomponent/Jslayout";
import Jstittle from "../Jscomponent/Jstittle";
import Jsbutton from "../Jscomponent/Jsbutton";
import { Link } from "react-router-dom";

const Jslvl24 = () => {
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
            <Jstittle title={"LEVEL 24"} />
            {/* Title and subtitle */}
            <div className="mt-20 text-center space-y-6">
              <h1 className="font-bold text-4xl">Level 24: SetTimeout
</h1>
            </div>

            <div className="w-full text-center mt-5 px-10">
              {/* Introduction text */}
              <p className="text-lg text-[#414040]">
              setTimeout waits a few seconds before doing something, like finding a Moon rock.

              </p>
            </div>

            {/* Code Block - Now Centered */}
            {/* Code block */}
            <div className="w-full flex justify-center items-center mt-10">
              <div className="bg-[#222] rounded-md text-white text-[10px]   ">
                <pre className="whitespace-pre-wrap leading-relaxed px-9 py-8">
                  <p>Example:</p>
                  <code>
  {"setTimeout(function() {"}
  <br />
  {'  console.log("Found a Moon rock!");'}
  <br />
  {"}, 3000); // Waits 3 seconds"}
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

export default Jslvl24;
