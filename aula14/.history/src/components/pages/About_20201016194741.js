import React, { useEffect, useState } from 'react'
import Api from '../../Api';

function About() {

  const [page, setPage] = useState([]);

  useEffect(() => {
    Api.get("/pages/12").then((response) => {
      setPage(response.data);
    });
  }, []);

  return(
    <div className="row">
      <div className="col-md-1"></div>
      <div 
        className="col-md-10"
        dangerouslySetInnerHTML={{
          __html: page.content,
        }}
      >
        <h1>Página Sobre</h1>
        <p>Texto</p>
      </div>
      <div className="col-md-1"></div>
    </div>
  )
}

export default About