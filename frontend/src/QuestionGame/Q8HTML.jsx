import React from 'react'
import background from "../picture/background.png";
import LayoutGame from "../gamelevelhtml/LayoutGame";
import TitleHTML from "../gamelevelhtml/TitleHTML";
import Questionbutton from "./Questionbutton";
import { LifeCompontent } from "./LifeCompontent";
const Q8HTML = () => {
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
              <TitleHTML title={"LEVEL 8"} />
            </div>
    
            <LifeCompontent></LifeCompontent>
            <div className="flex items-center justify-center flex-col relative space-y-6 font-mono">
              <div className="font-bold  text-2xl text-center px-5">
                <h1>
                Fill in the missing syntax to create a form for the astronaut's name.

                </h1>
              </div>
    
              <div className="">
              <div className="text-[#ffffff] bg-[#222] p-5 rounded-md  w-[500px]">
  <p>&lt;html&gt;</p>
  <p>&lt;body&gt;</p>
  <p>&lt;form action="controls"&gt;</p>

  <input
    type="text"
    name="astronautName"
    placeholder="Enter astronaut name"
    className="rounded-sm outline-none w-[250px] text-black px-2 py-1"
  />
  <br />
  
  <input
    type="submit"
    value="Submit"
    className="bg-[#444] text-white px-3 py-1 mt-2 rounded cursor-pointer"
  />

  <p>&lt;/form&gt;</p>
  <p>&lt;/body&gt;</p>
  <p>&lt;/html&gt;</p>
</div>

              </div>
            </div>
            
          </LayoutGame>
          <Questionbutton></Questionbutton>
        </div>
  )
}

export default Q8HTML

