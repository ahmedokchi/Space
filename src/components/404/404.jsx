import { Link } from 'react-router-dom';
import './404.scss';

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__message">Oups! La page que vous recherchez existe pas.</p>
        <Link to="/" className="not-found__link">
          Acceuil
        </Link>
      </div>
    </div>
  );
}
