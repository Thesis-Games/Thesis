import React from "react";

const Question12 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex items-center justify-center flex-col relative space-y-6 font-mono">
      <div className="font-bold  text-2xl text-center px-10">
        <h1>{data?.question}</h1>
      </div>

      <div className="">
        <div className="text-[#ffffff] bg-[#222] p-5 rounded-md mt-2 text-sl">
          <p>
            &lt;html&gt; <br></br>
            &lt;body&gt;
            <br></br>Mission status: &lt;span style="color:
            <input
              type="text"
              placeholder=""
              className="rounded-sm outline-none w-[30px] text-black"
              onChange={handleAnswerChange}
              value={answerInput.answer1}
              name="answer1"
            />
            ";&gt;Inactive&lt;/span&gt; &lt;p&gt;
            <br></br>
            &lt;/body&gt; <br></br>&lt;/html&gt;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question12;
