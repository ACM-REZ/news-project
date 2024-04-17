import React from "react";
import Like from "../../UI/icons/Like";
import Comments from "../../UI/icons/Comments";
import Views from "../../UI/icons/Views";
import classNames from "classnames";
import { DateTime } from "luxon";
import "./CardInfo.css";

const CardInfo = ({ pubDate, isBackgroundImage, isPromotion }) => {
  const iconColor = isBackgroundImage ? "#ffffff" : "#8591a5";

  const promotionStatus =
    Number(pubDate * 1000) < Date.now() ? "Завершено" : "Предложение активно";

  const classNamesTextWhite = classNames({
    "card-info": true,
    "card-info-white": isBackgroundImage,
  });
  return (
    <div className={classNamesTextWhite}>
      <div className="card-info__date card-info-date">
        <p className="card-info-date__date">
          {DateTime.fromMillis(Number(pubDate * 1000)).toFormat("dd.MM.yyyy")}
        </p>
        {isPromotion && (
          <>
            <hr className="card-info-date__hr" />{" "}
            <p className="card-info-date__status">{promotionStatus}</p>
          </>
        )}
      </div>
      <div className="card-info__stats card-stats">
        <div className="card-stats__item card-stats-item_clickable">
          <Like iconColor={iconColor} />
          <p className="card-stats-item__count">123</p>
        </div>
        {!isPromotion && (
          <div className="card-stats__item card-stats-item_clickable">
            <Comments iconColor={iconColor} />
            <p className="card-stats-item__count">123</p>
          </div>
        )}
        <div className="card-stats__item">
          <Views iconColor={iconColor} />
          <p className="card-stats-item__count">123</p>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
