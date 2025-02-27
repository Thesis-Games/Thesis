import React from 'react'
import background from "../picture/background.png";
import LayoutGame from "../gamelevelhtml/LayoutGame";
import TitleHTML from "../gamelevelhtml/TitleHTML";
import Questionbutton from "./Questionbutton";
import { LifeCompontent } from "./LifeCompontent";
const Q6HTML = () => {
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
              <TitleHTML title={"LEVEL 6"} />
            </div>
    
            <LifeCompontent></LifeCompontent>
            <div className="flex items-center justify-center flex-col relative space-y-6 font-mono">
              <div className="font-bold  text-2xl text-center px-5">
                <h1>
                Fill in the missing syntax to create a button with the text "Launch Rocket".
                </h1>
              </div>
    
              <div className="">
                <div className="text-[#ffffff] bg-[#222] p-5 rounded-md">
                  <p>
                    &lt;html&gt; <br></br>
                    &lt;body&gt;
                    <br></br>
                    &lt;button onclick="<input
                      type="text"
                      placeholder=""
                      className="rounded-sm outline-none w-[30px] text-black"
                      onChange={handleInputChange} // Add the onChange handler here
                      maxLength={10} // Ensure only one character can be entered
                    />"&gt; 
                    <br></br>
                    &lt;/body&gt; <br></br>&lt;/html&gt;
                  </p>
                </div>
              </div>
            </div>
            <Questionbutton></Questionbutton>
          </LayoutGame>
        </div>
      );
}

export default Q6HTML
