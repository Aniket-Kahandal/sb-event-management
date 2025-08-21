import React from 'react'
import './BannerSection.css'
import banner from '../../../Asset/Images/weddingBanner.jpg'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const BannerSection = () => {
  const navigate=useNavigate()
  return (
    <>
     <Container 
  fluid 
  className="d-flex justify-content-center align-items-center text-center"
  style={{ 
    backgroundImage: `url(${banner})`, 
    backgroundSize: 'cover', 
    height: '100vh', 
    color: 'white' 
  }}
>
  <Row>
    <Col>
      <div className="animate-slide-in">
        <h1 className="display-4 fw-bold">Your Perfect Event Awaits</h1>
        <p className="lead fw-bolder">We specialize in planning unforgettable events from weddings to birthdays.</p>
        <Button 
          variant="primary bg-dark"
          size="lg"
          onClick={() => navigate('/contact')}
        >
          Get Started
        </Button>
      </div>
    </Col>
  </Row>
</Container>


    </>
    
  )
}

export default BannerSection
