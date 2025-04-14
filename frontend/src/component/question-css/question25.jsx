import React from "react";

const Question25 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex items-center justify-center flex-col space-y-6 font-mono mt-5">
      <div className="font-bold text-[20px] text-center px-10">
        <h1>{data?.question}</h1>
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <div className="text-[#ffffff] bg-[#222] px-5 py-4 rounded-md w-full">
          <pre className="whitespace-pre-wrap font-mono text-sm">
            <code>
              {"<html>"} <br />
              {"  <head>"} <br />
              {"    <style>"} <br />
              {"      :root {"} <br />
              {"        --ship-color: lightblue;"} <br />
              {"        --ship-width: 100px;"} <br />
              {"        --ship-height: 100px;"} <br />
              {"      }"} <br />
              {"      .ship {"} <br />
              {"        width: var("}
              <input
                type="text"
                placeholder=""
                className="rounded-sm outline-none w-[80px] text-black px-1 mt-1"
                maxLength={15}
                onChange={handleAnswerChange}
                value={answerInput.answer1}
                name="answer1"
              />
              {");"} <br />
              {"        height: var("}
              <input
                type="text"
                placeholder=""
                className="rounded-sm outline-none w-[80px] text-black px-1 mt-1"
                maxLength={15}
                onChange={handleAnswerChange}
                value={answerInput.answer2}
                name="answer2"
              />
              {");"} <br />
              {"        background-color: var("}
              <input
                type="text"
                placeholder=""
                className="rounded-sm outline-none w-[100px] text-black px-1 mt-1"
                maxLength={15}
                onChange={handleAnswerChange}
                value={answerInput.answer3}
                name="answer3"
              />
              {");"} <br />
              {"      }"} <br />
              {"    </style>"} <br />
              {"  </head>"} <br />
              {"  <body>"} <br />
              {'    <div class="ship"></div>'} <br />
              {"  </body>"} <br />
              {"</html>"} <br />
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Question25;
