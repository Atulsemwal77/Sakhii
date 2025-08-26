import { createContext, useState, useContext, useEffect } from "react";
import api from "../api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user: null, loading: true });

  useEffect(() => {
    // check login status on mount
    const checkAuth = async () => {
      try {
        const res = await api.get("/auth/me"); // new endpoint
        setAuth({ user: res.data.user, loading: false });
      } catch (err) {
        setAuth({ user: null, loading: false });
      }
    };
    checkAuth();
  }, []);

  const login = (user) => setAuth({ user, loading: false });
  const logout = async () => {
    await api.post("/auth/logout");
    setAuth({ user: null, loading: false });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
