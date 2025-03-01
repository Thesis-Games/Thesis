import React from 'react'
import background from "../picture/background.png";
import Gamebutton from "./Gamebutton";
import LayoutGame from "./LayoutGame";
import TitleHTML from "./TitleHTML";
const Html18 = () => {
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
        <TitleHTML title={"LEVEL 18 "} />
      </div>

      <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
        <div className="font-bold text-4xl md:text-5xl mt-2">
          <h1>Level 18: Embedding Google Maps
          </h1>
        </div>
        <div className="p-5 md:py-1 px-5 text-lg text-center md:text-1xl leading-relaxed text-[#414040] ">
          <p>
         The  &lt;iframe&gt; tag is used to embed external content, like Google Maps, into a webpage.
          </p>
        </div>
        <div className="px-10 text-lg leading-relaxed text-[#ffffff] bg-[#222] rounded-md max-w-[700px] mx-auto font-mono">
        <div className="bg-[#222] text-white font-mono p-4 rounded-md mt-3 overflow-auto max-w-[800px] w-[500px] mx-auto text-sm">

    
        <p>Example:</p>
<pre className="whitespace-pre-wrap leading-tight">
  {`<html>
  <body>
    <iframe src="https://www.google.com/maps" width="600" height="450"></iframe>
  </body>
</html>`}
</pre>

  </div>
</div>

      </div>
      
    </LayoutGame>
    <Gamebutton></Gamebutton>
  </div>
  )
}

export default Html18
