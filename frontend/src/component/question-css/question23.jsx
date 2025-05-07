import React from "react";

const Question23 = ({ data, handleAnswerChange, answerInput }) => {
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
              {"      .planet {"} <br />
              {"        width: 200px;"} <br />
              {"        height: 200px;"} <br />
              {"        padding: 20px;"} <br />
              {"        border: 5px solid black;"} <br />
              {"        box-sizing: "}
              <input
                type="text"
                placeholder=""
                className="rounded-sm outline-none w-[100px] text-black px-1"
                maxLength={12}
                onChange={handleAnswerChange}
                value={answerInput.answer1}
                name="answer1"
              />
              {";"} <br />
              {"        background-color: lightyellow;"} <br />
              {"      }"} <br />
              {"    </style>"} <br />
              {"  </head>"} <br />
              {"  <body>"} <br />
              {"    <div class='planet'>Mars</div>"} <br />
              {"  </body>"} <br />
              {"</html>"} <br />
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Question23;
