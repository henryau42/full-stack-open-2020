import React from 'react';
import Person from "./Person";

const Persons = ({ persons, setPersons, setFilteredPersons, setNotification, setNotificationClass }) => {
    return (
        <div>
            {persons.map(person => {
                return (
                    <Person
                      key={person.name}
                      name={person.name}
                      number={person.number}
                      id={person.id}
                      setPersons={setPersons}
                      setFilteredPersons={setFilteredPersons}
                      setNotification={setNotification}
                      setNotificationClass={setNotificationClass}
                    />
                )

            })}
        </div>
    )
}

export default Persons