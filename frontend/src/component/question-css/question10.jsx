import React from "react";

const Question10 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex items-center justify-center flex-col space-y-6 font-mono mt-5">
      <div className="font-bold text-[20px] text-center px-10">
        <h1>{data?.question}</h1>
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <div className="text-[#ffffff] bg-[#222] px-5 py-4 rounded-md  w-full">
          <pre className="whitespace-pre-wrap font-mono text-[12px]">
            <code>
              {"<html>"}
              <br />
              {"  <head>"}
              <br />
              {"    <style>"}
              <br />
              {"      .button {"}
              <br />
              {"        width: 100px;"}
              <br />
              {"        height: 50px;"}
              <br />
              {"        background-color: blue;"}
              <br />
              {"        transition: "}
              <input
                type="text"
                placeholder="e.g., width"
                className="rounded-sm outline-none w-[80px] text-black px-1"
                maxLength={15}
              />
              {" 0.5s;"}
              <br />
              {"      }"}
              <br />
              {"      .button:hover {"}
              <br />
              {"        background-color: "}
              <input
                type="text"
                placeholder="e.g., red"
                className="rounded-sm outline-none w-[80px] text-black px-1"
                maxLength={15}
              />
              {";"}
              <br />
              {"      }"}
              <br />
              {"    </style>"}
              <br />
              {"  </head>"}
              <br />
              {"  <body>"}
              <br />
              {'    <button class="button">Mars Mission</button>'}
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

export default Question10;
