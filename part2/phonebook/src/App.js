import React, { useState, useEffect } from 'react'
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import phonebookService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ filteredPersons, setFilteredPersons ] = useState([])
  const [ newSearch, setNewSearch ] = useState('')

  useEffect(() => {
    phonebookService
      .getAll()
      .then(initialPhonebook => {
        setPersons(initialPhonebook)
        setFilteredPersons(initialPhonebook)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
          persons={persons}
          newSearch={newSearch}
          setNewSearch={setNewSearch}
          setFilteredPersons={setFilteredPersons}
      />
      <h2>Add a new</h2>
      <PersonForm
          persons={persons}
          setPersons={setPersons}
          newSearch={newSearch}
          filteredPersons={filteredPersons}
          setFilteredPersons={setFilteredPersons}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} setFilteredPersons={setFilteredPersons} />
    </div>
  )
}

export default App