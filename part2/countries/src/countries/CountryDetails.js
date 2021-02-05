import React, {useEffect, useState} from 'react'
import axios from "axios";

const CountryDetails = ({ country }) => {
  const [weatherReport, setWeatherReport] = useState('')
  const [weatherIcon, setWeatherIcon] = useState('')

  const api_key = process.env.REACT_APP_API_KEY
  const params = {
    access_key: api_key,
    query: country.capital
  }

  useEffect(() => {
    axios
      .get('http://api.weatherstack.com/current', {params})
      .then(response => {
        setWeatherReport(response.data.current)
        setWeatherIcon(response.data.current.weather_icons[0])
      })
  }, [])

  return (
    <div>
      <h2>{country.name}</h2>
      capital {country.capital}
      <br/>
      population {country.population}
      <h3>Spoken Languages</h3>
      <ul>
        {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
      </ul>
      <img src={country.flag} width={200} height={150}/>
      <h3>Weather in {country.capital}</h3>
      <b>temperature: </b>{weatherReport.temperature} Celsius
      <br/>
      <img src={weatherIcon}/>
      <br/>
      <b>wind: </b> {weatherReport.wind_speed} mph direction {weatherReport.wind_dir}
    </div>
  )
}

export default CountryDetails