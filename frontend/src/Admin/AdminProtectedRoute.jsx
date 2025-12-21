// components/ProtectedRoute.jsx
import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_BACKEND}/api/admin/me`, {
          withCredentials: true,
        });
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Auth check failed:", error?.response?.data || error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // spinner / skeleton here
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} />;
  }

  return children;
};

export default AdminProtectedRoute;
