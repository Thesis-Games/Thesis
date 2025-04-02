import React from "react";

const Question8 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex items-center justify-center flex-col relative space-y-6 font-mono">
      <div className="font-bold text-2xl text-center px-5">
        <h1>{data?.question}</h1>
      </div>

      <div className="">
        <div className="text-[#ffffff] bg-[#222] p-5 rounded-md w-[500px]">
          <p>&lt;html&gt;</p>
          <p>&lt;body&gt;</p>
          <p>&lt;form action="/submit" method="post"&gt;</p>
          <p>
            &nbsp;&nbsp;&lt;input type="text" name="
            <input
              type="text"
              className="rounded-sm outline-none w-[100px] text-black px-2 py-1"
              onChange={handleAnswerChange}
              value={answerInput.answer1}
              name="answer1"
            />
            " placeholder="Enter astronaut name" /&gt;
          </p>
          <p>
            <input
              type="submit"
              value="Submit"
              className="bg-[#444] text-white px-3 py-1 mt-2 rounded cursor-pointer"
            />
          </p>
          <p>&lt;/form&gt;</p>
          <p>&lt;/body&gt;</p>
          <p>&lt;/html&gt;</p>
        </div>
      </div>
    </div>
  );
};

export default Question8;
