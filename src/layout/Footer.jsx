import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-content__social footer-social">
            <a href="/" className="footer-social__circle footer-social-circle">
              <div className="footer-social-circle__youtube"></div>
            </a>
            <a href="/" className="footer-social__circle footer-social-circle">
              <div className="footer-social-circle__instagram"></div>
            </a>
          </div>
          <hr className="footer-content__hr" />
          <ul className="footer-content__links footer-links">
            <li className="footer-links__li">
              <a href="/" className="footer-links__a">
                Правила
              </a>
            </li>
            <li className="footer-links__li">
              <a href="/" className="footer-links__a">
                Документы
              </a>
            </li>
            <li className="footer-links__li">
              <a href="/" className="footer-links__a">
                Политика конфиденциальности
              </a>
            </li>
          </ul>
          <hr className="footer-content__hr" />
          <div className="footer-content__logo footer-logo">
            <Link to="/" className="footer-logo__logo">
              NEWS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
