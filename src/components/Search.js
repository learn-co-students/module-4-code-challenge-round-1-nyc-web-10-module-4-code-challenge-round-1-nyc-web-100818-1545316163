import React from 'react'

const Search = ({change, searchTerm}) => {
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        onChange={change}
        placeholder={"Search your Recent Transactions"}
        value={searchTerm}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
