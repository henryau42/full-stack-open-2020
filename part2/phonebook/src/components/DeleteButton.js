import React  from 'react'
import phonebookService from '../services/phonebook'

const DeleteButton = ({ name, id, setPersons, setFilteredPersons, setNotification, setNotificationClass }) => {
  const handleClick = () => {
    if (window.confirm(`Delete ${name}?`)) {
      phonebookService
        .deleteNumber(id)
        .then(() => {
          setNotificationClass('notification')
          setNotification(`Deleted ${name}`)
          setTimeout(() => {
            setNotification(null)
          }, 5000)
          phonebookService
            .getAll()
            .then(persons => {
              setPersons(persons)
              setFilteredPersons(persons)
            })
        })
    }
  }

  return (
    <button onClick={handleClick}>
      delete
    </button>
  )
}

export default DeleteButton