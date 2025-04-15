import React from "react";

const Question24 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex items-center justify-center flex-col relative space-y-6 font-mono mt-5">
      <div className="font-bold text-2xl text-center px-10">
        <h1>{data?.question}</h1>
      </div>

      <div className="text-[#ffffff] bg-[#222] px-7 py-4 rounded-md text-sm font-mono">
        <div>
          <p>&lt;html&gt;</p>
          <p className="ml-4">&lt;head&gt;</p>
          <p className="ml-8">
            &lt;meta name="
            <input
              type="text"
              className="rounded-sm outline-none w-[90px] text-black mx-1 mt-2"
              placeholder=""
              onChange={handleAnswerChange}
              value={answerInput.answer1}
              name="answer1"
            />
            " content="Astronaut Training Website" &gt;
          </p>
          <p className="ml-8">
            &lt;meta name="
            <input
              type="text"
              className="rounded-sm outline-none w-[90px] text-black mx-1 mt-2"
              placeholder=""
              onChange={handleAnswerChange}
              value={answerInput.answer2}
              name="answer2"
            />
            " content="astronaut, space, mars, moon" &gt;
          </p>
          <p className="ml-4">&lt;/head&gt;</p>
          <p className="ml-4">&lt;body&gt;</p>
          <p className="ml-8">&lt;h1&gt;Astronaut Training&lt;/h1&gt;</p>
          <p className="ml-4">&lt;/body&gt;</p>
          <p>&lt;/html&gt;</p>
        </div>
      </div>
    </div>
  );
};

export default Question24;
