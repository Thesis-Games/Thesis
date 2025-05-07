import { useState } from "react";
import { verifyAccountService } from "../services/verify-account-service";

const VerifyAccountHook = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleVerifyAccount = async (token) => {
    setLoading(true);
    setMessage("");
    setError("");

    if (!token) {
      setError("Invalid verification link.");
      setLoading(false);
      return;
    }

    try {
      const data = await verifyAccountService(token);

      if (data?.success) {
        setMessage("Account verified successfully!");
      } else {
        setError("Verification failed.");
      }

      return data;
    } catch (err) {
      console.error("Verification Error:", err);
      setError("Link expired or server error.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, handleVerifyAccount, message, error };
};

export default VerifyAccountHook;
