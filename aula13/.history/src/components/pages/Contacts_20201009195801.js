import React from 'react';
import {useForm, ErrorMessage} from 'react-hook-form'

function Contacts() {

  const {handleSubmit, register, erros} = useForm();

  const onSubmit = data => {
    console.log(data)
  }

  return(
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
      <form onSubmit={ handleSubmit(onSubmit)}>
          <div className="form-group">
              <label for="nome">Nome:</label>
              <input ref={register({
                required:"Required"
              })} name className="form-control" type="text" id="nome" />
          </div>
          <div className="form-group">
              <label for="email">E-mail:</label>
              <input className="form-control" type="email" id="email" />
          </div>
          <div className="form-group">
              <label for="msg">Mensagem:</label>
              <textarea className="form-control" id="msg"></textarea>
          </div>
          <button className="btn btn-primary"type="submit">Enviar</button>
          <br/>
          <br/>
      </form>
      </div>
      <div className="col-md-1"></div>
    </div>
  )
}

export default Contacts