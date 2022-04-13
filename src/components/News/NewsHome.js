import React from 'react'
import "../../styles/NewsHome.css"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const NewsHome = () => {
  const [news, setNews] = useState([])

  useEffect(()=>{
    const getNews = async() =>{
      const response = await fetch("https://criptopedia.herokuapp.com/news",{
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      })
      if(!response.ok){
        window.alert('errore nel fetching delle news');
        return
      }
      const result = await response.json()
      setNews(result);
    }
    getNews();
  },[news.length])

  return (
    <div className='news-home-container'>
      <div className='news-list-container'>
        {
          news.map((n)=>(
            <Link>
              <div className='single-list-wrapper'>
                <div className='single-list-new'>
                  <img src={n.image} alt="news-image"/>
                  <div className='single-list-new-text'>
                    <h1>{n.titolo}</h1>
                    <h3>{n.descrizione}</h3>
                  </div>
                </div>
                <div className='separator'></div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default NewsHome