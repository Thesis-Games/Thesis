import React from "react";

const Question22 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex items-center justify-center flex-col space-y-6 font-mono mt-7">
      <div className="font-bold text-[20px] text-center px-10">
        <h1>{data?.question}</h1>
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <div className="text-[#ffffff] bg-[#222] px-5 py-4 rounded-md w-full ">
          <pre className="whitespace-pre-wrap font-mono text-[10px]">
            <code>
              {"<html>"}
              <br />
              {"  <head>"}
              <br />
              {"    <style>"}
              <br />
              {"      .planet {"}
              <br />
              {"        position: absolute;"}
              <br />
              {"        width: 100px;"}
              <br />
              {"        height: 100px;"}
              <br />
              {"        background-color: lightgreen;"}
              <br />
              {"        z-index: "}
              <input
                type="text"
                placeholder=""
                className="rounded-sm outline-none w-[70px] text-black px-1"
                maxLength={10}
                onChange={handleAnswerChange}
                value={answerInput.answer1}
                name="answer1"
              />
              {";"}
              <br />
              {"      }"}
              <br />
              {"      .ship {"}
              <br />
              {"        position: absolute;"}
              <br />
              {"        width: 100px;"}
              <br />
              {"        height: 100px;"}
              <br />
              {"        background-color: lightgray;"}
              <br />
              {"        z-index: 1;"}
              <br />
              {"      }"}
              <br />
              {"    </style>"}
              <br />
              {"  </head>"}
              <br />
              {"  <body>"}
              <br />
              {'    <div class="planet"></div>'}
              <br />
              {'    <div class="ship"></div>'}
              <br />
              {"  </body>"}
              <br />
              {"</html>"}
              <br />
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Question22;
