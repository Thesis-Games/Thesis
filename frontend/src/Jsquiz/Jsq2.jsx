import React from "react";
import background from "../picture/moonbg.gif";
import Jslayout from "../Jscomponent/Jslayout";
import Jstittle from "../Jscomponent/Jstittle";
import Jsbutton from "../Jscomponent/Jsbutton";
import { Link } from "react-router-dom";

const Jsq2 = () => {
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
            <Jstittle title={"LEVEL 2"} />

            <div className="w-full text-center   px-10">
              <p className="text-lg text-[#414040]">
                You’re on the Moon and need to write down simple facts. Fill in
                the blanks for a number (Moon’s gravity) and a yes/no answer (is
                it quiet).
              </p>

              <p className="text-sm text-gray-400 mt-2">
                <strong>Hint:</strong> Use a number for gravity and{" "}
                <code>true</code> or <code>false</code> for quietness.
              </p>
            </div>

            {/* Code Block - Now Centered */}
            <div className="w-full flex justify-center items-center mt-10">
              <div className="bg-[#222] rounded-md text-white text-sm   ">
                <pre className="whitespace-pre-wrap leading-relaxed px-9 py-5">
                  <code>
                    {"let moonGravity = "}
                    <input
                      type="text"
                      placeholder=""
                      className="rounded-sm outline-none w-[35px] text-black px-1"
                      maxLength={3}
                    />

                    <br />
                    {"let isMoonQuiet = "}
                    <input
                      type="text"
                      placeholder=""
                      className="rounded-sm outline-none w-[45px] text-black px-1 mt-2"
                      maxLength={4}
                    />

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

export default Jsq2;
