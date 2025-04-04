import React from "react";
import background from "../picture/moonbg.gif";
import Jslayout from "../Jscomponent/Jslayout";
import Jstittle from "../Jscomponent/Jstittle";
import Jsbutton from "../Jscomponent/Jsbutton";
import { Link } from "react-router-dom";

const Jsq21 = () => {
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
            <Jstittle title={"LEVEL 21"} />

            <div className="w-full text-center px-3">
              <p className="text-lg text-[#414040]">
                Click a button to make your rover move. Fill in the blank for
                the button name.
              </p>
              <p className="text-sm text-gray-400 mt-2">
                <strong>Hint:</strong> You need to reference the button's ID.
              </p>
            </div>

            {/* Code Block - Now Centered */}
            <div className="w-full flex justify-center items-center mt-10">
              <div className="bg-[#222] rounded-md text-white text-sm">
                <pre className="whitespace-pre-wrap leading-relaxed px-1 py-10">
                  <code>
                    {'document.getElementById("'}
                    <input
                      type="text"
                      placeholder="buttonID"
                      className="rounded-sm outline-none w-[120px] text-black px-1"
                      maxLength={15}
                    />
                    {'").addEventListener("click", function() {'}
                    <br />
                    {'  console.log("Rover moves on the Moon!");'}
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

export default Jsq21;
