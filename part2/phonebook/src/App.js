import React, { useState, useEffect } from 'react'
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([])
  const [ filteredPersons, setFilteredPersons ] = useState([])
  const [ newSearch, setNewSearch ] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        setFilteredPersons(response.data)
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
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App