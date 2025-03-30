import { useState } from "react";
import { handleErrorAlert, handleSuccessAlert } from "../component/sweet-alert";
import { signinServices } from "../services/authService";
import { useNavigate } from "react-router-dom";
const SignInHook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (credentials) => {
    setLoading(true);
    try {
      const data = await signinServices(credentials);
      handleSuccessAlert("Successfully signed in!");

      setTimeout(() => {
        navigate("/home");
      }, 2000);

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
