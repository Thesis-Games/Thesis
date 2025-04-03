import React from "react";

const Question23 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex items-center justify-center flex-col relative space-y-6 font-mono mt-5">
      <div className="font-bold text-2xl text-center px-10">
        <h1>{data?.question}</h1>
      </div>

      <div className="text-[#ffffff] bg-[#222] px-7  py-4 rounded-md text-sm font-mono">
        <div className="">
          <p>&lt;html&gt;</p>
          <p className="ml-4 ">&lt;head&gt;</p>
          <p className="ml-8">&lt;style&gt;</p>
          <p className="ml-12">
            a:hover &#123; color:
            <input
              type="text"
              className="rounded-sm outline-none w-[35px] text-black mx-1 mt-2"
              placeholder=""
              onChange={handleAnswerChange}
              value={answerInput.answer1}
              name="answer1"
            />
            ; &#125;
          </p>
          <p className="ml-8">&lt;/style&gt;</p>
          <p className="ml-4">&lt;/head&gt;</p>
          <p className="ml-4">&lt;body&gt;</p>
          <p className="ml-8">
            &lt;a href="
            <input
              type="text"
              className="rounded-sm outline-none w-[155px] text-black mx-1 mt-2"
              placeholder=""
              onChange={handleAnswerChange}
              value={answerInput.answer2}
              name="answer2"
            />
            " &gt;Visit Mars Missions&lt;/a&gt;
          </p>
          <p className="ml-4">&lt;/body&gt;</p>
          <p>&lt;/html&gt;</p>
        </div>
      </div>
    </div>
  );
};

export default Question23;
