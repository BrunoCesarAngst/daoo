import React, { useState } from 'react'
import Api from '../../Api'

function Home() {

  const [page, setPage] = useState([]);

  us

  return(
    <div className="row">
      <div className="col-md-1"></div>
      <div
        className="col-md-10"
        dangerouslySetInnerHTML={
          {
            __html : page.content
          }
        }      
      >
        
      </div>
      <div className="col-md-1"></div>
    </div>
  )
}

export default Home