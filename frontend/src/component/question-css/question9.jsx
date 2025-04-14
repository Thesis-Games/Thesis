import React, { useRef } from "react";

const Question9 = ({ data, handleAnswerChange, answerInput }) => {
  const inputRefs = useRef([]);

  const handleInput = (index) => {
    const input = inputRefs.current[index];
    if (input) {
    }
  };

  return (
    <div className="flex items-center justify-center flex-col space-y-6 font-mono mt-6">
      <div className="font-bold text-[20px] text-center px-10">
        <h1>{data?.question}</h1>
      </div>

      <div className="w-[500px] h-full flex items-center justify-center ">
        <div className="text-[#ffffff] bg-[#222] p-5 rounded-md mx-20 overflow-x-auto w-full">
          <pre className="whitespace-pre-wrap font-mono text-[11px] ">
            <code>
              {"<html>"}
              <br />
              {"   <head>"}
              <br />
              {"    <style>"}
              <br />
              {"      .container::after {"}
              <br />
              {"        content: "}
              <input
                type="text"
                placeholder=""
                className="rounded-sm outline-none w-[20px] text-black px-1"
                maxLength={10}
                ref={(el) => (inputRefs.current[0] = el)}
                onInput={() => handleInput(0)}
                onChange={handleAnswerChange}
                value={answerInput.answer1}
                name="answer1"
              />
              {";"}
              <br />
              {"        clear: "}
              <input
                type="text"
                placeholder=""
                className="rounded-sm outline-none w-[40px] text-black px-1 mt-1"
                maxLength={10}
                ref={(el) => (inputRefs.current[1] = el)}
                onInput={() => handleInput(1)}
                onChange={handleAnswerChange}
                value={answerInput.answer2}
                name="answer2"
              />
              {";"}
              <br />
              {"        display: "}
              <input
                type="text"
                placeholder=""
                className="rounded-sm outline-none w-[50px] text-black px-1 mt-1"
                maxLength={10}
                ref={(el) => (inputRefs.current[2] = el)}
                onInput={() => handleInput(2)}
                onChange={handleAnswerChange}
                value={answerInput.answer3}
                name="answer3"
              />
              {";"}
              <br />
              {"      }"}
              <br />
              {"      .item {"}
              <br />
              {"        float: left;"}
              <br />
              {"        width: 50px;"}
              <br />
              {"        height: 50px;"}
              <br />
              {"        background-color: red;"}
              <br />
              {"      }"}
              <br />
              {"    </style>"}
              <br />
              {"  </head>"}
              <br />
              {"  <body>"}
              <br />
              {'    <div class="container">'}
              <br />
              {'      <div class="item"></div>'}
              <br />
              {'      <div class="item"></div>'}
              <br />
              {"    </div>"}
              <br />
              {"  </body>"}
              <br />
              {"</html>"}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Question9;
