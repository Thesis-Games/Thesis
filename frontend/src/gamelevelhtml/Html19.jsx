import React from 'react'
import background from "../picture/background.png";
import Gamebutton from "./Gamebutton";
import LayoutGame from "./LayoutGame";
import TitleHTML from "./TitleHTML";
const Html19 = () => {
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
        <TitleHTML title={"LEVEL 19 "} />
      </div>

      <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
        <div className="font-bold text-4xl md:text-5xl mt-2">
          <h1>Level 19:  Using the style Tag
          </h1>
        </div>
        <div className="p-5 md:py-1 px-5 text-lg text-center md:text-1xl leading-relaxed text-[#414040] ">
          <p>
         The  &lt;&gt; tag is used to add CSS (Cascading Style Sheets) directly into an HTML document.
          </p>
        </div>
        <div className="px-10 text-lg leading-relaxed text-[#ffffff] bg-[#222] rounded-md max-w-[700px] mx-auto font-mono">
        <div className="bg-[#222] text-white font-mono p-4 rounded-md mt-3 overflow-auto max-w-[800px] w-[500px] mx-auto text-sm">

    
        
<p>Example:</p>
<pre className="whitespace-pre-wrap leading-tight">
  {`<html>
  <head>
    <style>
      body {
        background-color: black;
        color: white;
      }
    </style>
  </head>
  <body>
    <h1>Welcome to Space</h1>
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

export default Html19

