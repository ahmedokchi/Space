import { useLocation, useNavigate } from "react-router";
import "./header.scss";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const isArticleDetailsPage = location.pathname.includes("/articles/");

  const pageName = location.pathname.split("/").pop();
  const displayName = isArticleDetailsPage
    ? "Articles"
    : pageName
    ? pageName
    : "Accueil";

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleNavigateToContact = () => {
    navigate("/contact");
  };

  return (
    <div className="header">
      {displayName !== "Accueil" && (
        <a onClick={handleGoBack} className="header__back-link">
          <p>Return</p>
        </a>
      )}

      <h1 className="header__title">{displayName}</h1>

      <div className="header__menu">
        <button onClick={handleNavigateToContact} className="header__menu-link">
          Contact
        </button>
      </div>
    </div>
  );
}
