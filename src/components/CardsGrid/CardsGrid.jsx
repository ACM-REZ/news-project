import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import ButtonBlue from "../UI/ButtonBlue/ButtonBlue";
import classNames from "classnames";
import "./CardsGrid.css";

function News({ data, tab }) {
  const [cardsToShow, setCardsToShow] = useState(5);
  const sortedRes = data.slice(0, cardsToShow);

  const classNamePromotion = classNames({
    cards: true,
    "cards-promotions": tab === "promotions",
  });

  useEffect(() => {
    if (tab === "news") {
      setCardsToShow(5);
    } else {
      setCardsToShow(3);
    }
  }, [tab]);

  return (
    <div className="cards-block">
      <div className={classNamePromotion}>
        {sortedRes?.map((item, key) => {
          return (
            <Card
              id={item.id}
              index={key}
              tab={tab}
              key={item.pubDate}
              img={item.image}
              title={item.title}
              previewtext={item.previewtext}
              pubDate={item.pubDate}
            />
          );
        })}
      </div>
      {data.length > cardsToShow && (
        <div className="cards-block__button">
          <ButtonBlue
            onClick={() =>
              setCardsToShow((prev) => prev + (tab === "news" ? 5 : 3))
            }
          >
            Смотреть еще
          </ButtonBlue>
        </div>
      )}
    </div>
  );
}

export default News;
