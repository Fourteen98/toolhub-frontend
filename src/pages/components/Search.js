import React, { useState } from 'react';
import ToolsData from '../ToolsData';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [toolsData] = useState(ToolsData);
  const [allTools, setAllTools] = useState(toolsData);
  const handleChange = (e) => {
    try {
      setSearchValue(e.target.value);
    } catch (error) {
      console.log(error); //eslint-disable-line
    }
  };

  const handleSearch = (e) => {
    try {
      e.preventDefault();
      const filteredTools = toolsData.filter(
        (tool) => tool.name.toLowerCase().includes(
          searchValue.toLowerCase(),
        ),
      );
      setAllTools(filteredTools);
      console.log(filteredTools); //eslint-disable-line
    } catch (error) {
      console.log(error); //eslint-disable-line
    }
  };

  const renderSearchResults = allTools.map((tool) => (
    <div className="search--results--container" key={tool.id}>
      <div className="search--results--title">
        <h3>{tool.name}</h3>
      </div>
      <div className="search--results--description">
        <p>{tool.description}</p>
      </div>
    </div>
  ));

  return (
    <>
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          onChange={handleChange}
          placeholder="Search for a tool"
          value={searchValue}

        />
        <div className="button-container">
          <button className="" onClick={handleSearch} type="button">
            Search
          </button>
          <button className="" type="button">
            Show All
          </button>
        </div>
      </div>
      <div className="search--results">
        {renderSearchResults}
      </div>
    </>
  );
};

export default Search;
