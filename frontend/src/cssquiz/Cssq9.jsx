import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";

const Cssq9 = () => {
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
      <Csslayout>
        <Csstitle title={"LEVEL 9"} />

        <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
          <div className="font-bold text-lg text-center px-10 mt-5">
            <p>
              Fill in the missing syntax to ensure the container clears the
              floated items.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="px-6 py-4 text-[13px] mt-10 leading-relaxed text-[#ffffff] bg-[#222] rounded-md">
              <pre className="whitespace-pre-wrap font-mono text-sm">
                <code>
                  {"<html>"}
                  <br />
                  {"   <head>"}
                  <br />
                  {"    <style>"}
                  <br />
                  {"      .container::after {"}
                  <br />
                  {"        content: "}
                  <input
                    type="text"
                    placeholder="e.g., ''"
                    className="rounded-sm outline-none w-[80px] text-black px-1 "
                    maxLength={10}
                    onChange={handleAnswerChange}
                    value={answerInput.answer1}
                    name="answer1"
                  />
                  {";"}
                  <br />
                  {"        clear: "}
                  <input
                    type="text"
                    placeholder="e.g., both"
                    className="rounded-sm outline-none w-[80px] text-black px-1 mt-1"
                    maxLength={10}
                    onChange={handleAnswerChange}
                    value={answerInput.answer2}
                    name="answer2"
                  />
                  {";"}
                  <br />
                  {"        display: "}
                  <input
                    type="text"
                    placeholder="e.g., block"
                    className="rounded-sm outline-none w-[80px] text-black px-1 mt-1"
                    maxLength={10}
                    onChange={handleAnswerChange}
                    value={answerInput.answer3}
                    name="answer3"
                  />
                  {";"}
                  <br />
                  {"      }"}
                  <br />
                  {"      .item {"}
                  <br />
                  {"        float: left;"}
                  <br />
                  {"        width: 50px;"}
                  <br />
                  {"        height: 50px;"}
                  <br />
                  {"        background-color: red;"}
                  <br />
                  {"      }"}
                  <br />
                  {"    </style>"}
                  <br />
                  {"  </head>"}
                  <br />
                  {"  <body>"}
                  <br />
                  {'    <div class="container">'}
                  <br />
                  {'      <div class="item"></div>'}
                  <br />
                  {'      <div class="item"></div>'}
                  <br />
                  {"    </div>"}
                  <br />
                  {"  </body>"}
                  <br />
                  {"</html>"}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </Csslayout>
      <Cssbutton />
    </div>
  );
};

export default Cssq9;
