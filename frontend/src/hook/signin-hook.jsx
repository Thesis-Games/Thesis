import { useState } from "react";
import { handleErrorAlert, handleSuccessAlert } from "../component/sweet-alert";
import { signinServices } from "../services/authService";
const SignInHook = () => {
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (credentials) => {
    setLoading(true);
    try {
      const data = await signinServices(credentials);
      handleSuccessAlert("Successfully signed in!");
      return data;
    } catch (error) {
      handleErrorAlert(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return { handleSignIn, loading };
};

export default SignInHook;
