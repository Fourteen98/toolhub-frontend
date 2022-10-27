import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    <Link to={`/tooldetails/${tool.id}`} key={tool.id}>
      <div className="search--results--container" key={tool.id}>
        <div className="search--results--card">
          <div className="tool--card--img--container"><img className="tool--card--img" src={Tool3} alt={tool.name} /></div>
          <div className="search-results-content">
            <h3>
              {tool.name}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  ));

  return (
    <>
      <div className="input-group">
        <h2>
          All the tools below have missing fields, you can search for a particular tool and
          click to see missing fields
        </h2>
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
