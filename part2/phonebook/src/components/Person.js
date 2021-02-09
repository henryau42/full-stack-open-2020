import React from 'react';
import DeleteButton from "./DeleteButton";

const Person = ({ name, number, id, setFilteredPersons }) => {
    return (
        <div>
            {name} {number} <DeleteButton name={name} id={id} setFilteredPersons={setFilteredPersons} />
        </div>
    )
}

export default Person