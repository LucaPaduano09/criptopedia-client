import React from 'react'
import "../../styles/SingleNew.css"
import { useState, useEffect } from 'react';

const SingleNew = () => {
    const stringa = window.location.pathname;
    const id = stringa.replace("/news/", "");
    const [notice,setNotice] = useState({});

    useEffect(()=>{
        const getNotice = async () =>{
            const response = await fetch("https://criptopedia.herokuapp.com/news/" + id ,{
                method: "GET",
            })
            if(!response.ok){
                window.alert('error fetching notice');
            }
            const result = await response.json();
            setNotice(result);
        }
        getNotice();
        console.log("finito useEffect");
    },[])

  return (
    <div className='single-new-container'>
        <div className='single-new-wrapper'>
            <div className='notice-image-container'>
                <img src={notice.image} alt='immagine'/>
            </div>
            <div className='notice-text'>
                <div dangerouslySetInnerHTML={{__html: notice.testo }}/>
            </div>
        </div>
    </div>
  )
}

export default SingleNew