import React from "react";
import background from "../picture/moonbg.gif";
import Jslayout from "../Jscomponent/Jslayout";
import Jstittle from "../Jscomponent/Jstittle";
import Jsbutton from "../Jscomponent/Jsbutton";
import { Link } from "react-router-dom";

const Jslvl19 = () => {
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
            <Jstittle title={"LEVEL 19"} />
            {/* Title and subtitle */}
            <div className="mt-20 text-center space-y-6">
              <h1 className="font-bold text-4xl">Level 19: Promises
</h1>
            </div>

            <div className="w-full text-center mt-5 px-10">
              {/* Introduction text */}
              <p className="text-lg text-[#414040]">
              Promises are like promises the computer makes to do something, like landing safely or not.

              </p>
            </div>

            {/* Code Block - Now Centered */}
            {/* Code block */}
            <div className="w-full flex justify-center items-center mt-3">
              <div className="bg-[#222] rounded-md text-white text-[10px]   ">
                <pre className="whitespace-pre-wrap leading-relaxed px-9 py-1">
                  <p>Example:</p>
                  <code>
        {"let mission = new Promise(function(ok, notOk) {"}
        <br />
        {"  let success = true;"}
        <br />
        <br />
        {"  if (success) {"}
        <br />
        {'    ok("Moon landing worked!");'}
        <br />
        {"  } else {"}
        <br />
        {'    notOk("Moon landing failed.");'}
        <br />
        {"  }"}
        <br />
        {"});"}
        <br />
        <br />
        {"mission.then(function(message) {"}
        <br />
        {"  console.log(message);"}
        <br />
        {"}).catch(function(message) {"}
        <br />
        {"  console.log(message);"}
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

export default Jslvl19;
