import React from 'react'
import background from "../picture/background.png";
import LayoutGame from "../gamelevelhtml/LayoutGame";
import TitleHTML from "../gamelevelhtml/TitleHTML";
import Questionbutton from "./Questionbutton";
import { LifeCompontent } from "./LifeCompontent";
const Q17HTML = () => {
    const handleInputChange = (e) => {
        const value = e.target.value;
        // Allow only a single character input
        if (value.length > 3) {
          e.target.value = value.slice(0, 3); // Restrict to the first character
        }
      };
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
        <TitleHTML title={"LEVEL 17"} />
      </div>

      <LifeCompontent></LifeCompontent>
      <div className="flex items-center justify-center flex-col relative space-y-6 font-mono">
        <div className="font-bold  text-2xl text-center px-5">
          <h1>
          Fill in the missing syntax to add metadata for the character encoding "UTF-8" and a description "Space Mission".

          </h1>
        </div>

        <div className="">
            
        <div className="bg-[#222] text-white font-mono p-1 rounded-md mt-3 overflow-auto max-w-[700px] mx-auto text-[10px]">
        <div className="bg-[#222] text-white font-mono p-4 rounded-md mt-3 overflow-auto max-w-[700px] w-[500px] mx-auto text-sm">
 
  
<pre className="whitespace-pre-wrap leading-tight">
{`<html>
  <head>
    <meta "____"="UTF-8">
    <meta ___="description" content="___">
  </head>
  <body>
    <h1>Space Mission</h1>
  </body>
</html>`}
</pre>
</div>
</div>


        </div>
      </div>
   
    </LayoutGame>
    <Questionbutton></Questionbutton>
  </div>
  )
}

export default Q17HTML
