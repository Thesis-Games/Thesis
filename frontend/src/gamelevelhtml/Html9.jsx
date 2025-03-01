import React from 'react'
import background from "../picture/background.png";
import Gamebutton from "./Gamebutton";
import LayoutGame from "./LayoutGame";
import TitleHTML from "./TitleHTML";
const Html9 = () => {
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
        <TitleHTML title={"LEVEL 9  "} />
      </div>

      <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
        <div className="font-bold text-4xl md:text-5xl mt-2">
          <h1>Level 9: Divisions and Grouping</h1>
        </div>
        <div className="p-5 md:py-1 px-5 text-lg text-center md:text-1xl leading-relaxed text-[#414040] ">
          <p>
        The  &lt;div&gt; tag is used to group and organize HTML elements together. It is often used to apply CSS styles or create layouts.

          </p>
        </div>
        <div className="px-10 text-lg leading-relaxed text-[#ffffff] bg-[#222] rounded-md max-w-[600px] mx-auto">
        <p>Example:</p>
  <pre className="whitespace-pre-wrap leading-tight">
    {`<html>
  <body>
    <div class="spaceShip">
      <h2>The Rocket is Ready!</h2>
      <p>Prepare for liftoff in 3, 2, 1...</p>
    </div>
  </body>
</html>`}
  </pre>
</div>
      </div>
     
    </LayoutGame>
    <Gamebutton></Gamebutton>
  </div>
  )
}

export default Html9

