import React from "react";

const Question3 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex items-center justify-center flex-col space-y-6 font-mono mt-5">
      <div className="font-bold text-[20px] text-center px-10">
        <h1>{data?.question}</h1>
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <div className="text-[#ffffff] bg-[#222] p-5 rounded-md mt-5 w-full">
          <pre className="whitespace-pre-wrap font-mono text-sm">
            <code>
              {"<html>"}
              <br />
              {"  <head>"}
              <br />
              {"    <style>"}
              <br />
              {"      .planet {"}
              <br />
              {"        border: "}
              <input
                type="text"
                placeholder=""
                className="rounded-sm outline-none w-[35px] text-black px-1"
                maxLength={3}
                onChange={handleAnswerChange}
                value={answerInput.answer1}
                name="answer1"
              />
              {", "}
              <input
                type="text"
                placeholder=""
                className="rounded-sm outline-none w-[50px] text-black px-1"
                maxLength={10}
                onChange={handleAnswerChange}
                value={answerInput.answer2}
                name="answer2"
              />
              {","}
              <input
                type="text"
                placeholder=""
                className="rounded-sm outline-none w-[30px] text-black px-1"
                maxLength={10}
                onChange={handleAnswerChange}
                value={answerInput.answer3}
                name="answer3"
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
              {"    <div class='planet'>Mars</div>"}
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

export default Question3;
