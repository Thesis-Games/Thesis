import React from "react";

const Question14 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex items-center justify-center flex-col space-y-6 font-mono mt-10">
      <div className="font-bold text-[20px] text-center px-10">
        <h1>{data?.question}</h1>
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <div className="text-[#ffffff] bg-[#222] px-5 py-4 rounded-md w-full ">
          <pre className="whitespace-pre-wrap font-mono text-[10px]">
            <code>
              {"<html>"}
              <br />
              {"  <head>"}
              <br />
              {"    <style>"}
              <br />
              {"      .colony {"}
              <br />
              {"        display: "}
              <input
                type="text"
                placeholder=""
                className="rounded-sm outline-none w-[40px] text-black px-1 mb-2"
                maxLength={4}
                onChange={handleAnswerChange}
                value={answerInput.answer1}
                name="answer1"
              />
              {";"}
              <br />
              {"        justify-content: "}
              <input
                type="text"
                placeholder=""
                className="rounded-sm outline-none w-[50px] text-black px-1"
                maxLength={5}
                onChange={handleAnswerChange}
                value={answerInput.answer2}
                name="answer2"
              />
              {";"}
              <br />
              {"        flex-direction: "}
              <input
                type="text"
                placeholder=""
                className="rounded-sm outline-none w-[50px] text-black px-1 mt-1"
                maxLength={6}
                onChange={handleAnswerChange}
                value={answerInput.answer3}
                name="answer3"
              />
              {";"}
              <br />
              {"      }"}
              <br />
              {"      .building {"}
              <br />
              {"        width: 120px;"}
              <br />
              {"        height: 120px;"}
              <br />
              {"        background-color: lightgreen;"}
              <br />
              {"      }"}
              <br />
              {"    </style>"}
              <br />
              {"  </head>"}
              <br />
              {"  <body>"}
              <br />
              {'    <div class="colony">'}
              <br />
              {'      <div class="building">🏠 Hab Unit</div>'}
              <br />
              {'      <div class="building">🔬 Lab</div>'}
              <br />
              {'      <div class="building">🍽️ Mess Hall</div>'}
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

export default Question14;
