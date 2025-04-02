import { useState } from "react";
import { useParams } from "react-router-dom";
import LayoutGame from "../gamelevelhtml/LayoutGame";
import background from "../picture/earthbg.gif";
import TitleHTML from "../gamelevelhtml/TitleHTML";
import { LifeCompontent } from "../QuestionGame/LifeCompontent";
import Questionbutton from "../QuestionGame/Questionbutton";

const HtmlQuestion = () => {
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
          <TitleHTML title={"LEVEL 2"} />
        </div>

        <LifeCompontent></LifeCompontent>
        <div className="flex items-center justify-center flex-col space-y-6 font-mono">
          <div className="font-bold text-[20px] text-center px-5">
            <h1>
              Fill in the missing syntax to create a basic HTML structure for an
              Earth exploration theme. Set the title to "Journey to Earth" and
              include an &lt;h1&gt; tag with the text "Let's Explore Earth!"
            </h1>
          </div>

          <div className="">
            <div className="text-[#ffffff] bg-[#222] p-5 rounded-md">
              <p>
                &lt;html&gt; <br />
                &lt;head&gt;
                <br />
                &lt;title&gt;
                <input
                  type="text"
                  placeholder="Journey to Earth"
                  className="rounded-sm outline-none w-[85px] text-black px-1"
                  maxLength={10}
                />
                &lt;/title&gt; <br />
                &lt;/head&gt;
                <br />
                &lt;body&gt;
                <br />
                &lt;h1&gt;
                <input
                  type="text"
                  placeholder="Let's Explore Earth!"
                  className="rounded-sm outline-none w-[85px] text-black px-1"
                  maxLength={10}
                />
                &lt;/h1&gt;
                <br />
                &lt;/body&gt; <br />
                &lt;/html&gt;
              </p>
            </div>
          </div>
        </div>
      </LayoutGame>
      <Questionbutton></Questionbutton>
    </div>
  );
};

export default HtmlQuestion;
