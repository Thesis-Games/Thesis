import { useState } from "react";
import { handleErrorAlert, handleSuccessAlert } from "../component/sweet-alert";
import { forgotPasswordService } from "../services/authService";
const ForgotPasswordHook = () => {
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async (email) => {
    setLoading(true);
    try {
      const data = await forgotPasswordService(email);
      handleSuccessAlert("Email sent successfully!");
      return data;
    } catch (error) {
      handleErrorAlert(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, handleForgotPassword };
};

export default ForgotPasswordHook;
