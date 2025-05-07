import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import VerifyAccountHook from "../hook/verify-account";
import Loading from "../component/loading-screen";
import background from "../picture/front.gif";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const VerifyAccount = () => {
  const { token } = useParams();
  const { loading, handleVerifyAccount, message, error } = VerifyAccountHook();

  useEffect(() => {
    handleVerifyAccount(token);
  }, [token]);

  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center space-y-4 w-[90%] max-w-md text-center">
        {loading ? (
          <Loading />
        ) : error !== "" ? (
          <>
            <FaTimesCircle className="text-red-600 text-5xl animate-pulse" />
            <h1 className="text-2xl font-semibold text-red-600">
              Link Expired
            </h1>
          </>
        ) : message !== "" ? (
          <>
            <FaCheckCircle className="text-green-600 text-5xl animate-pulse" />
            <h1 className="text-2xl font-semibold text-green-600">
              Account Verified Successfully
            </h1>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default VerifyAccount;
