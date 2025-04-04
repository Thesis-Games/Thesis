import React from "react";

const Question21 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex items-center justify-center flex-col relative space-y-6 font-mono mt-10">
      <div className="font-bold   text-lg text-center px-10">
        <h1>{data?.question}</h1>
      </div>

      <div className="text-[#ffffff] bg-[#222] p-2 rounded-md text-sm font-mono">
        <p>
          &lt;html&gt; <br />
          &lt;body&gt;
          <br />
          &nbsp;&nbsp;&lt;table&gt; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;
          <input
            type="text"
            className="rounded-sm outline-none w-[65px] text-black mx-1"
            maxLength={8}
            placeholder=""
            onChange={handleAnswerChange}
            value={answerInput.answer1}
            name="answer1"
          />
          &lt;/td&gt; &nbsp;&nbsp;&lt;td&gt;
          <input
            type="text"
            className="rounded-sm outline-none w-[35px] text-black mx-1"
            maxLength={17}
            placeholder=""
            onChange={handleAnswerChange}
            value={answerInput.answer2}
            name="answer2"
          />
          &lt;/td&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;
          <input
            type="text"
            className="rounded-sm outline-none w-[63px] text-black mx-1"
            maxLength={8}
            placeholder=""
            onChange={handleAnswerChange}
            value={answerInput.answer3}
            name="answer3"
          />
          &lt;/td&gt; &nbsp;&nbsp;&lt;td&gt;
          <input
            type="text"
            className="rounded-sm outline-none w-[35px] text-black mx-1"
            maxLength={4}
            placeholder=""
            onChange={handleAnswerChange}
            value={answerInput.answer4}
            name="answer4"
          />
          &lt;/td&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt; <br />
          &nbsp;&nbsp;&lt;/table&gt; <br />
          &lt;/body&gt; <br />
          &lt;/html&gt;
        </p>
      </div>
    </div>
  );
};

export default Question21;
