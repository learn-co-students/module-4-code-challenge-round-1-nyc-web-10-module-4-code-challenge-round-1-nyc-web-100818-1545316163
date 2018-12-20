import React from 'react'

const Search = ({ searchTerm, onSearchChange }) => {
  
  const onInputChange = e => {
    onSearchChange(e.target.value)
  }

  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={searchTerm}
        onChange={onInputChange}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
