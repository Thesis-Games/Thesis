import React from "react";

const Question13 = ({ data, handleAnswerChange, answerInput }) => {
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
              {"      .box {"}
              <br />
              {"        width: 200px;"}
              <br />
              {"        height: 200px;"}
              <br />
              {"        background-color: yellow;"}
              <br />
              {"        box-shadow: "}
              <input
                type="text"
                placeholder=""
                className="rounded-sm outline-none w-[40px] text-black px-1"
                maxLength={4}
                onChange={handleAnswerChange}
                value={answerInput.answer1}
                name="answer1"
              />{" "}
              <input
                type="text"
                placeholder=""
                className="rounded-sm outline-none w-[40px] text-black px-1"
                maxLength={4}
                onChange={handleAnswerChange}
                value={answerInput.answer2}
                name="answer2"
              />{" "}
              <input
                type="text"
                placeholder=""
                className="rounded-sm outline-none w-[40px] text-black px-1"
                maxLength={4}
                onChange={handleAnswerChange}
                value={answerInput.answer3}
                name="answer3"
              />
              {" rgba(0, 0, 0, "}
              <input
                type="text"
                placeholder=""
                className="rounded-sm outline-none w-[40px] text-black px-1"
                maxLength={4}
                onChange={handleAnswerChange}
                value={answerInput.answer4}
                name="answer4"
              />
              {")"}
              <br />
              {"      }"}
              <br />
              {"    </style>"}
              <br />
              {"  </head>"}
              <br />
              {"  <body>"}
              <br />
              {'    <div class="box">🚜 Mars Rover</div>'}
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

export default Question13;
