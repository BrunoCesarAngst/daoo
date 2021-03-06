import React, { useEffect, useState } from 'react'
import Api from '../../Api'

function ContactsView() {

  const [contacts, setContacts] = useState([])

  useEffect(() => {
    Api.get('/contacts')
    .then((response) => {
      // console.log(response)
      setContacts(response.data)
    })
    .catch((errors) => {
      console.log(errors)
    })
    .finally(() => {})
  }, [])

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
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="col-md-1"></div>
    </div>
  )
}

export default ContactsView