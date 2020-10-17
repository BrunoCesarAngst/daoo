import React, { useState } from 'react'

function ContactsView() {

  const [contacts, setContacts] = useState([])

  return (
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <h1>Página View </h1>
        <p>Texto</p>
      </div>
      <div className="col-md-1"></div>
    </div>
  )
}

export default ContactsView