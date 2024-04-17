import React, { useState } from "react";
import "./Navigation.css";
import links from "../../constants/links.json";
import classNames from "classnames";

const Navigation = ({ isHeader }) => {
  const [linkValue, setLinkValue] = useState("favorite");

  const classNamesNavigation = classNames({
    navigation: true,
    "navigation-header": isHeader,
  });

  const classNamesNavigationItem = classNames({
    "navigation-list__item": true,
    "navigation-list__item-header": isHeader,
  });

  const classNamesNavigationList = classNames({
    navigation__list: true,
    "navigation-list": true,
    "navigation__list-header": isHeader,
  });

  return (
    <div className={classNamesNavigation}>
      <ul className={classNamesNavigationList}>
        {links.map((link) => {
          return (
            <li
              onClick={() => setLinkValue(link.value)}
              className={classNamesNavigationItem}
              key={link.value}
            >
              <a
                className={`navigation-list-item__a ${
                  link.value === linkValue
                    ? "navigation-list-item__a_active"
                    : ""
                }`}
                href="/"
              >
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
