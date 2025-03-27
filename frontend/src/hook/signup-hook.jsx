import { useState } from "react";
import { signupServices } from "../services/authService";
import { handleErrorAlert, handleSuccessAlert } from "../component/sweet-alert";
const SignUpHook = () => {
  const [loading, setLoading] = useState(false);

  const handleSignup = async (credentials) => {
    setLoading(true);
    try {
      const data = await signupServices(credentials);
      handleSuccessAlert("Successfully Registered!");
      return data;
    } catch (error) {
      handleErrorAlert(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return { handleSignup, loading };
};

export default SignUpHook;
