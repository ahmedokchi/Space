import { useAuth } from "./AuthProvider";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Se connecter</button>
        </form>
    </>
  );
}

function Logout() {
  const { logout } = useAuth();

  return <button onClick={logout}>Se déconnecter</button>;
}

export { Login, Logout };
