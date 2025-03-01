import React from "react";
import background from "../picture/moonbg.gif";
import Jslayout from "../Jscomponent/Jslayout";
import Jstittle from "../Jscomponent/Jstittle";
import Jsbutton from "../Jscomponent/Jsbutton";
import { Link } from "react-router-dom";

const Jslvl1 = () => {
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
            <Jstittle title={"LEVEL 1"} />
            <div className="mt-20 text-center space-y-6">
              <h1 className="font-bold text-4xl">Level 1: Variables</h1>
            </div>

            <div className="w-full text-center mt-5 px-10">
              <p className="text-lg text-[#414040]">
                In JavaScript, variables are used to store data values. You can
                declare a variable using let, const, or var.
              </p>
            </div>

            {/* Code Block - Now Centered */}
            <div className="w-full flex justify-center items-center mt-20">
              <div className="bg-[#222] rounded-md text-white text-lg">
                <pre className="whitespace-pre-wrap leading-relaxed   px-9 py-5">
                  <code>
                    <p>Example:</p>
                    {'let planetName = "Mars";'}
                    <br />
                    {"console.log(planetName);"}
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

export default Jslvl1;
