import React from 'react'
import Country from "./Country"
import CountryDetails from "./CountryDetails";

const Countries = ({ countries, setFilteredCountries }) => {
  if(countries.length === 1) {
    return (
      <div>
        <CountryDetails country={countries[0]} />
      </div>
    )
  } else if(countries.length > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  } else {
    return (
      <div>
        {countries.map(country => {
          return (
            <Country key={country.name} country={country} setFilteredCountries={setFilteredCountries} />
          )
        })}
      </div>
    )
  }
}

export default Countries