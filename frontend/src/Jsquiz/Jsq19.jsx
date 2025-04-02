import React from "react";
import background from "../picture/moonbg.gif";
import Jslayout from "../Jscomponent/Jslayout";
import Jstittle from "../Jscomponent/Jstittle";
import Jsbutton from "../Jscomponent/Jsbutton";
import { Link } from "react-router-dom";

const Jsq19 = () => {
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
            <Jstittle title={"LEVEL 19"} />

            <div className="w-full text-center px-10">
              <p className="text-lg text-[#414040]">
                Promise your rover will land safely. Fill in the blank to check
                if it works.
              </p>
              <p className="text-sm text-gray-400 mt-2">
                <strong>Hint:</strong> Use `success` to ensure the rover lands.
              </p>
            </div>

            {/* Code Block - Now Centered */}
            <div className="w-full flex justify-center items-center mt-2">
              <div className="bg-[#222] rounded-md text-white text-sm">
                <pre className="whitespace-pre-wrap leading-relaxed px-9 py-1">
                  <code>
                    {"let landing = new Promise(function(ok, notOk) {"}
                    <br />
                    {"  let success = true;"}
                    <br />
                    <br />
                    {"  if ("}
                    <input
                      type="text"
                      placeholder="success"
                      className="rounded-sm outline-none w-[85px] text-black px-1"
                      maxLength={15}
                    />
                    {") {"}
                    <br />
                    {'    ok("Rover landed safely on the Moon!");'}
                    <br />
                    {"  } else {"}
                    <br />
                    {'    notOk("Rover crashed!");'}
                    <br />
                    {"  }"}
                    <br />
                    {"});"}
                    <br />
                    <br />
                    {"landing.then(function(message) {"}
                    <br />
                    {"  console.log(message);"}
                    <br />
                    {"}).catch(function(message) {"}
                    <br />
                    {"  console.log(message);"}
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

export default Jsq19;
