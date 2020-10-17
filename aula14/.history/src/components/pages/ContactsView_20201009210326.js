import React, { useState } from 'react'

function ContactsView() {

  const [contacts, setContacts] = useState([])

  return (
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <h1>List Contacts</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {contacts.}
          </tbody>
        </table>
      </div>
      <div className="col-md-1"></div>
    </div>
  )
}

export default ContactsView