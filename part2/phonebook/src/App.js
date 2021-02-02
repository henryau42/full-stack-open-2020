import React, { useState } from 'react'
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [ filteredPersons, setFilteredPersons ] = useState(persons)
    const [ newSearch, setNewSearch ] = useState('')

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