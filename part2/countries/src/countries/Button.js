import React  from 'react'

const Button = ({ country, setFilteredCountries }) => {
  const handleClick = () => {
    return (
      setFilteredCountries([country])
    )
  }

  return (
    <button onClick={handleClick}>
      show
    </button>
  )
}

export default Button