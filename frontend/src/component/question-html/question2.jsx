import React from "react";

const Question2 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex items-center justify-center flex-col relative space-y-6 font-mono">
      <div className="font-bold  text-2xl text-center px-5">
        <h1>{data?.question}</h1>
      </div>

      <div className="">
        <div className="text-[#ffffff] bg-[#222] p-5 rounded-md">
          <p>
            &lt;html&gt; <br></br>
            &lt;body&gt;
            <br></br>
            <input
              type="text"
              placeholder=""
              name="answer1"
              onChange={handleAnswerChange}
              value={answerInput.answer1}
              className="rounded-sm outline-none w-[30px] text-black"
            />
            In the year 2050, humans are ready to embark on a journey to Mars.h
            <input
              type="text"
              placeholder=""
              className="rounded-sm outline-none w-[30px] text-black"
              name="answer2"
              onChange={handleAnswerChange}
              value={answerInput.answer2}
            />
            <br></br>
            &lt;/body&gt; <br></br>&lt;/html&gt;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question2;
