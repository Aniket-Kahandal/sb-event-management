import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './WhyChooseUs.css'; // Import the CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faHandsHelping, faLeaf } from '@fortawesome/free-solid-svg-icons';

const cards = [
  {
    title: 'Best Price',
    description: 'Affordable quality customised to fit your budget perfectly.',
    icon: <FontAwesomeIcon icon={faMoneyBillWave} />,
  },
  {
    title: 'Best Service',
    description: 'Always innovative and something new to make more effective and unique moments.',
    icon: <FontAwesomeIcon icon={faHandsHelping} />,
  },
  {
    title: 'Eco-Friendly',
    description: 'Expert craftsmanship ensuring flawless fit and finish every time. Used eco-friendly products, flowers and all.',
    icon: <FontAwesomeIcon icon={faLeaf} />,
  },
];


const WhyChooseUs = () => {
  return (
    <Container id="why-choose-us" className="py-5 text-center">
      <p className="section-subtitle">WHY CHOOSE US</p>
      <h2 className="section-title">
        The Pillars of Our <span className="highlight">Quality</span>
      </h2>
      <Row className="mt-4">
        {cards.map((card, index) => (
          <Col md={4} sm={12} key={index} className="mb-4">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front p-4">
                  <div className="icon mb-3">{card.icon}</div>
                  <h5 className="fw-bold">{card.title}</h5>
                  <p className="text-muted">{card.description}</p>
                </div>
                <div className="flip-card-back p-4">
                  <h5 className="fw-bold">{card.title}</h5>
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhyChooseUs;
