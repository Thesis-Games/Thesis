import React from "react";

const Question25 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex items-center justify-center flex-col relative space-y-6 font-mono mt-5">
      <div className="font-bold text-2xl text-center px-10">
        <h1>{data?.question}</h1>
      </div>

      <div className="  px-6 py-4 mt-20 text-sm leading-relaxed text-white bg-[#222] rounded-md    font-mono">
        <div>
          <p>&lt;html&gt;</p>
          <p className="ml-4">&lt;head&gt;</p>
          <p className="ml-4">&lt;body&gt;</p>
          <p className="ml-8">&lt;form&gt;</p>
          <p className="ml-12">
            &lt;label for="
            <input
              type="text"
              className="rounded-sm outline-none w-[40px] text-black mx-1 mt-2"
              placeholder=""
              onChange={handleAnswerChange}
              value={answerInput.answer1}
              name="answer1"
            />
            "&gt;Join Space Crew&lt;/label&gt;
          </p>
          <p className="ml-12">
            &lt;input type="
            <input
              type="text"
              className="rounded-sm outline-none w-[65px] text-black mx-1 mt-2"
              placeholder=""
              onChange={handleAnswerChange}
              value={answerInput.answer2}
              name="answer2"
            />
            " id="crew" name="crew"&gt;
          </p>
          <p className="ml-12">
            &lt;input type="submit" value="
            <input
              type="text"
              className="rounded-sm outline-none w-[60px] text-black mx-1 mt-2 mb-2"
              placeholder=""
              onChange={handleAnswerChange}
              value={answerInput.answer3}
              name="answer3"
            />
            "&gt;
          </p>
          <p className="ml-8">&lt;/form&gt;</p>
          <p className="ml-4">&lt;/body&gt;</p>
          <p>&lt;/html&gt;</p>
        </div>
      </div>
    </div>
  );
};

export default Question25;
