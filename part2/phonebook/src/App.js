import React, { useState } from 'react'
import Numbers from "./components/Numbers";

const App = () => {
    const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
    ])
    const [ newName, setNewName ] = useState('')

    const addName = (event) => {
        event.preventDefault()

        if(checkDuplicate(newName)) {
            alert(`${newName} is already added to phonebook`)
        } else {
            const nameObject = {
                name: newName
            }
            setPersons(persons.concat(nameObject))
            setNewName('')
        }

    }

    const handleNameChange = (event) => {
        setNewName(event.target.value);
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
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <Numbers persons={persons} />
        </div>
    )
}

export default App