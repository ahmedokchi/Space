import { useParams } from "react-router-dom";
import ApiFetch from "../../api/ApiFetch";
import { Comment } from "../Comments/Comments";
import "./ArticlesDetails.scss";

export default function ArticlesDetails() {
  const { id } = useParams();

  return (
    <ApiFetch url={`https://api.spaceflightnewsapi.net/v4/articles/${id}`}>
      {(data) => {
        const article = data;

        return (
          <div className="article-details">
            <h1>{article.title}</h1>
            <img
              className="article-image"
              src={article.image_url}
              alt={article.title}
            />
            <p className="article-date">
              Publié le: {new Date(article.published_at).toLocaleDateString()}
            </p>
            <p className="article-description">{article.summary}</p>
            <p>{article.content}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              En savoir plus
            </a>
            
            <div className="comments-section">
              <Comment />
            </div>
          </div>
        );
      }}
    </ApiFetch>
  );
}
