import React from "react";
import background from "../picture/moonbg.gif";
import Jslayout from "../Jscomponent/Jslayout";
import Jstittle from "../Jscomponent/Jstittle";
import Jsbutton from "../Jscomponent/Jsbutton";
import { Link } from "react-router-dom";

const Jsq15 = () => {
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
            <Jstittle title={"LEVEL 15"} />

            <div className="w-full text-center   px-10">
              <p className="text-lg text-[#414040]">
                Track your rover on the Moon. Fill in the blank to use a global
                variable.
              </p>
              <p className="text-sm text-gray-400 mt-2">
                <strong>Hint:</strong> Create a global variable that holds the
                rover's name, then use it inside the function.
              </p>
            </div>

            {/* Code Block - Now Centered */}
            <div className="w-full flex justify-center items-center mt-10">
              <div className="bg-[#222] rounded-md text-white text-sm   ">
                <pre className="whitespace-pre-wrap leading-relaxed px-9 py-5">
                  <code>
                    {"let "}
                    <input
                      type="text"
                      placeholder=""
                      className="rounded-sm outline-none w-[100px] text-black px-1"
                      maxLength={10}
                    />
                    {' = "Zoomer";'}
                    <br />
                    <br />
                    {"function checkRover() {"}
                    <br />
                    {'  console.log("Finding " + '}
                    <input
                      type="text"
                      placeholder=""
                      className="rounded-sm outline-none w-[100px] text-black px-1"
                      maxLength={10}
                    />
                    {' + " on the Moon.");'}
                    <br />
                    {"}"}
                    <br />
                    <br />
                    {"checkRover();"}
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

export default Jsq15;
