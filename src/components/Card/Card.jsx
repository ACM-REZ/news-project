import React, { useEffect, useRef } from "react";
import shave from "shave";
import CardImage from "./CardImage/CardImage";
import CardInfo from "./CardInfo/CardInfo";
import CardAbout from "./CardAbout/CardAbout";
import classNames from "classnames";
import { isNewsBackground } from "../../utilits/isNewsBackground";
import { useResize } from "../../utilits/useResize";
import { isPromotionFirst } from "../../utilits/isPromotionFirst";
import defaultImage from "../../assets/images/defaultCard.jpg";
import "./Card.css";

function Card({ id, index, tab, img, title, previewtext, pubDate }) {
  const titleRef = useRef(null);
  const textRef = useRef(null); // Для Обрезки текста
  const width = useResize(); // Для ширины экрана
  const isPromotion = tab === "promotions";
  const isPromotionRevert = isPromotionFirst(tab, index);
  const isBackgroundImage = isNewsBackground(index, tab);

  useEffect(() => {
    shave(titleRef.current, 81); //  Обрезка слишком больших заголовков

    if (isBackgroundImage) {
      shave(textRef.current, 111 - titleRef.current.clientHeight); //Обрезка текста с картинкой фоном
    } else {
      shave(textRef.current, 123 - titleRef.current.clientHeight); //Обрезка текста без фоновой картинки
    }
  }, [width, isBackgroundImage]);

  const classNamesBackground = classNames({
    card: true,
    "card-background": isBackgroundImage,
    "card-promotion": isPromotion,
    "card-promotion-revert": isPromotionRevert,
  });

  const classNamesTextWhite = classNames({
    "card-text-white": isBackgroundImage,
  });

  const classNamesCardText = classNames({
    card__text: true,
    "card-text": true,
    "card-text-promotion": isPromotion,
  });

  return (
    <div
      style={{
        background: isBackgroundImage
          ? `linear-gradient(0deg, rgba(18, 25, 32, 0.70) 0%, rgba(18, 25, 32, 0.70) 100%), url(${
              img || defaultImage
            }), lightgray 50% / cover no-repeat`
          : "",
      }}
      className={classNamesBackground}
    >
      <CardImage
        id={id}
        img={img}
        isBackgroundImage={isBackgroundImage}
        isPromotion={isPromotion}
      />
      <div className={`${classNamesCardText} ${classNamesTextWhite}`}>
        <CardAbout
          id={id}
          title={title}
          titleRef={titleRef}
          previewtext={previewtext}
          textRef={textRef}
          classNamesTextWhite={classNamesTextWhite}
          isBackgroundImage={isBackgroundImage}
          isPromotion={isPromotion}
        />
        <CardInfo
          pubDate={pubDate}
          isBackgroundImage={isBackgroundImage}
          isPromotion={isPromotion}
        />
      </div>
    </div>
  );
}

export default Card;
