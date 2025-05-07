import { useState } from "react";
import { signupServices } from "../services/authService";
import { handleErrorAlert, handleSuccessAlert } from "../component/sweet-alert";
import { useNavigate } from "react-router-dom";

const SignUpHook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (credentials) => {
    setLoading(true);
    try {
      const data = await signupServices(credentials);
      handleSuccessAlert(data.message);

      setTimeout(() => {
        navigate("/Signin");
      }, 2000);

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
