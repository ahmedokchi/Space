import { useState, useEffect } from "react";
import { useAuth } from "../../auth/AuthProvider";

export function Comment({ articleId }) {
  const { user } = useAuth();
  const [comments, setComments] = useState([]); // Stocker les commentaires existants
  const [newComment, setNewComment] = useState("");

  // Simuler le fetch des commentaires (peut être remplacé par une API réelle)
  useEffect(() => {
    // Charger les commentaires spécifiques à l'article
    const storedComments = JSON.parse(localStorage.getItem(`comments-${articleId}`)) || [];
    setComments(storedComments);
  }, [articleId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      text: newComment,
      author: user?.username || "Anonyme",
      date: new Date(),
    };

    // Ajouter le commentaire à l'état local et sauvegarder dans le localStorage
    const updatedComments = [...comments, comment];
    setComments(updatedComments);
    localStorage.setItem(`comments-${articleId}`, JSON.stringify(updatedComments));

    setNewComment("");
  };

  return (
    <div className="comments-section">
      {user ? (
        <form onSubmit={handleSubmit}>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Votre commentaire..."
            required
          />
          <button type="submit">Envoyer</button>
        </form>
      ) : (
        <p>Connectez-vous pour laisser un commentaire</p>
      )}

      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <strong>{comment.author}</strong>
            <small>{new Date(comment.date).toLocaleDateString()}</small>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
