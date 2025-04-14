import React from "react";

const Question15 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex items-center justify-center flex-col space-y-6 font-mono mt-5">
      <div className="font-bold text-[20px] text-center px-10">
        <h1>{data?.question}</h1>
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <div className="text-[#ffffff] bg-[#222] px-5 py-4 rounded-md w-full ">
          <pre className="whitespace-pre-wrap font-mono text-[11px]">
            <code>
              {"<html>"}
              <br />
              {"  <head>"}
              <br />
              {"    <style>"}
              <br />
              {"      .mars-base {"}
              <br />
              {"        display: flex;"}
              <br />
              {"        align-items: "}
              <input
                type="text"
                placeholder="flex-start"
                className="rounded-sm outline-none w-[70px] text-black px-1"
                maxLength={11}
                onChange={handleAnswerChange}
                value={answerInput.answer1}
                name="answer1"
              />
              {";"}
              <br />
              {"        height: 300px;"}
              <br />
              {"      }"}
              <br />
              {"      .module {"}
              <br />
              {"        width: 100px;"}
              <br />
              {"        height: 100px;"}
              <br />
              {"        background-color: darkred;"}
              <br />
              {"      }"}
              <br />
              {"    </style>"}
              <br />
              {"  </head>"}
              <br />
              {"  <body>"}
              <br />
              {'    <div class="mars-base">'}
              <br />
              {'      <div class="module">🌱 Greenhouse</div>'}
              <br />
              {'      <div class="module">⚡ Power Station</div>'}
              <br />
              {'      <div class="module">📡 Communication Hub</div>'}
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

export default Question15;
