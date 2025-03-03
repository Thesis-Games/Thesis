import React from 'react'
import background from "../picture/background.png";
import LayoutGame from "../gamelevelhtml/LayoutGame";
import TitleHTML from "../gamelevelhtml/TitleHTML";
import Questionbutton from "./Questionbutton";
import { LifeCompontent } from "./LifeCompontent";
const Q10HTML = () => {
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
        <TitleHTML title={"LEVEL 10"} />
      </div>

      <LifeCompontent></LifeCompontent>
      <div className="flex items-center justify-center flex-col relative space-y-6 font-mono">
        <div className="font-bold  text-2xl text-center px-5">
          <h1>
          Fill in the missing syntax to create a table with "Astronaut" and "Mission" columns, and add two rows for "Alice" (Moon) and "Bob" (Mars).

          </h1>
        </div>

        <div className="">
            
        <div className="bg-[#222] text-white font-mono p-1 rounded-md mt-3 overflow-auto max-w-[400px] mx-auto text-[10px]">
 
  <pre className="whitespace-pre-wrap leading-tight">
    {`<html>
  <body>
    <table>
      <tr>
        <td>Astronaut</td>
        <td>Mission</td>
      </tr>
      <tr>
        <td>____</td>
        <td>____</td>
      </tr>
      <tr>
        <td>____</td>
        <td>____</td>
      </tr>
    </table>
  </body>
</html>`}
  </pre>
</div>


        </div>
      </div>
    
    </LayoutGame>
    <Questionbutton></Questionbutton>
  </div>
  )
}

export default Q10HTML

