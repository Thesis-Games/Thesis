import React from "react";

const Question5 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex items-center justify-center flex-col relative space-y-6 font-mono">
      {/* Question */}
      <div className="font-bold text-2xl text-center px-5">
        <h1>{data?.question}</h1>
      </div>

      {/* Code Block */}
      <div className="text-[#ffffff] bg-[#222] p-5 rounded-md mt-2 text-sl">
        <p>
          &lt;html&gt; <br />
          &lt;body&gt; <br />
          <br />
          &nbsp;&nbsp;
          <input
            type="text"
            placeholder="open"
            className="rounded-sm outline-none w-[80px] text-black px-1"
            onChange={handleAnswerChange}
            value={answerInput.answer1}
            name="answer1"
          />
          &gt; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt; list 1 &lt;/li&gt; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt; list 2 &lt;/li&gt; <br />
          &nbsp;&nbsp;
          <input
            type="text"
            placeholder="closing"
            className="rounded-sm outline-none w-[80px] text-black px-1"
            onChange={handleAnswerChange}
            value={answerInput.answer2}
            name="answer2"
          />
          &gt; <br />
          <br />
          &lt;/body&gt; <br />
          &lt;/html&gt;
        </p>
      </div>
    </div>
  );
};

export default Question5;
