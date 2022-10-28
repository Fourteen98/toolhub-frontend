import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ToolsData from '../../data/ToolsData';
import Tool3 from '../../assets/Tool3.png';
import Tool2 from '../../assets/Tool2.jpg';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [toolsData] = useState(ToolsData);
  const [allTools, setAllTools] = useState(toolsData);
  const toolImg = [Tool2, Tool3];
  console.log(toolImg[(Math.random() * 2)]); //eslint-disable-line
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
          <div className="tool--card--img--container"><img className="tool--card--img" src={Tool2} alt={tool.name} /></div>
          <div className="search-results-content">
            <h3>
              {tool.name}
            </h3>
            <h5>
              Author:
              {tool.Author}
            </h5>
          </div>
        </div>
      </div>
    </Link>
  ));

  return (
    <>
      <div className="input-group">
        <h2>
          The tools below have missing information. Click on a tool to help us fill in the blanks.
        </h2>
        <input
          className="search"
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
