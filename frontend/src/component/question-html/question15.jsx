import React from "react";

const Question15 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex items-center justify-center flex-col relative space-y-6 font-mono">
      <div className="font-bold  text-2xl text-center px-10">
        <h1>{data?.question}</h1>
      </div>

      <div className="">
        <div className="text-[#ffffff] bg-[#222] p-5 rounded-md mt-2 text-sl ">
          <p>
            &lt;html&gt; <br />
            &lt;body&gt;
            <br />
            &nbsp;&nbsp;&lt;video src="
            <input
              type="text"
              className="rounded-sm outline-none w-[150px] text-black mx-1"
              maxLength={17}
              placeholder=""
              onChange={handleAnswerChange}
              value={answerInput.answer1}
              name="answer1"
            />
            " controls&gt;&lt;/video&gt;
            <br />
            &lt;/body&gt; <br />
            &lt;/html&gt;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question15;
