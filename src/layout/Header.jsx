import { Link } from "react-router-dom";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-content container">
        <div className="header-content__logo header-logo">
          <Link to="/" className="header-logo__logo">
            NEWS
          </Link>
        </div>
        <div className="header-content__menu" id="burger">
          <BurgerMenu />
        </div>
        <div className="header-content__search-form header-search-form">
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noreferrer"
            className="header-search-form__button"
          >
            <i className="fas fa-search"></i>
          </a>
          <input id="header-input" className="header-search-form-input" />
        </div>
      </div>
    </header>
  );
};
