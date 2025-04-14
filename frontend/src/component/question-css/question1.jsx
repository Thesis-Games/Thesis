import React from "react";

const Question1 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex items-center justify-center flex-col space-y-6 font-mono mt-5">
      <div className="font-bold text-[20px] text-center px-10">
        <h1>{data?.question}</h1>
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <div className="text-[#ffffff] bg-[#222] p-5 rounded-md mt-5  w-full">
          <pre className="whitespace-pre-wrap font-mono text-sm">
            <code>
              {"<html>"}
              <br />
              {"  <head>"}
              <br />
              {"    <style>"}
              <br />
              {"      body {"}
              <br />
              {"        background-color: "}
              <input
                type="text"
                placeholder=""
                className="rounded-sm outline-none w-[70px] text-black px-1"
                maxLength={8}
                onChange={handleAnswerChange}
                value={answerInput.answer1}
                name="answer1"
              />
              {";"}
              <br />
              {"        color: "}
              <input
                type="text"
                placeholder=""
                className="rounded-sm outline-none w-[48px] text-black px-1"
                maxLength={5}
                onChange={handleAnswerChange}
                value={answerInput.answer2}
                name="answer2"
              />
              {";"}
              <br />
              {"      }"}
              <br />
              {"    </style>"}
              <br />
              {"  </head>"}
              <br />
              {"  <body>"}
              <br />
              {"    <h1>Space Expedition Begins</h1>"}
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

export default Question1;
