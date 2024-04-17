import React from "react";
import "./MainTitle.css";

function MainTitle() {
  return (
    <div className="mainTitle">
      <h1 className="mainTitle__title mainTitle-title">
        Излучай <span className="mainTitle-title__span">Новостной</span> Огонь
      </h1>
      <p className="mainTitle__description mainTitle-description">
        Приветствую! Я - фронтенд-разработчик. Мой подход к разработке основан
        на использовании передовых технологий, чтобы обеспечить пользователей
        лучшими возможными впечатлениями.{" "}
        <a
          target="_blank"
          rel="noreferrer"
          className="mainTitle-description__a"
          href="https://github.com/ACM-REZ"
        >
          Посмотреть код на github
        </a>
      </p>
    </div>
  );
}

export default MainTitle;
