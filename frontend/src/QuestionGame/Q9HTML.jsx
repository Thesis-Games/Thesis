import React from 'react'
import background from "../picture/background.png";
import LayoutGame from "../gamelevelhtml/LayoutGame";
import TitleHTML from "../gamelevelhtml/TitleHTML";
import Questionbutton from "./Questionbutton";
import { LifeCompontent } from "./LifeCompontent";
const Q9HTML = () => {
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
        <TitleHTML title={"LEVEL 9"} />
      </div>

      <LifeCompontent></LifeCompontent>
      <div className="flex items-center justify-center flex-col relative space-y-6 font-mono">
        <div className="font-bold  text-2xl text-center px-5">
          <h1>
          Fill in the missing syntax to create a div with the class name launchPad that includes a heading "Launch Time" and a description "Get ready for liftoff."

          </h1>
        </div>

        <div className="">
        <div className="bg-[#222] text-[#ffffff] p-5 rounded-md w-[400px]">
  <p>&lt;html&gt;</p>
  <p>&lt;body&gt;</p>
  <p>
    &lt;div class="<input 
      type='text' 
      className='bg-[#fff] text-black rounded-sm outline-none w-[100px] px-1' 
      placeholder=' ' 
    />"&gt;
  </p>

  <h2 className="text-lg font-bold">&lt;h2&gt;Launch Time&lt;/h2&gt;</h2>
  <p>&lt;p&gt;Get ready for liftoff!&lt;/p&gt;</p>

  <p>&lt;/div&gt;</p>
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

export default Q9HTML
