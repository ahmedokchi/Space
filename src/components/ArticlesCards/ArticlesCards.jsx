import { useNavigate } from "react-router";
import ApiFetch from "../../api/ApiFetch";
import { Login, Logout } from "../../auth/LoginOut";
import { useAuth } from "../../auth/AuthProvider";
import "./ArticlesCards.scss";

export default function ArticlesCards() {
  const navigate = useNavigate();
  const { user } = useAuth(); 
  const handleCardClick = (id) => {
    navigate(`/articles/${id}`);
  };

  return (
    <div className="articles-page">
      <div className="auth-buttons">
        {user ? (
          <>
            <p>Bienvenue, {user.username}!</p>
            <Logout />
          </>
        ) : (
          <Login />
        )}
      </div>

      {/* Section des cartes des articles */}
      <ApiFetch url="https://api.spaceflightnewsapi.net/v4/articles/">
        {(data) => (
          <div className="cards">
            {data?.results &&
              data.results
                .filter((article) => article.image_url)
                .map((article) => (
                  <div
                    key={article.id}
                    className="articles__item"
                    onClick={() => handleCardClick(article.id)}
                  >
                    <img
                      className="article-image"
                      src={article.image_url}
                      alt={article.title}
                    />
                    <div className="article-content">
                      <p className="article-title">{article.title}</p>
                      <p className="article-date">
                        {new Date(article.published_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
          </div>
        )}
      </ApiFetch>
    </div>
  );
}
