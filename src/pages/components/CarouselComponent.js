import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const CarouselComponent = () => (
  <div className="carousel--container">
    <Carousel
      autoPlay
      interval={3000}
      transitionTime={1000}
      infiniteLoop
      showArrow="true"
    >
      <div>
        <img src="https://i.imgur.com/3oq3g3m.png" alt="" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://i.imgur.com/3oq3g3m.png" alt="" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://i.imgur.com/3oq3g3m.png" alt="" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  </div>
);

export default CarouselComponent;
