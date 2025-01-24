import { useState, useEffect } from "react";
import "./loader.scss";

export default function ApiFetch({ url, children }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  // État pour gérer le chargement
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setError(null);
        // Mettre à jour l'état isLoading une fois les données chargées
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        // Même si une erreur survient, mettre isLoading à false
        setIsLoading(false);
      });
  }, [url]);

  if (isLoading) {
    return (
      <div className="container">
        <div className="container__content">
          <span className="loader"></span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return <>{data && children(data)}</>;
}
