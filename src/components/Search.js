import React from 'react'

//passing props in to this functional component
const Search = props => {
  return (
    <div className="ui huge fluid icon input">
      <input
        onChange={props.handleChange}
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={props.searchTerm}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
