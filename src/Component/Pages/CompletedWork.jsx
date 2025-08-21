import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'react-bootstrap';
import './CompletedWork.css';

const images = [
  // '/images/work1.jpg',
  // '/images/work2.jpg',
  // '/images/work3.jpg'
];

const CompletedWork = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '60px',
    arrows: false
  };

  return (
    <section className="completed-work-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <Slider {...settings} className="completed-work-slider">
              {images.map((img, index) => (
                <div key={index} className="slider-img-wrapper">
                  <img src={img} alt={`Work ${index + 1}`} className="slider-img" />
                </div>
              ))}
            </Slider>
          </Col>
          <Col md={6}>
            <p className="text-uppercase text-muted small mb-1">Our Completed Work</p>
            <h2 className="fw-bold mb-3">Outfit Inspirations</h2>
            <p className="text-muted">
              Explore our portfolio of styled events and fashion-forward clients. From classic wedding attire to bold celebration outfits, see how we bring your vision to life through detail-driven styling and custom creativity.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CompletedWork;
