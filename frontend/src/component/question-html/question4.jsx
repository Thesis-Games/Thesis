import React from "react";

const Question4 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex items-center justify-center flex-col relative space-y-6 font-mono">
      <div className="font-bold  text-2xl text-center px-5">
        <h1>{data?.question}</h1>
      </div>

      <div className="">
        <div className="text-[#ffffff] bg-[#222] p-5 rounded-md mt-2 text-sl">
          <p>
            &lt;html&gt; <br></br>
            &lt;body&gt;
            <br></br>
            &lt;img href="
            <input
              type="text"
              placeholder=""
              className="rounded-sm outline-none w-[90px] text-black"
              maxLength={10} // Ensure only one character can be entered
              onChange={handleAnswerChange}
              value={answerInput.answer1}
              name="answer1"
            />
            "{""} alt="A rocket launching into space"&gt;
            <br></br>
            &lt;/body&gt; <br></br>&lt;/html&gt;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question4;
