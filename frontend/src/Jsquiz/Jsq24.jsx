import React from "react";
import background from "../picture/moonbg.gif";
import Jslayout from "../Jscomponent/Jslayout";
import Jstittle from "../Jscomponent/Jstittle";
import Jsbutton from "../Jscomponent/Jsbutton";
import { Link } from "react-router-dom";

const Jsq24 = () => {
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
          <div className="w-full h-full flex flex-col items-center justify-center font-mono">
            <Jstittle title={"LEVEL 24"} />

            <div className="w-full text-center px-3">
              <p className="text-lg text-[#414040]">
                Wait for your rover to find something cool. Fill in the blank
                for the wait time.
              </p>
              <p className="text-sm text-gray-400 mt-2">
                <strong>Hint:</strong> You will need to provide the wait time in
                milliseconds. For example, 3000 represents 3 seconds.
              </p>
            </div>

            {/* Code Block - Now Centered */}
            <div className="w-full flex justify-center items-center mt-10">
              <div className="bg-[#222] rounded-md text-white text-sm">
                <pre className="whitespace-pre-wrap leading-relaxed px-1 py-10">
                  <code>
                    {"setTimeout(function() {"}
                    <br />
                    {'  console.log("Rover found a shiny rock on the Moon!");'}
                    <br />
                    {"}, "}
                    <input
                      type="text"
                      placeholder="3000"
                      className="rounded-sm outline-none w-[85px] text-black px-1"
                      maxLength={10}
                    />
                    {"); // Waits 3 seconds"}
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

export default Jsq24;
