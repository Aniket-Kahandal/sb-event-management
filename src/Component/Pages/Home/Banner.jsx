import React from 'react';
import './Banner.css'; // custom CSS
import { Carousel } from 'react-bootstrap';
import b1 from '../../../Asset/Images/Banner.jpg'
import b2 from '../../../Asset/Images/Banner2.jpg'
import b3 from '../../../Asset/Images/Banner3.jpg'

const Banner = () => {
  const images = [
  {
    src: b1,
    alt: 'Hindu Wedding Ceremony',
    caption: 'Sacred Moments, Beautifully Planned'
  },
  {
    src: b2,
    alt: 'Birthday Party Celebration',
    caption: 'Celebrate Birthdays with Joy & Style'
  },
  {
    src: b3,
    alt: 'Corporate Event Setup',
    caption: 'Elegant Corporate Experiences'
  }
];
  return (
     <div className="banner-carousel">
      <Carousel fade   indicators={false} interval={2000}>
        {images.map((item, idx) => (
          <Carousel.Item key={idx}>
            <div
              className="carousel-image"
              style={{
                backgroundImage: `url(${item.src})`
              }}
            >
              <div className="overlay"></div>
              <div className="carousel-caption">
                <h1>{item.caption}</h1>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
