import React from "react";

const Question1 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex items-center justify-center flex-col space-y-6 font-mono mt-5">
      <div className="font-bold text-[20px] text-center px-10">
        <h1>{data?.question}</h1>
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <div className="text-[#ffffff] bg-[#222] p-5 rounded-md mt-5">
          <p>
            &lt;html&gt; <br />
            &lt;head&gt;
            <br />
            &lt;title&gt;
            <input
              type="text"
              placeholder=""
              className="rounded-sm outline-none w-[140px] text-black px-1"
              maxLength={15}
              onChange={handleAnswerChange}
              value={answerInput.answer1}
              name="answer1"
            />
            &lt;/title&gt; <br />
            &lt;/head&gt;
            <br />
            &lt;body&gt;
            <br />
            &lt;h1&gt;
            <input
              type="text"
              placeholder=""
              className="rounded-sm outline-none w-[185px] text-black px-1"
              maxLength={20}
              onChange={handleAnswerChange}
              value={answerInput.answer2}
              name="answer2"
            />
            &lt;/h1&gt;
            <br />
            &lt;/body&gt; <br />
            &lt;/html&gt;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question1;
