import React, { useState } from 'react'
import Numbers from "./components/Numbers";

const App = () => {
    const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '000-000-0000' }
    ])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')

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
        }

    }

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

    return (
        <div>
            <h2>Phonebook</h2>
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
            <Numbers persons={persons} />
        </div>
    )
}

export default App