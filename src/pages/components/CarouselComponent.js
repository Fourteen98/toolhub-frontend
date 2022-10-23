import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Tool2 from '../../assets/Tool2.jpg';
import Tool1 from '../../assets/Tool1.png';
import Tool3 from '../../assets/Tool3.png';

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
        <img src={Tool2} alt="" />
      </div>
      <div>
        <img src={Tool1} alt="" />
      </div>
      <div>
        <img src={Tool3} alt="" />
      </div>
    </Carousel>
  </div>
);

export default CarouselComponent;
