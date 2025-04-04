import React from "react";

const Question10 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex flex-col items-center space-y-4 font-mono">
      {/* Question with Hint */}
      <h1 className="font-bold text-xl text-center px-4">{data?.question}</h1>

      {/* Code Block */}
      <div className="bg-[#222] text-white p-4 rounded-md">
        <p>
          &lt;
          <input
            type="text"
            className="w-12 text-black px-1 rounded-sm outline-none"
            onChange={handleAnswerChange}
            value={answerInput.answer1}
            name="answer1"
          />
          &gt; <br />
          &nbsp;&nbsp;&lt;li&gt;
          <input
            type="text"
            className="w-16 text-black px-1 rounded-sm outline-none"
            onChange={handleAnswerChange}
            value={answerInput.answer2}
            name="answer2"
          />
          &lt;/li&gt; <br />
          &nbsp;&nbsp;&lt;li&gt;
          <input
            type="text"
            className="w-16 text-black px-1 rounded-sm outline-none mt-1"
            onChange={handleAnswerChange}
            value={answerInput.answer3}
            name="answer3"
          />
          &lt;/li&gt; <br />
          &lt;
          <input
            type="text"
            className="w-16 text-black px-1 rounded-sm outline-none"
            onChange={handleAnswerChange}
            value={answerInput.answer4}
            name="answer4"
          />
          &gt;
        </p>
      </div>
    </div>
  );
};

export default Question10;
