import { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext(undefined);

// eslint-disable-next-line react/prop-types
export  default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = Cookies.get("user");
    console.log("Utilisateur récupéré depuis les cookies :", storedUser);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username, password) => {
    console.log("Tentative de connexion :", username);
    if (username === "admin" && password === "1234") {
      const newUser = { username };
      setUser(newUser);
      Cookies.set("user", JSON.stringify(newUser), { expires: 1 });
      console.log("Utilisateur connecté :", newUser);
    } else {
      alert("Identifiants incorrects");
    }
  };

  const logout = () => {
    console.log("Déconnexion");
    setUser(null);
    Cookies.remove("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    console.error("AuthContext introuvable");
    throw new Error("Authentification impossible");
  }
  return context;
}
