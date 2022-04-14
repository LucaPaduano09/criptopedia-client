import React from "react";
import "../../styles/NewsHome.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import Animazione from "./loading.json";

const NewsHome = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animazione,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const response = await fetch("https://criptopedia.herokuapp.com/news", {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        window.alert("errore nel fetching delle news");
        return;
      }
      const result = await response.json();
      setNews(result);
      setLoading(false);
    };
    getNews();
  }, [news.length]);

  return (
    <div className="news-home-container">
      <div className="news-list-container">
        {news.map((n) => (
          <Link to={"/news/"+ n._id}>
            {loading === true ? (
              <div>
                <p style={{ color: "white" }}>Stiamo caricando le news, grazie per la pazienza</p>
                <div>
                  <Lottie
                    style={{ height: "200px", width: "200px" }}
                    options={defaultOptions}
                  />
                </div>
              </div>
            ) : (
              <div className="single-list-wrapper">
                <div className="single-list-new">
                  <img src={n.image} alt="news" />
                  <div className="single-list-new-text">
                    <h1>{n.titolo}</h1>
                    <h3>{n.descrizione}</h3>
                  </div>
                </div>
                <div className="separator"></div>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsHome;
