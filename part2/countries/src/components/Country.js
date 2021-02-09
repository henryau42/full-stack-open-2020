import React from 'react'
import Button from "./Button";

const Country = ({ country, setFilteredCountries }) => {
  return (
    <div>
      {country.name} <Button country={country} setFilteredCountries={setFilteredCountries} />
    </div>
  )
}

export default Country