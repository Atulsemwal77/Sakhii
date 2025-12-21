import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { auth } = useAuth();

  if (auth.loading) return <p>Loading...</p>;
  if (!auth.user) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
