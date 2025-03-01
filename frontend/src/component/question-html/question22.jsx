import React from "react";

const Question22 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex items-center justify-center flex-col relative space-y-6 font-mono mt-10">
      <div className="font-bold   text-sm text-center px-10">
        <h1>{data.question}</h1>
      </div>

      <div className="text-[#ffffff] bg-[#222] p-2 rounded-md text-sm font-mono px-6">
        <div className=" ">
          <p>&lt;html&gt;</p>
          <p className="ml-4">&lt;body&gt;</p>
          <p className="ml-8">&lt;form&gt;</p>

          {/* Astronaut ID Input */}
          <p className="ml-12">
            &lt;label for="
            <input
              type="text"
              className="rounded-sm outline-none w-[90px] text-black mx-1 "
              placeholder=""
              onChange={handleAnswerChange}
              value={answerInput.answer1}
              name="answer1"
            />
            "&gt;Astronaut's ID:&lt;/label&gt;
          </p>
          <p className="ml-12">
            &lt;input type="
            <input
              type="text"
              className="rounded-sm outline-none w-[40px] text-black mx-1 mt-2"
              placeholder=""
              onChange={handleAnswerChange}
              value={answerInput.answer2}
              name="answer2"
            />
            " id="astronautId" name="astronautId"&gt;
          </p>

          {/* Mission Selection */}
          <p className="ml-12">
            &lt;label for="
            <input
              type="text"
              className="rounded-sm outline-none w-[55  px] text-black mx-1 mt-2"
              placeholder=""
              onChange={handleAnswerChange}
              value={answerInput.answer3}
              name="answer3"
            />
            "&gt;Mission:&lt;/label&gt;
          </p>
          <p className="ml-12 mt-2">
            &lt;input type="radio" id="moon" name="mission" value="moon"&gt;Moon
          </p>
          <p className="ml-12 mt-2">
            &lt;input type="radio" id="mars" name="mission" value="mars"&gt;Mars
          </p>

          {/* Submit Button */}
          <p className="ml-12">
            &lt;input type="submit" value="
            <input
              type="text"
              className="rounded-sm outline-none w-[50px] text-black mx-1 mt-2"
              placeholder=""
              onChange={handleAnswerChange}
              value={answerInput.answer4}
              name="answer4"
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

export default Question22;
