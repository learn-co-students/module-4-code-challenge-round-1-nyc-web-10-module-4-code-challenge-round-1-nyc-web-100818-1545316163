import React from 'react';

const Search = props => {
  const search = props.search;
  return (
    <div className="ui huge fluid icon input">
      <input
        onChange={search.handleChange}
        type="text"
        placeholder={'Search your Recent Transactions'}
      />
      <i className="circular search link icon" />
    </div>
  );
};

export default Search;
