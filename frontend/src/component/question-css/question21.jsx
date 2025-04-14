import React from "react";

const Question21 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex items-center justify-center flex-col space-y-6 font-mono mt-7">
      <div className="font-bold text-[20px] text-center px-10">
        <h1>{data?.question}</h1>
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <div className="text-[#ffffff] bg-[#222] px-5 py-4 rounded-md w-full">
          <pre className="whitespace-pre-wrap font-mono text-[11px]">
            <code>
              {"<html>"}
              <br />
              {"  <head>"}
              <br />
              {"    <style>"}
              <br />
              {"      .container {"}
              <br />
              {"        width: 300px;"}
              <br />
              {"        height: 200px;"}
              <br />
              {"        overflow: "}
              <input
                type="text"
                placeholder=""
                className="rounded-sm outline-none w-[70px] text-black px-1"
                maxLength={7}
                onChange={handleAnswerChange}
                value={answerInput.answer1}
                name="answer1"
              />
              {";"}
              <br />
              {"        border: 1px solid #ccc;"}
              <br />
              {"      }"}
              <br />
              {"      .content {"}
              <br />
              {"        width: 500px;"}
              <br />
              {"        height: 500px;"}
              <br />
              {"        background-color: lightyellow;"}
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
              {'      <div class="content"></div>'}
              <br />
              {"    </div>"}
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

export default Question21;
