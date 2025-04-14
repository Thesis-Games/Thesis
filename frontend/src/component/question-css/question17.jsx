import React from "react";

const Question17 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex items-center justify-center flex-col space-y-6 font-mono mt-7">
      <div className="font-bold text-[20px] text-center px-10">
        <h1>{data?.question}</h1>
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <div className="text-[#ffffff] bg-[#222] px-5 py-4 rounded-md w-full">
          <pre className="whitespace-pre-wrap font-mono text-[10px]">
            <code>
              {"<html>"}
              <br />
              {"   <head>"}
              <br />
              {"    <style>"}
              <br />
              {"      .container {"}
              <br />
              {"        display: grid;"}
              <br />
              {"        grid-template-columns: repeat(2, 1fr);"}
              <br />
              {"        grid-gap: 10px;"}
              <br />
              {"      }"}
              <br />
              {"      .item {"}
              <br />
              {"        background-color: lightgreen;"}
              <br />
              {"        height: 100px;"}
              <br />
              {"      }"}
              <br />
              {"      .large {"}
              <br />
              {"        grid-column: span "}
              <input
                type="text"
                placeholder="2"
                className="rounded-sm outline-none w-[15px] text-black px-1"
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
              {'    <div class="container">'}
              <br />
              {'      <div class="item">A</div>'}
              <br />
              {'      <div class="item large">B (large)</div>'}
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
  );
};

export default Question17;
