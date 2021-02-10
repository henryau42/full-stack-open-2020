import React from 'react';
import DeleteButton from "./DeleteButton";

const Person = ({ name, number, id, setPersons, setFilteredPersons, setNotification, setNotificationClass }) => {
    return (
        <div>
            {name} {number}
            <DeleteButton
              name={name}
              id={id}
              setPersons={setPersons}
              setFilteredPersons={setFilteredPersons}
              setNotification={setNotification}
              setNotificationClass={setNotificationClass}
            />
        </div>
    )
}

export default Person