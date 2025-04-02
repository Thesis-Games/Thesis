import React from "react";
import background from "../picture/moonbg.gif";
import Jslayout from "../Jscomponent/Jslayout";
import Jstittle from "../Jscomponent/Jstittle";
import Jsbutton from "../Jscomponent/Jsbutton";
import { Link } from "react-router-dom";

const Jsq16 = () => {
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
            <Jstittle title={"LEVEL 16"} />

            <div className="w-full text-center   px-10">
              <p className="text-lg text-[#414040]">
                Add a new Moon spot to your list. Fill in the blank to use the
                add trick.
              </p>
              <p className="text-sm text-gray-400 mt-2">
                <strong>Hint:</strong> Use the array method that allows you to
                add a new element to the end of the list.
              </p>
            </div>

            {/* Code Block - Now Centered */}
            <div className="w-full flex justify-center items-center mt-10">
              <div className="bg-[#222] rounded-md text-white text-sm   ">
                <pre className="whitespace-pre-wrap leading-relaxed px-9 py-5">
                  <code>
                    {'let moonPlaces = ["Big Crater", "Quiet Spot"];'}
                    <br />
                    {"moonPlaces."}
                    <input
                      type="text"
                      placeholder=""
                      className="rounded-sm outline-none w-[85px] text-black px-1"
                      maxLength={10}
                    />
                    {'("Shiny Rocks");'}
                    <br />
                    {"console.log(moonPlaces);"}
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

export default Jsq16;
