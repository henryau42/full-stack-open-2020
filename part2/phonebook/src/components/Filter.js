import React from 'react';

const Filter = ({ persons, newSearch, setNewSearch, setFilteredPersons }) => {
    const handleSearchChange = (event) => {
        const search = event.target.value.toLowerCase()
        const filter = persons.filter(person => person.name.toLowerCase().includes(search))
        setFilteredPersons(filter)
        setNewSearch(event.target.value);
    }

    return (
        <div>
            filter shown with
            <input
                value={newSearch}
                onChange={handleSearchChange}
            />
        </div>
    )
}

export default Filter