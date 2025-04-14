import React from "react";

const Question15 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex items-center justify-center flex-col space-y-6 font-mono mt-5">
      <div className="font-bold text-[20px] text-center px-10">
        <h1>{data?.question}</h1>
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <div className="text-[#ffffff] bg-[#222] px-5 py-4 rounded-md  w-full">
          <pre className="whitespace-pre-wrap font-mono text-[12px]">
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
              {"        grid-template-columns: "}
              <input
                type="text"
                placeholder="1fr 1fr"
                className="rounded-sm outline-none w-[60px] text-black px-1"
                maxLength={11}
                onChange={handleAnswerChange}
                value={answerInput.answer1}
                name="answer1"
              />
              {";"}
              <br />
              {"        gap: 10px;"}
              <br />
              {"      }"}
              <br />
              {"      .item {"}
              <br />
              {"        background-color: lightyellow;"}
              <br />
              {"        height: 100px;"}
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
              {'      <div class="item">B</div>'}
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

export default Question15;
