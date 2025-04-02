import React from "react";
import background from "../picture/moonbg.gif";
import Jslayout from "../Jscomponent/Jslayout";
import Jstittle from "../Jscomponent/Jstittle";
import Jsbutton from "../Jscomponent/Jsbutton";
import { Link } from "react-router-dom";

const Jsq10 = () => {
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
            <Jstittle title={"LEVEL 10"} />

            <div className="w-full text-center   px-10">
              <p className="text-lg text-[#414040]">
                Check the Moon’s condition. Fill in the blank to pick a state.
              </p>
              <p className="text-sm text-gray-400 mt-2">
                <strong>Hint:</strong> Choose the correct Moon condition to fill
                in the blank.
              </p>
            </div>

            {/* Code Block - Now Centered */}
            <div className="w-full flex justify-center items-center mt-10">
              <div className="bg-[#222] rounded-md text-white text-sm   ">
                <pre className="whitespace-pre-wrap leading-relaxed px-9 py-5">
                  <code>
                    {'let moonCondition = "'}
                    <input
                      type="text"
                      placeholder=""
                      className="rounded-sm outline-none w-[45px] text-black px-1"
                      maxLength={15}
                    />
                    {'";'}
                    <br />
                    <br />
                    {"switch (moonCondition) {"}
                    <br />
                    {'  case "safe":'}
                    <br />
                    {'    console.log("The Moon is safe to play on!");'}
                    <br />
                    {"    break;"}
                    <br />
                    {'  case "rocky":'}
                    <br />
                    {'    console.log("The Moon is bumpy!");'}
                    <br />
                    {"    break;"}
                    <br />
                    {"  default:"}
                    <br />
                    {'    console.log("Unknown Moon condition!");'}
                    <br />
                    {"}"}
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

export default Jsq10;
