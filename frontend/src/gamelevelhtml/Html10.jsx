import React from 'react'
import background from "../picture/background.png";
import Gamebutton from "./Gamebutton";
import LayoutGame from "./LayoutGame";
import TitleHTML from "./TitleHTML";
const Html10 = () => {
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
        <TitleHTML title={"LEVEL 10 "} />
      </div>

      <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
        <div className="font-bold text-4xl md:text-5xl mt-2">
          <h1>Level 10: Creating Tables
          </h1>
        </div>
        <div className="p-5 md:py-1 px-5 text-lg text-center md:text-1xl leading-relaxed text-[#414040] ">
          <p>
          Tables are created using the &lt;table&gt;, &lt;tr&gt; and &lt;td&gt; tags. The  &lt;tr&gt; tag defines a row, and the &lt;td&gt; tag defines a table cell.

          </p>
        </div>
        <div className="px-10 text-lg leading-relaxed text-[#ffffff] bg-[#222] rounded-md max-w-[600px] mx-auto font-mono">
        <div className="bg-[#222] text-white font-mono p-2 rounded-md mt-3 overflow-auto max-w-[600px] mx-auto text-xs">
    <p>Example:</p>
    <pre className="whitespace-pre-wrap leading-tight">
      {`<html>
<body>
  <table>
    <tr>
      <td>Astronaut</td>
      <td>Mission</td>
    </tr>
    <tr>
      <td>John</td>
      <td>Mars</td>
    </tr>
  </table>
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

export default Html10

