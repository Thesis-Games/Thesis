import React from "react";

export const FormLayoutComponent = ({ children }) => {
  return (
    <div>
      <div
        className="bg-[#3eff7e] rounded-lg shadow-lg w-[590px] h-[600px] flex items-center justify-center relative  border-[#ffffff]  shadow-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#00e5ff max-xl:text-xl max-lg:text-lg max-md:text-md max-sm:text-sm
        max-xl:w-[600px] max-lg:w-[530px] max-md:w-[470px] max-sm:w-[400px]

        max-lg:h-[550px] max-md:h-[480px] max-sm:h-[400px]
      "
        style={{
          boxShadow: `
            0 0 10px rgba(255, 255, 255, 0.8), 
            0 0 20px rgba(255, 255, 255, 0.6), 
            0 0 30px rgba(255, 255, 255, 0.4)
          `,
        }}
      >
        <div
          className="bg-[#050505] rounded-lg shadow-lg w-[560px] h-[570px] flex items-center justify-center max-xl:text-xl max-lg:text-lg max-md:text-md max-sm:text-sm 
         max-xl:w-[580px] max-lg:w-[510px] max-md:w-[450px] max-sm:w-[380px]

             max-lg:h-[520px] max-md:h-[450px] max-sm:h-[380px]"
        >
          <div
            className="bg-[#06dea8] rounded-lg shadow-lg w-[530px] h-[530px] p-5 flex flex-col items-center justify-center relative max-xl:text-xl max-lg:text-lg max-md:text-md max-sm:text-sm  
                 max-xl:w-[550px] max-lg:w-[480px] max-md:w-[420px] max-sm:w-[350px]

                      max-lg:h-[480px] max-md:h-[420px] max-sm:h-[360px]
          "
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
