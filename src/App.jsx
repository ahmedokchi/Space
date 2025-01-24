import Router from "./routes/Router";
import "./App.css";
import AuthProvider from "./auth/AuthProvider";

function App() {
  return (
    <>
    <AuthProvider>
      <Router />
      </AuthProvider>
    </>
  );
}

export default App;
