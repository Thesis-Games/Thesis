import React from "react";
import background from "../picture/moonbg.gif";
import Jslayout from "../Jscomponent/Jslayout";
import Jstittle from "../Jscomponent/Jstittle";
import Jsbutton from "../Jscomponent/Jsbutton";
import { Link } from "react-router-dom";

const Jslvl7 = () => {
  /**
   * Component for the Level 7 page.
   * @returns {React.ReactElement}
   */
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
          <div className="w-full h-full flex flex-col  font-mono">
            <Jstittle title={"LEVEL 7"} />
            {/* Title and subtitle */}
            <div className="mt-20 text-center space-y-6">
              <h1 className="font-bold text-4xl">Level 7: Objects</h1>
            </div>

            <div className="w-full text-center mt-5 px-10">
              {/* Introduction text */}
              <p className="text-lg text-[#414040]">
                Objects are collections of key-value pairs used to store
                multiple values.
              </p>
            </div>

            {/* Code Block - Now Centered */}
            {/* Code block */}
            <div className="w-full flex justify-center items-center mt-10">
              <div className="bg-[#222] rounded-md text-white text-sm   ">
                <pre className="whitespace-pre-wrap leading-relaxed px-9 py-5">
                  {/* Example code */}
                  <code>
                    <p>Example:</p>
                    {"let spaceship = {"}
                    <br />
                    {'  name: "Voyager",'}
                    <br />
                    {'  type: "Explorer",'}
                    <br />
                    {"  speed: 15000"}
                    <br />
                    {"};"}
                    <br />
                    <br />
                    {"console.log(spaceship.name); // Output: Voyager"}
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

export default Jslvl7;
