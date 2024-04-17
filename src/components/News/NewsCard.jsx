import React from "react";
import parse from "html-react-parser";
import "./NewsCard.css";
import { DateTime } from "luxon";

const NewsCard = ({ fulltext, pubDate, title }) => {
  return (
    <div className="news-content">
      <p className="news-content-header__date">
        {pubDate &&
          DateTime.fromMillis(Number(pubDate * 1000))
            .setLocale("ru")
            .toFormat("dd MMMM yyyy")}
      </p>
      <h2 className="news-content-header__title">{title}</h2>
      <div className="news-content__text">
        {parse(fulltext ? fulltext : "")}
      </div>
    </div>
  );
};

export default NewsCard;
