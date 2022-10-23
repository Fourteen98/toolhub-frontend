import React from 'react';
import CarouselComponent from './components/CarouselComponent';
import Search from './components/Search';

const Home = ({ tools }) => (
  <div className="home--container">
    <div className="carousel">
      <CarouselComponent />
    </div>
    <div className="search-container">
      <Search tools={tools} />
    </div>
  </div>
);

export default Home;
