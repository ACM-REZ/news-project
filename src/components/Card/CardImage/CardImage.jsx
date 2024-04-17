import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import defaultImage from "../../../assets/images/defaultCard.jpg";
import "./CardImage.css";

const CardImage = ({ id, img, isBackgroundImage, isPromotion }) => {
  const classNameImageBlock = classNames({
    card__image: true,
    "card-image": true,
    "card-image-promotion": isPromotion,
  });

  const classNameImage = classNames({
    "card-image__img": true,
    "card-image-img": true,
    "card-image-img-background": isBackgroundImage,
    "card-image-img-promotion": isPromotion,
  });

  return (
    <Link to={isPromotion ? "" : `/news/${id}`} className={classNameImageBlock}>
      <div className={classNameImage}>
        <img
          className="card-image-img__img"
          src={img || defaultImage}
          alt={"#"}
          onError={(e) => {
            e.target.src = defaultImage;
          }}
        />
      </div>
    </Link>
  );
};

export default CardImage;
