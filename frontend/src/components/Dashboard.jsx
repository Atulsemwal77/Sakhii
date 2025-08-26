import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import api from "../api";

const Dashboard = () => {
  const { auth, logout } = useAuth();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await api.get("/auth/dashboard");
        setMessage(res.data.message);
      } catch (err) {
        setMessage("Error fetching dashboard");
      }
    };
    fetchDashboard();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>User: {auth.user?.name}</p>
      <p>{message}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
