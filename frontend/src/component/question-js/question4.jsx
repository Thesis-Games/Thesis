import React from "react";

const Question4 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex items-center justify-center flex-col space-y-6 font-mono mt-5">
      <div className="font-bold text-[20px] text-center px-10">
        <h1>{data?.question}</h1>
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <div className="text-[#ffffff] bg-[#222] p-5 rounded-md mt-5">
          <pre className="whitespace-pre-wrap font-mono text-sm">
            <code>
              {'let moonCool = "yes";'}
              <br />
              <br />
              {"if ("}
              <input
                type="text"
                placeholder=""
                className="rounded-sm outline-none w-[70px] text-black px-1"
                onChange={handleAnswerChange}
                value={answerInput.answer1}
                name="answer1"
              />
              {' === "yes") {'}
              <br />
              {'  console.log("The Moon is cool for my rover!");'}
              <br />
              {"}"}
              <br />
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Question4;
