import React from "react";

const Question17 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex items-center justify-center flex-col space-y-6 font-mono mt-7">
      <div className="font-bold text-[20px] text-center px-10">
        <h1>{data?.question}</h1>
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <div className="text-[#ffffff] bg-[#222] px-5 py-4 rounded-md w-full">
          <pre className="whitespace-pre-wrap font-mono text-[12px]">
            <code>
              {"<html>"}
              <br />
              {"   <head>"}
              <br />
              {"    <style>"}
              <br />
              {"      .planet {"}
              <br />
              {"        width: 100px;"}
              <br />
              {"        height: 100px;"}
              <br />
              {"        background-color: lightgreen;"}
              <br />
              {"        transition: "}
              <input
                type="text"
                placeholder="transform"
                className="rounded-sm outline-none w-[100px] text-black px-1"
                maxLength={9}
                onChange={handleAnswerChange}
                value={answerInput.answer1}
                name="answer1"
              />
              {" 1s;"}
              <br />
              {"      }"}
              <br />
              {"      .planet:hover {"}
              <br />
              {"        transform: "}
              <input
                type="text"
                placeholder="scale(1.5)"
                className="rounded-sm outline-none w-[100px] text-black px-1"
                maxLength={11}
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
              {'    <div class="planet"></div>'}
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
