import React from 'react'
import background from "../picture/background.png";
import Gamebutton from "./Gamebutton";
import LayoutGame from "./LayoutGame";
import TitleHTML from "./TitleHTML";
const Html7 = () => {
  return (
    <div
    className="w-full h-screen relative flex items-center justify-center flex-col"
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <LayoutGame>
      <div>
        <TitleHTML title={"LEVEL 7  "} />
      </div>

      <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
        <div className="font-bold text-4xl md:text-5xl mt-2">
          <h1>Level 7: Embedding Audio</h1>
        </div>
        <div className="p-5 md:py-1 px-5 text-lg text-center md:text-1xl leading-relaxed text-[#414040] ">
          <p>
          The  &lt;audio&gt; tag is used to embed audio files into a webpage. You can control the playback with the controls attribute.
          </p>
        </div>
        <div className="px-10 text-lg leading-relaxed text-[#ffffff] bg-[#222] rounded-md max-w-[600px] mx-auto">
          <p>Example:</p>
          <p>
            &lt;html&gt; <br></br>
            &lt;body&gt;
            <br></br>
            &lt;audio  src="space_ambience.mp3"controls()"&gt;&lt;/audio&gt;
            <br></br>
            &lt;/body&gt; <br></br>&lt;/html&gt;
          </p>
        </div>
      </div>
      
    </LayoutGame>
    <Gamebutton></Gamebutton>
  </div>
  )
}

export default Html7
