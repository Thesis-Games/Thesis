import React from "react";
import background from "../picture/moonbg.gif";
import Jslayout from "../Jscomponent/Jslayout";
import Jstittle from "../Jscomponent/Jstittle";
import Jsbutton from "../Jscomponent/Jsbutton";
import { Link } from "react-router-dom";

const Jsq18 = () => {
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
            <Jstittle title={"LEVEL 18"} />

            <div className="w-full text-center   px-10">
              <p className="text-lg text-[#414040]">
                Land your rover and celebrate. Fill in the blank for the
                callback.
              </p>
              <p className="text-sm text-gray-400 mt-2">
                <strong>Hint:</strong> The callback is a function that will run
                once the rover has landed, like celebrating the successful
                landing.
              </p>
            </div>

            {/* Code Block - Now Centered */}
            <div className="w-full flex justify-center items-center mt-10">
              <div className="bg-[#222] rounded-md text-white text-sm   ">
                <pre className="whitespace-pre-wrap leading-relaxed px-9 py-5">
                  <code>
                    {"function landRover(rover, callback) {"}
                    <br />
                    {'  console.log("Landing " + rover + " on the Moon...");'}
                    <br />
                    {"  callback();"}
                    <br />
                    {"}"}
                    <br />
                    <br />
                    {"function yay() {"}
                    <br />
                    {'  console.log("Yay, rover landed!");'}
                    <br />
                    {"}"}
                    <br />
                    <br />
                    {'landRover("Zoomer", '}
                    <input
                      type="text"
                      placeholder="callback"
                      className="rounded-sm outline-none w-[85px] text-black px-1"
                      maxLength={10}
                    />
                    {");"}
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

export default Jsq18;
