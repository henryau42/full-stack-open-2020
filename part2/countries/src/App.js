import React, { useState, useEffect } from 'react'
import Countries from "./countries/Countries";
import axios from "axios";

function App() {
  const [ newSearch, setNewSearch ] = useState('')
  const [ countries, setCountries ] = useState([])
  const [ filteredCountries, setFilteredCountries ] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleSearchChange = (event) => {
    const search = event.target.value
    if(search === '') {
      setFilteredCountries([])
    } else {
      const filter = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
      setFilteredCountries(filter)
    }
    setNewSearch(search);
  }

  return (
    <div>
      find countries
      <input
        value={newSearch}
        onChange={handleSearchChange}
      />
      <Countries countries={filteredCountries} setFilteredCountries={setFilteredCountries} />
    </div>
  )
}

export default App;
