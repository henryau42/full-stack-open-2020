import React, { useState } from 'react'
import Numbers from "./components/Numbers";

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [ filteredList, setFilteredList ] = useState(persons)
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ newSearch, setNewSearch ] = useState('')

    const addName = (event) => {
        event.preventDefault()

        if(checkDuplicate(newName)) {
            alert(`${newName} is already added to phonebook`)
        } else {
            const personObject = {
                name: newName,
                number: newNumber
            }
            setPersons(persons.concat(personObject))
            setNewName('')
            setNewNumber('')

            if(newSearch === '') setFilteredList(filteredList.concat(personObject))
        }

    }

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    }

    const handleSearchChange = (event) => {
        const search = event.target.value
        const filter = persons.filter(person => person.name.toLowerCase().includes(search))
        setFilteredList(filter)
        setNewSearch(event.target.value);
    }

    const checkDuplicate = (newName) => {
        const duplicate = persons.filter(person => person.name.toLowerCase() === newName.toLowerCase())
        return duplicate.length > 0
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                filter shown with
                <input
                    value={newSearch}
                    onChange={handleSearchChange}
                />
            </div>
            <h2>add a new</h2>
            <form onSubmit={addName}>
                <div>
                    name:
                    <input
                        value={newName}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    number:
                    <input
                        value={newNumber}
                        onChange={handleNumberChange}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <Numbers persons={filteredList} />
        </div>
    )
}

export default App