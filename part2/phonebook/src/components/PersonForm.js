import React, { useState } from 'react';

const PersonForm = ({ persons, setPersons, newSearch, filteredPersons, setFilteredPersons }) => {
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    }

    const checkDuplicate = (newName) => {
        const duplicate = persons.filter(person => person.name.toLowerCase() === newName.toLowerCase())
        return duplicate.length > 0
    }

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

            if(newSearch === '') setFilteredPersons(filteredPersons.concat(personObject))
        }

    }

    return (
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
    )
}

export default PersonForm