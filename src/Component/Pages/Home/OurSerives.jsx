import React, { useEffect, useState } from 'react';
import './OurServices.css';  // Import the CSS file for custom animations
import wedding from '../../../Asset/Images/wdding.jpg'
import birthdayImage from '../../../Asset/Images/birthdayImage.jpg'
import enagementring from '../../../Asset/Images/enagementring.jpg'
import retirement from '../../../Asset/Images/retirement.jpg'
import lights from '../../../Asset/Images/lights.jpg'
import soundImage from '../../../Asset/Images/soundImage.jpg'
import Aos from 'aos';
const serviceList = [
  { title: 'Wedding Planning', icon: '💍' },
  { title: 'Birthday Parties', icon: '🎉' },
  { title: 'Corporate Events', icon: '🏢' },
  { title: 'Concert Management', icon: '🎤' },
  { title: 'Themed Events', icon: '🎭' },
  { title: 'Destination Events', icon: '🌍' },
];

const OurServices = () => {
  const [isVisible, setIsVisible] = useState(false);
   useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay animation slightly
    return () => clearTimeout(timeout); // Clean up timeout on unmount
  }, []);

 useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration in ms
      once: true,     // run animation only once
      offset: 100,    // trigger point
    });
  }, []);

  return (
     <section className="how-it-works" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
       <p className="section-subtitle text-center" >Your Event Our Expertise</p>
      <h2 className="section-title text-center">
        We ensure that your event runs smoothly from start to finish, providing <span className="highlight">personalized service</span>  every step of the way. 
      </h2>
    
      <div className="steps">
        <div className={`step border border-dark rounded-4 p-2 ${isVisible ? 'visible' : ''}`}>
          <img src={wedding} alt="Wedding Services" />
          <h3>Wedding</h3>
          <p>We offer tailored wedding planning and execution, from intimate ceremonies to grand celebrations.</p>
        </div>
         <div className={`step border border-dark rounded-4 p-2 ${isVisible ? 'visible' : ''}`}>
          <img src={birthdayImage} alt="Birthday Party Planning" />
          <h3>Birthday</h3>
          <p>Make your birthday unforgettable with our complete event packages, including decorations and entertainment.</p>
        </div>
         <div className={`step border border-dark rounded-4 p-2 ${isVisible ? 'visible' : ''}`}>
          <img src={retirement} alt="Retirement Party" />
          <h3>Retirement</h3>
          <p>Celebrate a lifetime of achievements with a customized retirement party, designed for memories that last.</p>
        </div>
         <div className={`step border border-dark rounded-4 p-2 ${isVisible ? 'visible' : ''}`}>
          <img src={enagementring} alt="Engagement Event Services" />
          <h3>Engagement</h3>
          <p>Create a magical moment with our special engagement services, from intimate dinners to grand proposals.</p>
        </div>
         <div className={`step border border-dark rounded-4 p-2 ${isVisible ? 'visible' : ''}`}>
          <img src={soundImage} alt="Event Management" />
          <h3>Event Management</h3>
          <p>From corporate conferences to charity galas, we handle every detail with precision and care.</p>
        </div>
         <div className={`step border border-dark rounded-4 p-2 ${isVisible ? 'visible' : ''}`}>
          <img src={lights} alt="Sound and Lighting Services" />
          <h3>Sound & Lighting</h3>
          <p>Our top-of-the-line sound systems and lighting setups will enhance the atmosphere of any event.</p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
