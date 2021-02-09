import React from 'react';
import Person from "./Person";

const Persons = ({ persons, setFilteredPersons }) => {
    return (
        <div>
            {persons.map(person => {
                return (
                    <Person
                      key={person.name}
                      name={person.name}
                      number={person.number}
                      id={person.id}
                      setFilteredPersons={setFilteredPersons}
                    />
                )

            })}
        </div>
    )
}

export default Persons