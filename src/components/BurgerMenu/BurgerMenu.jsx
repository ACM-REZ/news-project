import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useResize } from "../../utilits/useResize";
import Burger from "../UI/icons/Burger";
import HeaderMenu from "../../layout/HeaderMenu";
import "./BurgerMenu.css";

const BurgerMenu = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const width = useResize();

  useEffect(() => {
    if (width > 1279) {
      setIsOpenPopup(false);
    }
  }, [width]);

  const classNamesBurger = classNames({
    burger: true,
  });

  const classNamesUserName = classNames({
    "header-user__name": true,
  });

  useEffect(() => {
    if (isOpenPopup) {
      document.body.classList.add("popup-open");
    } else {
      document.body.classList.remove("popup-open");
    }
  }, [isOpenPopup]);

  return (
    <>
      <div className="header-menu">
        <a href="/profile" className="header-content__user header-user">
          <p className={classNamesUserName}>Александра</p>
          <div className="header-user__photo header-user-photo">
            <div className="header-user-photo__photo"></div>
          </div>
        </a>
        <button
          className={classNamesBurger}
          onClick={() => setIsOpenPopup(true)}
        >
          <Burger />
        </button>
      </div>
      {isOpenPopup && (
        <HeaderMenu isOpenPopup={isOpenPopup} setIsOpenPopup={setIsOpenPopup} />
      )}
    </>
  );
};

export default BurgerMenu;
