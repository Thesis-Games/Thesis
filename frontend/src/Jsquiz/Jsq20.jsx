import React from "react";
import background from "../picture/moonbg.gif";
import Jslayout from "../Jscomponent/Jslayout";
import Jstittle from "../Jscomponent/Jstittle";
import Jsbutton from "../Jscomponent/Jsbutton";
import { Link } from "react-router-dom";

const Jsq20 = () => {
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
            <Jstittle title={"LEVEL 20"} />

            <div className="w-full text-center px-10">
              <p className="text-lg text-[#414040]">
                Wait for your rover to jump. Fill in the blank to make it
                simple.
              </p>
              <p className="text-sm text-gray-400 mt-2">
                <strong>Hint:</strong> The callback function should handle
                success.
              </p>
            </div>

            {/* Code Block - Now Centered */}
            <div className="w-full flex justify-center items-center mt-2">
              <div className="bg-[#222] rounded-md text-white text-sm">
                <pre className="whitespace-pre-wrap leading-relaxed px-9 py-1">
                  <code>
                    {"async function roverJump() {"}
                    <br />
                    {"  let result = await new Promise(function("}
                    <input
                      type="text"
                      placeholder="resolve"
                      className="rounded-sm outline-none w-[85px] text-black px-1"
                      maxLength={10}
                    />
                    {") {"}
                    <br />
                    {"    setTimeout(function() {"}
                    <br />
                    {'      ok("Rover jumps on the Moon!");'}
                    <br />
                    {"    }, 2000);"}
                    <br />
                    {"  });"}
                    <br />
                    {"  console.log(result);"}
                    <br />
                    {"}"}
                    <br />
                    <br />
                    {"roverJump();"}
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

export default Jsq20;
