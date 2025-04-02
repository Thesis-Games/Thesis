import React from "react";
import background from "../picture/marsbg.gif";
import Csslayout from "../csscomponent/Csslayout";
import Cssbutton from "../csscomponent/Cssbutton";
import Csstitle from "../csscomponent/Csstitle";

const Cssq15 = () => {
  return (
    <div
      className="w-full h-screen relative flex items-center justify-center flex-col"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Csslayout>
        <Csstitle title={"LEVEL 15"} />

        <div className="flex items-center justify-center flex-col relative space-y-2 font-mono">
          <div className="font-bold text-lg text-center px-10 mt-5">
            <p>
              Align the Mars base modules to the top of the container for proper
              setup!
            </p>
            <p className="text-sm text-gray-400 mt-2">
              <strong>Hint:</strong> Use <code>align-items</code> with a value
              that positions elements at the **top** of the flex container.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="px-6 py-4 text-[10px] mt-5 leading-relaxed text-[#ffffff] bg-[#222] rounded-md">
              <pre className="whitespace-pre-wrap font-mono">
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
                    className="rounded-sm outline-none w-[50px] text-black px-1"
                    maxLength={10}
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
      </Csslayout>
      <Cssbutton />
    </div>
  );
};

export default Cssq15;
