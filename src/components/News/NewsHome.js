import React from "react";
import "../../styles/NewsHome.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import Animazione from "./loading.json";

const NewsHome = () => {
  const [news, setNews] = useState([]);
  const [copia, setCopia] = useState([]);
  const [loading, setLoading] = useState(false);

  //variabili controllo filter
  const [appro, setAppro] = useState(false);
  const [notizia, setNotizia] = useState(false);
  const approfondimenti = news.filter((el,index)=> {return (el.tipologia === "approfondimento")});
  const notizie = news.filter((el,index)=> {return (el.tipologia === "notizia")})

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animazione,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  const handleApprClick = (copia) => {
    // console.log(copia)
    setNews(copia);
    let filtered = [] ;
    filtered = copia.filter((el,index)=> {return (el.tipologia === "approfondimento")})
    // console.log(filtered)
    console.log(news)
    setNews(filtered);
  }
  const handleNewsClick = (copia) => {
    // console.log(copia);
    setNews(copia);
    let filtered = copia.filter((el,index)=> {return (el.tipologia === "notizia")})
    console.log(news)
    setNews(filtered);
  }
  const handleTutteClick = (copia) => {
    setNews(copia);
  }
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

      //ordino in modo descrescente l'array
      result.sort((a, b) => a - b).reverse()
      setNews(result);
      setCopia(result);
      setLoading(false);
    };
    getNews();
  },[]);

  return (
    <div className="news-home-container">
      <div className="filter-container">
        <div className="tipo-filter-container">
          <button onClick={() => handleApprClick(copia)}>
            <div>Integrazioni</div>
          </button>
          <button onClick={() => handleNewsClick(copia)}>
            <div>
              Notizie  
            </div>
          </button>
          <button onClick={() => handleTutteClick(copia)}>
            <div>tutte</div>
          </button>
        </div>
        <div className="search-bar-container">
          <input type="text" placeholder="cerca qualcosa..."/>
          <img src="/loupe.png" alt="icona" style={{height:"25px"}}/>
        </div>
      </div>
      <div className="news-list-container">
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
                  news.map((n) => (
                <Link to={"/news/"+ n._id}>
                    <div className="single-list-wrapper">
                      <div className="single-list-new">
                        <img src={n.image} alt="news" />
                        <div className="single-list-new-text">
                          <h1>{n.titolo}</h1>
                          <div className="single-new-category">
                            {n.categorie.map((el,index)=>(
                              <p className='single-category'key={index}>{el}</p>
                            ))}
                          </div>
                          <h3>{n.descrizione}</h3>
                        </div>
                      </div>
                      <div className="separator"></div>
                    </div>
                </Link>)
                  
            ))
        }
      </div>
    </div>
  );
};

export default NewsHome;
