import { Routes, Route, Navigate } from "react-router";
import { useAuth } from "../auth/AuthProvider";

import ArticlesCards from "../components/ArticlesCards/ArticlesCards";
import Contact from "../components/Contact/Contact";
import ArticlesDetails from "../components/ArticlesDetails/ArticlesDetails";
import NotFound from "../components/404/404";

export default function Router() {
  const { user } = useAuth(); 
  return (
    <Routes>
      <Route path="/" element={<ArticlesCards />} />
      <Route path="/articles" element={<ArticlesCards />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />

      <Route
        path="/articles/:id"
        element={user ? <ArticlesDetails /> : <Navigate to="/" replace />}
      />
    </Routes>
  );
}
