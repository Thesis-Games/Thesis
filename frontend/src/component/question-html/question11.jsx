import React from "react";

const Question11 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 relative font-mono">
      <div className="font-bold text-2xl text-center px-5">
        <h1>{data.question}</h1>
      </div>

      <div className="bg-[#222] text-white p-5 rounded-md mt-2 text-sm">
        <p>
          &lt;html&gt; <br />
          &lt;body&gt; <br />
          &lt;img ="
          <input
            type="text"
            placeholder=""
            className="rounded-sm outline-none w-[100px] text-black px-1"
            maxLength={10}
            onChange={handleAnswerChange}
            value={answerInput.answer1}
            name="answer1"
          />
          " alt="A rocket launching into space"&gt; <br />
          &lt;/body&gt; <br />
          &lt;/html&gt;
        </p>
      </div>
    </div>
  );
};

export default Question11;
