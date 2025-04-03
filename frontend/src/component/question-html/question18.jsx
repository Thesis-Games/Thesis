import React from "react";

const Question18 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 relative font-mono">
      <div className="font-bold text-2xl text-center px-5">
        <h1>{data.question}</h1>
      </div>

      <div className="bg-[#222] text-white font-mono p-4 rounded-md mt-3 overflow-auto max-w-[700px] w-[600px] mx-auto text-sm">
        <pre className="whitespace-pre-wrap leading-tight">
          {`<html>
  <body>
    <iframe src="`}
          <input
            type="text"
            className="rounded-sm outline-none w-[250px] text-black px-1 mx-1"
            onChange={handleAnswerChange}
            value={answerInput.answer1}
            name="answer1"
          />
          {`" width="600" height="450"></iframe>
  </body>
</html>`}
        </pre>
      </div>
    </div>
  );
};

export default Question18;
