import React, { useState } from "react";
import background from "../picture/starbg.gif";
import MusicLayout from "./MusicLayout";
import ribbon from "../picture/ribbon.png";
import Musicbutton from "./Musicbutton";
import * as Slider from "@radix-ui/react-slider"; // Ensure this is installed

const Musicsetting = () => {
  const [sound, setSound] = useState(50); // Default sound value at 50

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <MusicLayout>
        {/* Ribbon with title */}
        <div className="absolute top-[-130px] left-1/2 transform -translate-x-1/2">
          <img
            src={ribbon}
            alt="Ribbon"
            className="w-[455px] h-auto max-w-none"
          />
          <svg
            width="450"
            height="150"
            className="absolute top-[48%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <path
              id="curve"
              d="M30,110 Q225,20 420,110"
              fill="transparent"
              stroke="transparent"
            />
            <text fontSize="40" fontWeight="bold" fill="#000">
              <textPath href="#curve" startOffset="50%" textAnchor="middle">
                Music Settings
              </textPath>
            </text>
          </svg>
        </div>

        {/* Music Settings */}
        <div className="w-full flex flex-col items-center relative">
          <div className="w-full text-center">
            <h1 className="text-yellow-400  text-4xl font-bold">Music</h1>

            {/* Sound Slider with Percentage */}
            <div className="flex items-center justify-center mt-6 space-x-4 p-6">
              {/* Slider */}
              <Slider.Root
                className="relative flex items-center w-[80%] h-8 mx-auto"
                defaultValue={[sound]}
                max={100}
                step={1}
                onValueChange={(value) => setSound(value[0])}
              >
                <Slider.Track className="bg-gray-500 relative flex-grow h-4 rounded-full">
                  <Slider.Range className="absolute bg-yellow-400 h-full rounded-full" />
                </Slider.Track>
                <Slider.Thumb
                  className="block w-8 h-8 bg-yellow-400 rounded-full shadow-xl cursor-pointer"
                  aria-label="Sound Slider"
                />
              </Slider.Root>

              {/* Percentage Display */}
              <span className="text-white text-xl font-bold w-12">
                {sound}%
              </span>
            </div>
          </div>
        </div>
      </MusicLayout>

      {/* Music Button */}
      <Musicbutton />
    </div>
  );
};

export default Musicsetting;
