import React from "react";
import background from "../picture/moonbg.gif";
import Jslayout from "../Jscomponent/Jslayout";
import Jstittle from "../Jscomponent/Jstittle";
import Jsbutton from "../Jscomponent/Jsbutton";
import { Link } from "react-router-dom";

const Jsq1 = () => {
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
          <div className="w-full h-full flex flex-col  items-center justify-center font-mono">
            <Jstittle title={"LEVEL 1"} />

            <div className="w-full text-center mt-5 px-10">
              <p className="text-lg text-[#414040]">
                Fill in the missing syntax to declare a variable for the
                spaceship name.
              </p>
              {/* Hint Inside the same block */}
              <p className="text-sm text-gray-400 mt-2">
                <strong>Hint:</strong> Use the <code>let</code> keyword to
                declare a variable, and <code>console.log()</code> to output the
                value of the variable.
              </p>
            </div>

            {/* Code Block - Now Centered */}
            <div className="w-full flex justify-center items-center mt-10">
              <div className="bg-[#222] rounded-md text-white text-sm">
                <pre className="whitespace-pre-wrap leading-relaxed px-9 py-5">
                  <code>
                    {"let "}
                    <input
                      type="text"
                      placeholder=""
                      className="rounded-sm outline-none w-[85px] text-black px-1"
                      maxLength={10}
                    />
                    {' = "Starship";'}
                    <br />
                    {"console.log("}
                    <input
                      type="text"
                      placeholder=""
                      className="rounded-sm outline-none w-[85px] text-black px-1 mt-2"
                      maxLength={10}
                    />
                    {");"}
                    <br />
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

export default Jsq1;
