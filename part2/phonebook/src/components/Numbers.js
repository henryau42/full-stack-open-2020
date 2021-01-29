import React from 'react';

const Name = ({ name }) => {
    return (
        <div>
            { name }
        </div>
    )
}

const Names = ({ persons }) => {
    return (
        <div>
            {persons.map(person => <Name key={person.name} name={person.name} />)}
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