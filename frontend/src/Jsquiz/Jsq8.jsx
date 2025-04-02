import React from "react";
import background from "../picture/moonbg.gif";
import Jslayout from "../Jscomponent/Jslayout";
import Jstittle from "../Jscomponent/Jstittle";
import Jsbutton from "../Jscomponent/Jsbutton";
import { Link } from "react-router-dom";

const Jsq8 = () => {
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
            <Jstittle title={"LEVEL 8"} />

            <div className="w-full text-center   px-10">
              <p className="text-lg text-[#414040]">
                Click a button to make your rover jump. Fill in the blank for
                the button name.
              </p>
              <p className="text-sm text-gray-400 mt-2">
                <strong>Hint:</strong> The button's ID should go inside the
                quotes.
              </p>
            </div>

            {/* Code Block - Now Centered */}
            <div className="w-full flex justify-center items-center mt-10">
              <div className="bg-[#222] rounded-md text-white text-sm   ">
                <pre className="whitespace-pre-wrap leading-relaxed px-9 py-5">
                  <code>
                    {'document.getElementById("'}
                    <input
                      type="text"
                      placeholder=""
                      className="rounded-sm outline-none w-[85px] text-black px-1"
                      maxLength={20}
                    />
                    {'").addEventListener("click", function() {'}
                    <br />
                    {'  console.log("Rover jumps on the Moon!");'}
                    <br />
                    {"});"}
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

export default Jsq8;
