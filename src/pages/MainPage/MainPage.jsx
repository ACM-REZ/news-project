import React, { useEffect, useState } from "react";
import MainTitle from "../../components/MainTitle/MainTitle";
import Tabs from "../../components/Tabs/Tabs";
import CardsGrid from "../../components/CardsGrid/CardsGrid";
import news from "../../data/news.json";
import promotions from "../../data/promotions.json";

function MainPage() {
  const [tab, setTab] = useState("news");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (tab === "news") {
      setData(news);
    }

    if (tab === "promotions") {
      setData(promotions);
    }
  }, [tab]);

  return (
    <div className="main">
      <div className="container">
        <MainTitle />
        <Tabs tab={tab} setTab={setTab} />
        <CardsGrid data={data} tab={tab} />
      </div>
    </div>
  );
}
export default MainPage;
