import { useState } from "react";
import { handleErrorAlert, handleSuccessAlert } from "../component/sweet-alert";
import { resetPasswordService } from "../services/authService";
const ResetPasswordHook = () => {
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (resetData) => {
    setLoading(true);
    try {
      const data = await resetPasswordService(resetData);
      handleSuccessAlert("Successfully signed in!");
      return data;
    } catch (error) {
      handleErrorAlert(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, handleResetPassword };
};

export default ResetPasswordHook;
