import React from 'react';

const Search = () => (
  <>
    <div className="input-group">
      <input
        className="form-control"
        type="text"
        placeholder="Search for a tool"
        onChange=""
        value=""
      />
      <div className="button-container">
        <button className="" onClick="" type="button">
          Search
        </button>
        <button className="" onClick="showAll" type="button">
          Show All
        </button>
      </div>
    </div>
  </>
);

export default Search;
