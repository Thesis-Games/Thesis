import React from "react";
import background from "../picture/moonbg.gif";
import Jslayout from "../Jscomponent/Jslayout";
import Jstittle from "../Jscomponent/Jstittle";
import Jsbutton from "../Jscomponent/Jsbutton";
import { Link } from "react-router-dom";

const Jsq17 = () => {
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
            <Jstittle title={"LEVEL 17"} />

            <div className="w-full text-center   px-10">
              <p className="text-lg text-[#414040]">
                Make your rover do a cool action on the Moon. Fill in the blank
                for the action.
              </p>
              <p className="text-sm text-gray-400 mt-2">
                <strong>Hint:</strong> Pick a fun action for the rover, like
                rolling or zooming across the Moon.
              </p>
              ``
            </div>

            {/* Code Block - Now Centered */}
            <div className="w-full flex justify-center items-center mt-10">
              <div className="bg-[#222] rounded-md text-white text-sm   ">
                <pre className="whitespace-pre-wrap leading-relaxed px-9 py-5">
                  <code>
                    {"let moonRover = {"}
                    <br />
                    {'  name: "Zoomer",'}
                    <br />
                    {"  "}
                    <input
                      type="text"
                      placeholder=""
                      className="rounded-sm outline-none w-[85px] text-black px-1"
                      maxLength={10}
                    />
                    {": function() {"}
                    <br />
                    {'    console.log(this.name + " rolls fast on the Moon!");'}
                    <br />
                    {"  }"}
                    <br />
                    {"};"}
                    <br />
                    <br />
                    {"moonRover.roll();"}
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

export default Jsq17;
