import React from "react";

const Question17 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 relative font-mono">
      <div className="font-bold text-2xl text-center px-5">
        <h1>{data?.question}</h1>
      </div>

      <div className="bg-[#222] text-white font-mono p-4 rounded-md mt-3 overflow-auto max-w-[700px] w-[500px] mx-auto text-sm">
        <pre className="whitespace-pre-wrap leading-tight">
          {`<html>
  <head>
  <meta `}
          <input
            type="text"
            className="rounded-sm outline-none w-[70px] text-black px-1 mx-1"
            maxLength={8}
            onChange={handleAnswerChange}
            value={answerInput.answer1}
            name="answer1"
          />
          {`="UTF-8">
  <meta `}
          <input
            type="text"
            className="rounded-sm outline-none w-[80px] text-black px-1 mx-1"
            maxLength={10}
            onChange={handleAnswerChange}
            value={answerInput.answer2}
            name="answer2"
          />
          {`="description" content="`}
          <input
            type="text"
            className="rounded-sm outline-none w-[120px] text-black px-1 mx-1 mt-1"
            maxLength={20}
            onChange={handleAnswerChange}
            value={answerInput.answer3}
            name="answer3"
          />
          {`">
  </head>
  <body>
  <h1>Space Mission</h1>
  </body>
  </html>`}
        </pre>
      </div>
    </div>
  );
};

export default Question17;
