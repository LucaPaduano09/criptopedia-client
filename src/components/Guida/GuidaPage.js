import React from 'react'
import "../../styles/GuidaPage.css"
const GuidaPage = (props) => {
    const titolo = props.titolo;
    const contenuto = props.contenuto;
  return (
    <div className='container'>
        <h1>{titolo}</h1>
        <h3 dangerouslySetInnerHTML={{__html:contenuto}}/>
    </div>
  )
}

export default GuidaPage