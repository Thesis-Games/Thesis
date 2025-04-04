import React from "react";

const Question16 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 relative font-mono">
      <div className="font-bold text-2xl text-center px-5">
        <h1>{data?.question}</h1>
      </div>

      <div className="bg-[#222] text-white font-mono p-4 rounded-md mt-3 overflow-auto max-w-[400px] mx-auto text-sm">
        <pre className="whitespace-pre-wrap leading-tight">
          {`<html>
  <body>
  <h`}
          <input
            type="text"
            className="rounded-sm outline-none w-[40px] text-black px-1 mx-1"
            maxLength={2}
            onChange={handleAnswerChange}
            value={answerInput.answer1}
            name="answer1"
          />
          {`>Journey to the Stars</h`}
          <input
            type="text"
            className="rounded-sm outline-none w-[40px] text-black px-1 mx-1"
            maxLength={2}
            onChange={handleAnswerChange}
            value={answerInput.answer2}
            name="answer2"
          />
          {`>
  </body>
  </html>`}
        </pre>
      </div>
    </div>
  );
};

export default Question16;
