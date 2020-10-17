import React from 'react'

function Contacts() {
  return(
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
      <form>
          <div className="form-group">
              <label for="nome">Nome:</label>
              <input cla type="text" id="nome" />
          </div>
          <div className="form-group">
              <label for="email">E-mail:</label>
              <input cla type="email" id="email" />
          </div>
          <div className="form-group">
              <label for="msg">Mensagem:</label>
              <textarea cla id="msg"></textarea>
          </div>
          <button type="submit">Enviar</button>
          <br/>
          <br/>
      </form>
      </div>
      <div className="col-md-1"></div>
    </div>
  )
}

export default Contacts