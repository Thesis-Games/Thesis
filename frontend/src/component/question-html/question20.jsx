import React from "react";

const Question20 = ({ data, handleAnswerChange, answerInput }) => {
  return (
    <div className="flex items-center justify-center flex-col relative space-y-6 font-mono">
      <div className="font-bold text-2xl text-center px-5">
        <h1>
          Fill in the missing syntax to add a class `spaceJourney` that makes
          the text "Journey to Mars"
        </h1>
      </div>

      <div className="">
        <div className="bg-[#222] text-white font-mono p-2 rounded-md mt-1 overflow-auto max-w-[700px] mx-auto text-[10px]">
          <div className="bg-[#222] text-white font-mono p-2 rounded-md mt-1 overflow-auto max-w-[700px] w-[400px] mx-auto text-sm">
            <pre className="whitespace-pre-wrap leading-tight">
              {`<html>
    
    
  
    <body>
    <p class="`}
              <input
                type="text"
                className="rounded-sm outline-none w-[150px] text-black px-1 mx-1"
                onChange={handleAnswerChange}
                value={answerInput.answer1}
                name="answer1"
              />
              {`">Journey to Mars</p>
    </body>
    </html>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question20;
