import React from "react";
import background from "../picture/front.gif";
import { FormLayoutComponent } from "./FormLayoutComponent";
import TitleComponent from "./TitleComponent";
import ButtonRecovery from "./ButtonRecovery";
const Resetrecover = () => {
  return (
    <div
      className="w-full h-screen relative flex items-center justify-center flex-col"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover", // Makes the image cover the entire area
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
      }}
    >
      <FormLayoutComponent>
        <div>
          <TitleComponent title={"RECOVER"} />
        </div>
        <form className="w-full flex flex-col gap-7 items-center font-mono ">
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-full  bg-black text-white text-center font-bold w-[90%]   tracking-wide text-xl border-2 border-[#ffffff] shadow-lg shadow-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#00e5ff"
          />
        </form>

        <div>
          <ButtonRecovery />
        </div>
      </FormLayoutComponent>
    </div>
  );
};

export default Resetrecover;
