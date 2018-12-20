import React from 'react'

const Search = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={searchTerm}
        onChange={e => onSearchChange(e.target.value)}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
