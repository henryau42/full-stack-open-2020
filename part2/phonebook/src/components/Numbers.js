import React from 'react';

const Name = ({ name, number }) => {
    return (
        <div>
            {name} {number}
        </div>
    )
}

const Names = ({ persons }) => {
    return (
        <div>
            {persons.map(person => {
                return (
                <Name key={person.name} name={person.name} number={person.number} />
                )

            })}
        </div>
    )
}


const Numbers = ({ persons }) => {
    return (
        <div>
            <Names persons={persons} />
        </div>
    )
}

export default Numbers