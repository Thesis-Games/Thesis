import React from "react";

const Question12 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex items-center justify-center flex-col space-y-6 font-mono mt-5">
      <div className="font-bold text-[20px] text-center px-10">
        <h1>{data?.question}</h1>
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <div className="text-[#ffffff] bg-[#222] px-5 py-4 rounded-md w-full ">
          <pre className="whitespace-pre-wrap font-mono text-sm">
            <code>
              {"<html>"}
              <br />
              {"  <head>"}
              <br />
              {"    <style>"}
              <br />
              {"      .button {"}
              <br />
              {"        width: 100px;"}
              <br />
              {"        height: 50px;"}
              <br />
              {"        background-color: purple;"}
              <br />
              {"        border-radius: "}
              <input
                type="text"
                placeholder="20px"
                className="rounded-sm outline-none w-[40px] text-black px-1"
                maxLength={4}
                onChange={handleAnswerChange}
                value={answerInput.answer1}
                name="answer1"
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
              {'    <button class="button">Mars Base</button>'}
              <br />
              {"  </body>"}
              <br />
              {"</html>"}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Question12;
