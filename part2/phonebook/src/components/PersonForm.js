import React, { useState } from 'react';
import phonebookService from '../services/phonebook'

const PersonForm = ({ persons, setPersons, newSearch, filteredPersons, setFilteredPersons, setNotification }) => {
		const [ newName, setNewName ] = useState('')
		const [ newNumber, setNewNumber ] = useState('')

		const handleNameChange = (event) => {
				setNewName(event.target.value);
		}

		const handleNumberChange = (event) => {
				setNewNumber(event.target.value);
		}

		const checkDuplicate = (newName) => {
				const duplicates = persons.filter(person => person.name.toLowerCase() === newName.toLowerCase())
				return duplicates
		}

		const addName = (event) => {
				event.preventDefault()
        const confirmation = `${newName} is already added to phonebook, replace the old number with a new one?`
        const duplicates = checkDuplicate(newName)

        const personObject = {
            name: newName,
            number: newNumber
        }

				if(duplicates.length > 0) {
				    if(window.confirm(confirmation)) {
                phonebookService.update(duplicates.pop().id, personObject)
                  .then(() => {
                      phonebookService.getAll()
                        .then(returnedData => {
                            setPersons(returnedData)
                            setNewName('')
                            setNewNumber('')
														setNotification(`Updated ${newName}`)
														setTimeout(() => {
															setNotification(null)
														}, 5000)

                            if(newSearch === '') setFilteredPersons(returnedData)
                        })

                  })
            }
				} else {
						phonebookService
              .create(personObject)
              .then(returnedPhonebook => {
                  console.log(returnedPhonebook)
              })
            setPersons(persons.concat(personObject))
            setNewName('')
            setNewNumber('')
						setNotification(`Added ${newName}`)
						setTimeout(() => {
							setNotification(null)
						}, 5000)

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