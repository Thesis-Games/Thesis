import { Navigate, Outlet } from "react-router-dom";
import Loading from "./loading-screen";
import { useEffect, useState } from "react";
import { getCookie } from "../services/cookie";
const ProtectedRoute = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const response = await getCookie();
        setToken(response?.token ?? null);
      } catch (error) {
        console.error("Error fetching cookie data:", error);
        setToken(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRole();
  }, []);

  if (isLoading) return <Loading />;

  if (!token) {
    return <Navigate to="/Signin" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
