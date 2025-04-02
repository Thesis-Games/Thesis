import React from "react";
import background from "../picture/moonbg.gif";
import Jslayout from "../Jscomponent/Jslayout";
import Jstittle from "../Jscomponent/Jstittle";
import Jsbutton from "../Jscomponent/Jsbutton";
import { Link } from "react-router-dom";

const Jsq25 = () => {
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
            <Jstittle title={"LEVEL 25"} />

            <div className="w-full text-center px-3">
              <p className="text-lg text-[#414040]">
                Save and find your rover’s name. Fill in the blank to get it
                back.
              </p>
              <p className="text-sm text-gray-400 mt-2">
                <strong>Hint:</strong> The key used to store the rover’s name is
                `"rover"`. Fill in the blank with this key.
              </p>
            </div>

            {/* Code Block - Now Centered */}
            <div className="w-full flex justify-center items-center mt-10">
              <div className="bg-[#222] rounded-md text-white text-sm">
                <pre className="whitespace-pre-wrap leading-relaxed px-1 py-10">
                  <code>
                    {'localStorage.setItem("rover", "Zoomer");'}
                    <br />
                    {'let roverName = localStorage.getItem("'}
                    <input
                      type="text"
                      placeholder="rover"
                      className="rounded-sm outline-none w-[85px] text-black px-1"
                      maxLength={10}
                    />
                    {'");'}
                    <br />
                    {'console.log(roverName); // Shows "Zoomer"'}
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

export default Jsq25;
