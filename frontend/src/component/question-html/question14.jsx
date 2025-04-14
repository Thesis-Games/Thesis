import React from "react";

const Question14 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 relative font-mono">
      <div className="font-bold text-2xl text-center px-10">
        <h1>{data?.question}</h1>
      </div>

      <div className="bg-[#222] text-white p-5 rounded-md mt-2 text-sm">
        <p>
          &lt;html&gt; <br />
          &lt;body&gt; <br />
          &lt;form action="
          <input
            type="text"
            className="rounded-sm outline-none w-[95px] text-black mx-1"
            onChange={handleAnswerChange}
            value={answerInput.answer1}
            name="answer1"
          />
          "&gt; <br />
          &nbsp;&nbsp;&lt;input type="text" name="
          <input
            type="text"
            className="rounded-sm outline-none w-[100px] text-black mx-1 mt-2"
            onChange={handleAnswerChange}
            value={answerInput.answer2}
            name="answer2"
          />
          " placeholder="Enter Astronaut ID" /&gt; <br />
          &nbsp;&nbsp;&lt;input type="submit" value="
          <input
            type="text"
            className="rounded-sm outline-none w-[100px] text-black mx-1 mt-2"
            onChange={handleAnswerChange}
            value={answerInput.answer3}
            name="answer3"
          />
          " /&gt; <br />
          &lt;/form&gt; <br />
          &lt;/body&gt; <br />
          &lt;/html&gt;
        </p>
      </div>
    </div>
  );
};

export default Question14;
