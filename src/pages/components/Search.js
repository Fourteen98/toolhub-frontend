import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ToolsData from '../../data/ToolsData';
import Tool2 from '../../assets/Tool2.jpg';

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

  const countMissingField = (annotation) => {
    let count = 0;
    Object.keys(annotation).forEach((key) => {
      if (annotation[key] === '') {
        count += 1;
      }
    });
    return count;
  };

  const renderSearchResults = allTools.map((tool) => (
    <Link style={{ textDecoration: 'none' }} to={`/tooldetails/${tool.id}`} key={tool.id}>
      <div className="search--results--container" key={tool.id}>
        <div className="search--results--card">
          <div className="tool--card--img--container"><img className="tool--card--img" src={Tool2} alt={tool.name} /></div>
          <div className="search-results-content">
            <h3>
              {tool.name}
            </h3>
            <h5>
              Author:
              {tool.Author}
            </h5>
            <h6>
              # of missing fields:
              {countMissingField(tool.Annotations[0])}
            </h6>
          </div>
        </div>
      </div>
    </Link>
  ));

  return (
    <>
      <div className="input-group">
        <h2 className="input--group--header">
          Search a tool by name or click on the any tool card below to see it missing fields.
        </h2>
        <input
          className="search"
          type="text"
          onChange={handleChange}
          placeholder="Search for a tool"
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
