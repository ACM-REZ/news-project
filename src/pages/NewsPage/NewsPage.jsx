import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "../../components/News/NewsCard";
import Navigation from "../../components/Navigation/Navigation";
import newsFull from "../../data/news.json";
import "./NewsPage.css";

const NewsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const selectedNews = newsFull.find((item) => item.id === parseInt(id));
    setData(selectedNews);
  }, [id]);

  return (
    <div className="container">
      <div className="news">
        <Navigation />
        <div>
          <h1 className="news-title">Новость</h1>
          <NewsCard
            pubDate={data.pubDate}
            fulltext={data.fulltext}
            title={data.title}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
