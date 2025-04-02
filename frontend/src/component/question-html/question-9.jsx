import React from "react";

const Question9 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex items-center justify-center flex-col relative space-y-6 font-mono">
      <div className="font-bold text-2xl text-center px-5">
        <h1>{data?.question}</h1>
      </div>

      <div className="">
        <div className="bg-[#222] text-[#ffffff] p-5 rounded-md w-[400px]">
          <p>&lt;html&gt;</p>
          <p>&lt;body&gt;</p>
          <p>
            &lt;div class="
            <input
              type="text"
              className="bg-[#fff] text-black rounded-sm outline-none w-[100px] px-1"
              onChange={handleAnswerChange}
              value={answerInput.answer1}
              name="answer1"
            />
            "&gt;
          </p>
          <p className="ml-4">&lt;h2&gt;Launch Time&lt;/h2&gt;</p>
          <p className="ml-4">&lt;p&gt;Get ready for liftoff!&lt;/p&gt;</p>
          <p>&lt;/div&gt;</p>
          <p>&lt;/body&gt;</p>
          <p>&lt;/html&gt;</p>
        </div>
      </div>
    </div>
  );
};

export default Question9;
