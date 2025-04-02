import React from "react";

const Question6 = ({ data, handleAnswerChange, answerInput }) => {
  console.log(data);
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
            &lt;button onclick="
            <input
              type="text"
              placeholder=""
              className="rounded-sm outline-none w-[200px] text-black"
              onChange={handleAnswerChange}
              value={answerInput.answer1}
              name="answer1"
             />
            "&gt;
            <br></br>
            &lt;/body&gt; <br></br>&lt;/html&gt;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question6;
