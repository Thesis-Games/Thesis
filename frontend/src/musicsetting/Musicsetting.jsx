import React, { useState } from "react";
import background from "../picture/starbg.gif";
import MusicLayout from "./MusicLayout";

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
        <div className="absolute top-[-130px] left-1/2 transform -translate-x-1/2"></div>

        {/* Music Settings */}
        <div className="w-full flex flex-col items-center relative">
          <div className="w-full text-center">
            <h1 className="text-yellow-400 text-4xl font-bold">Music</h1>

            {/* Sound Slider with Percentage */}
            {/* Sound Slider with Percentage */}
            <div className="flex items-center justify-center mt-6 space-x-4 p-6">
              {/* Slider with Effects */}
              <Slider.Root
                className="relative flex items-center w-[80%] h-8 mx-auto group"
                defaultValue={[sound]}
                max={100}
                step={1}
                onValueChange={(value) => setSound(value[0])}
              >
                {/* Slider Track */}
                <Slider.Track className="bg-gray-700 bg-opacity-40 backdrop-blur-sm relative flex-grow h-4 rounded-full transition-all duration-500 ease-in-out group-hover:shadow-[0_0_10px_#facc15]">
                  {/* Slider Range with Glow Effect */}
                  <Slider.Range className="absolute bg-yellow-400 h-full rounded-full transition-all duration-500 ease-in-out group-hover:shadow-[0_0_20px_#facc15] group-hover:bg-yellow-300" />
                </Slider.Track>

                {/* Slider Thumb with Hover, Drag and Pulse Effects */}
                <Slider.Thumb
                  className="block w-8 h-8 bg-yellow-400 rounded-full shadow-xl cursor-pointer transition-transform duration-300 ease-out hover:scale-125 hover:shadow-[0_0_20px_#facc15] focus:outline-none focus:ring-4 focus:ring-yellow-300 animate-pulse"
                  aria-label="Sound Slider"
                />
              </Slider.Root>

              {/* Percentage Display */}
              <span className="text-yellow-400 text-xl font-bold w-12">
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
