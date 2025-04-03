import React from "react";

const Question13 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex items-center justify-center flex-col relative space-y-6 font-mono">
      <div className="font-bold  text-2xl text-center px-10">
        <h1>{data?.question}</h1>
      </div>

      <div className="">
        <div className="text-[#ffffff] bg-[#222] p-5 rounded-md mt-2 text-sl">
          <p>
            &lt;html&gt; <br />
            &lt;body&gt;
            <br />
            &lt;p&gt; &lt;strong&gt;
            <input
              type="text"
              placeholder=""
              className="rounded-sm outline-none w-[110px] text-black mr-2"
              onChange={handleAnswerChange}
              value={answerInput.answer1}
              name="answer1"
            />
            &lt;/strong&gt;: The rocket is ready for launch.&lt;/p&gt;
            <br />
            <br></br>
            &lt;p&gt; &lt;em&gt;
            <input
              type="text"
              placeholder=""
              className="rounded-sm outline-none w-[80px] text-black mr-2"
              onChange={handleAnswerChange}
              value={answerInput.answer2}
              name="answer2"
            />
            &lt;/em&gt;:Astronauts must wear suits for safety.&lt;/p&gt;
            <br />
            &lt;/body&gt; <br />
            &lt;/html&gt;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question13;
