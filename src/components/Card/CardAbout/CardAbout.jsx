import React, { useState } from "react";
import Star from "../../UI/icons/Star";
import classNames from "classnames";
import "./CardAbout.css";
import { useNavigate } from "react-router-dom";

const CardAbout = ({
  id,
  title,
  titleRef,
  previewtext,
  textRef,
  classNamesTextWhite,
  isBackgroundImage,
  isPromotion,
}) => {
  const [isFavorite, setIsFavorites] = useState(false);
  const navigate = useNavigate();

  const classNameAbout = classNames({
    "card-text__about": true,
    "card-text-about": true,
    "card-text-container": isBackgroundImage,
  });

  const classNameTextPromotion = classNames({
    "card-text-promotions": isPromotion,
  });

  const classNameIsBackground = classNames({
    "card-text-isbackground": isBackgroundImage,
  });

  const classNameButton = classNames({
    "card-image__favorites": true,
    "card-image__favorites-transparent": isBackgroundImage,
    "card-image__favorites-promotion": isPromotion,
  });

  const classNameP = classNames({
    "card-text-roboto-p": isBackgroundImage,
  });

  const colorStar = isBackgroundImage ? "#ffffff" : "#1793bd";

  return (
    <div className={`${classNameIsBackground} ${classNameTextPromotion}`}>
      <div
        onClick={() => (isPromotion ? "" : navigate(`/news/${id}`))}
        className={classNameAbout}
      >
        <h3 className="card-text-about__title" ref={titleRef}>
          {title}
        </h3>
        <p
          className={`card-text-about__description ${classNamesTextWhite} ${classNameP}`}
          ref={textRef}
        >
          {previewtext}
        </p>
      </div>
      <button
        className={classNameButton}
        onClick={() => setIsFavorites(!isFavorite)}
      >
        <Star
          colorStroke={colorStar}
          colorFill={isFavorite ? colorStar : "none"}
        />
      </button>
    </div>
  );
};

export default CardAbout;
