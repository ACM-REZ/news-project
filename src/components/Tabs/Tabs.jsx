import React from "react";
import classNames from "classnames";
import "./Tabs.css";

function Tabs({ tab, setTab }) {
  const hrClassNews = classNames({
    "tabs-item__hr": true,
    "tabs-item__hr_active": tab === "news",
  });

  const hrClassPromotions = classNames({
    "tabs-item__hr": true,
    "tabs-item__hr_active": tab === "promotions",
  });

  return (
    <div className="tabs">
      <button className="tabs__item tabs-item" onClick={() => setTab("news")}>
        <p className="tabs-item__p">Новости</p>
        <hr className={hrClassNews} />
      </button>
      <button
        className="tabs__item tabs-item"
        onClick={() => setTab("promotions")}
      >
        <p className="tabs-item__p">Акции</p>
        <hr className={hrClassPromotions} />
      </button>
    </div>
  );
}

export default Tabs;
