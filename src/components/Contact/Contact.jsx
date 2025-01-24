import { useState } from "react";
import "./Contact.scss";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setIsSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {isSubmitted ? (
          <div className="contact-success">
            <h2>Merci pour votre message!</h2>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Envoyer
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
