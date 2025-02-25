import React from "react";
import background from "../picture/earthbg.gif";
import Gamebutton from "./Gamebutton";
import LayoutGame from "./LayoutGame";
import TitleHTML from "./TitleHTML";

const Html24 = () => {
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
          <TitleHTML title={"LEVEL 24"} />
        </div>

        <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
          <div className="font-bold text-4xl mt-5">
            <h1>Level 24: Using Meta Tags for SEO</h1>
          </div>
          <div className="p-5 md:py-1 px-5 text-lg text-center md:text-1xl leading-relaxed text-[#414040]">
            <p>
              Meta tags provide metadata for search engines and improve SEO
              (Search Engine Optimization).
            </p>
          </div>

          <div className="py-4 px-5  leading-relaxed text-[#ffffff] bg-[#222] rounded-md ">
            <pre className="whitespace-pre-wrap font-mono text-sm">
              <code>
                {"<html>"}
                <br />
                {"  <head>"}
                <br />
                {
                  "    <meta name='description' content='A website for space exploration' />"
                }
                <br />
                {
                  "    <meta name='keywords' content='space, mars, rocket, mission' />"
                }
                <br />
                {"  </head>"}
                <br />
                {"  <body>"}
                <br />
                {"    <h1>Space Exploration Website</h1>"}
                <br />
                {"  </body>"}
                <br />
                {"</html>"}
              </code>
            </pre>
          </div>
        </div>

        <Gamebutton></Gamebutton>
      </LayoutGame>
    </div>
  );
};

export default Html24;
