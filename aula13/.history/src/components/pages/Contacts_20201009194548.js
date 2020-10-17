import React from 'react'

function Contacts() {
  return(
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
      <form>
          <div cla>
              <label for="nome">Nome:</label>
              <input type="text" id="nome" />
          </div>
          <div cla>
              <label for="email">E-mail:</label>
              <input type="email" id="email" />
          </div>
          <div cla>
              <label for="msg">Mensagem:</label>
              <textarea id="msg"></textarea>
          </div>
      </form>
      </div>
      <div className="col-md-1"></div>
    </div>
  )
}

export default Contacts