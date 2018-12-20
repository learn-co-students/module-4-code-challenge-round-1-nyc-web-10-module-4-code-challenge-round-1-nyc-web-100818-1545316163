import React from 'react'

const Search = (props) => {
  console.log("Search props:", props);
  // make sure to add in value to make it a CONTROLLED FORM!!!!!!
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={(event) => props.handleChange(event)} value={props.searchTerm}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
