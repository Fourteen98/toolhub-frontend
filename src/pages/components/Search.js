import React, { useState } from 'react';
import ToolsData from '../../data/ToolsData';
import Tool3 from '../../assets/Tool3.png';

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

  const handleReset = () => {
    try {
      setAllTools(toolsData);
    } catch (error) {
      console.log(error); //eslint-disable-line
    }
  };

  const renderSearchResults = allTools.map((tool) => (
    <div className="search--results--container" key={tool.id}>
      <div className="search--results--card">
        <div className="tool--card--img--container"><img className="tool--card--img" src={Tool3} alt={tool.name} /></div>
        <div className="search-results-content">
          <h3>
            {tool.name}
          </h3>
          <p>
            {tool.description}
          </p>
          <p>
            {tool.link}
          </p>
          <p>
            {tool.category}
          </p>
        </div>
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
          placeholder="Search for a tool to edit"
          value={searchValue}

        />
        <div className="button-container">
          <button className="home--button" onClick={handleSearch} type="button">
            Search
          </button>
          <button className="home--button" onClick={handleReset} type="button">
            Reset
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
