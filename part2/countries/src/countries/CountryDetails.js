import React from 'react'

const CountryDetails = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      capital {country.capital}
      <br/>
      population {country.population}
      <h3>languages</h3>
      <ul>
        {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
      </ul>
      <img src={country.flag} width={150} height={150}/>
    </div>
  )
}

export default CountryDetails