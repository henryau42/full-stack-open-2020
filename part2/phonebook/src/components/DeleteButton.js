import React  from 'react'
import phonebookService from '../services/phonebook'

const DeleteButton = ({ name, id, setFilteredPersons }) => {
  const handleClick = () => {
    if (window.confirm(`Delete ${name}?`)) {
      phonebookService
        .deleteNumber(id)
        .then(() => {
          console.log(`Deleted ${name}`)
        })

      phonebookService
        .getAll()
        .then(persons => {
          setFilteredPersons(persons)
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