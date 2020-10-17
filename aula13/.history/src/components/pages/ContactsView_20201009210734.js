import React, { useState } from 'react'

function ContactsView() {

  const [contacts, setContacts] = useState([])

  useEffect(() => {
    effect
    return () => {
      cleanup
    }
  }, [input])

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
            {contacts.map((contact, index) => 
              <tr key={index}>
              <td>{contact.id}</td>
              <td>{contact.Nome}</td>
              <td>{contact.email}</td>
            )}
          </tbody>
        </table>
      </div>
      <div className="col-md-1"></div>
    </div>
  )
}

export default ContactsView