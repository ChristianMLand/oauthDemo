import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Context, useREST } from "~/util";

export function AuthContext({ children }) {
  const [user, setUser] = useState(null);
  const authService = useREST("/auth");
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => authService.delete().then(() => setUser(null));

  useEffect(() => {
    if (location.pathname === "/" || user) return;
    authService.get()
      .then(({ data }) => setUser(data))
      .catch(() => navigate("/"));
  }, [location, user]);

  return (
    <Context.Provider value={{ user, logout }}>
      {children}
    </Context.Provider>
  );
}