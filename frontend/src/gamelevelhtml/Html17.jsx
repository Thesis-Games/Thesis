import React from 'react'
import background from "../picture/background.png";
import Gamebutton from "./Gamebutton";
import LayoutGame from "./LayoutGame";
import TitleHTML from "./TitleHTML";

const Html17 = () => {
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
        <TitleHTML title={"LEVEL 17 "} />
      </div>

      <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
        <div className="font-bold text-4xl md:text-5xl mt-2">
          <h1>Level 17: Adding Metadata
          </h1>
        </div>
        <div className="p-5 md:py-1 px-5 text-lg text-center md:text-1xl leading-relaxed text-[#414040] ">
          <p>
          Metadata provides information about the HTML document, like character encoding and keywords. The  &lt;meta&gt;tag is used to add metadata.
          </p>
        </div>
        <div className="px-10 text-lg leading-relaxed text-[#ffffff] bg-[#222] rounded-md max-w-[700px] mx-auto font-mono">
        <div className="bg-[#222] text-white font-mono p-4 rounded-md mt-3 overflow-auto max-w-[800px] w-[500px] mx-auto text-sm">

    
        <p>Example:</p>
<pre className="whitespace-pre-wrap leading-tight">
  {`<html>
  <head>
    <meta charset="UTF-8">
    <meta name="description" content="Space Exploration Website">
  </head>
  <body>
    <h1>Space Adventure</h1>
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

export default Html17
