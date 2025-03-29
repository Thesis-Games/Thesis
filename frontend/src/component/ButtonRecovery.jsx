import React from "react";
import { Link } from "react-router-dom";

const ButtonRecovery = ({ handleSubmit }) => {
  return (
    <div>
      <div className="flex items-center justify-center gap-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-mono">
        <Link to="/Signin">
          <button className="bg-[#b6b3b3] w-[160px] h-[60px] rounded-full font-bold text-[#084747] border-white border-2 hover:bg-[#e2e2e2]">
            Back
          </button>
        </Link>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-[#b6b3b3] w-[160px] h-[60px] rounded-full font-bold text-[#084747] border-white border-2 hover:bg-[#f0f0f0]"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ButtonRecovery;
