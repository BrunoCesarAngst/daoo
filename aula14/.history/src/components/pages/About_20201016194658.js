import React, { useState } from 'react'

function About() {

  const [page, setPage] = useState([]);

  useEffect(() => {
    Api.get("/pages/1").then((response) => {
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