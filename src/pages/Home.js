import React from 'react';
import CarouselComponent from './components/CarouselComponent';
import Search from './components/Search';

const Home = () => (
  <div className="home--container">
    <div className="carousel">
      <CarouselComponent />
    </div>
    <div className="search-container">
      <Search />
    </div>
  </div>
);

export default Home;
