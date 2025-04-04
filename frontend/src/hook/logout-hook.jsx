import { logoutServices } from "../services/authService";
import { useNavigate } from "react-router-dom";
const LogoutHook = () => {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await logoutServices();
      navigate("/Signin");
    } catch (error) {
      console.error(error);
    }
  };

  return { logout };
};

export default LogoutHook;
