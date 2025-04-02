import React from "react";
import background from "../picture/moonbg.gif";
import Jslayout from "../Jscomponent/Jslayout";
import Jstittle from "../Jscomponent/Jstittle";
import Jsbutton from "../Jscomponent/Jsbutton";
import { Link } from "react-router-dom";

const Jsq12 = () => {
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
            <Jstittle title={"LEVEL 12"} />

            <div className="w-full text-center   px-10">
              <p className="text-lg text-[#414040]">
                Check if your rover is ready. Fill in the blank to use a quick
                yes/no check.
              </p>

              <p className="text-sm text-gray-400 mt-2">
                <strong>Hint:</strong> Use a quick yes/no check to determine if
                the rover is ready.
              </p>
            </div>

            {/* Code Block - Now Centered */}
            <div className="w-full flex justify-center items-center mt-10">
              <div className="bg-[#222] rounded-md text-white text-sm   ">
                <pre className="whitespace-pre-wrap leading-relaxed px-9 py-5">
                  <code>
                    {"let roverReady = "}
                    <input
                      type="text"
                      placeholder=""
                      className="rounded-sm outline-none w-[50px] text-black px-1"
                      maxLength={5}
                    />
                    {";"}
                    <br />
                    {
                      'let message = roverReady === "yes" ? "Rover is ready!" : "Rover needs help!";'
                    }
                    <br />
                    {"console.log(message);"}
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

export default Jsq12;
