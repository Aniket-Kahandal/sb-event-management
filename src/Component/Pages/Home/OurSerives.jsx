import React, { useEffect, useState } from 'react';
import './OurServices.css';  // Import the CSS file for custom animations
import Sound from '../../../Asset/Images/Sound.png'
import SpecialEntry from '../../../Asset/Images/SpecialEntry.png'
import Vaidik from '../../../Asset/Images/Vaidik.png'
import HomeDecoration from '../../../Asset/Images/HomeDecoration.png'
import FireShow from '../../../Asset/Images/FireShow.png'

import Aos from 'aos';
import { useNavigate } from 'react-router-dom';
const wedingServiceList = [
  {
    title: 'Sound',
    image: Sound,
    description: 'Professional sound systems for music, speeches, and announcements to ensure crystal-clear audio throughout your event.',
  },
  {
    title: 'Special Entry',
    image: SpecialEntry,
    description: 'Unique and grand entry concepts for the bride and groom, including themes, props, lighting, and music.',
  },
  {
    title: 'Vaidik/Rangoli',
    image: Vaidik,
    description: 'Traditional Vaidik rituals and artistic Rangoli designs to bring spiritual and aesthetic elements to your wedding.',
  },
  {
    title: 'Home Decoration',
    image: HomeDecoration,
    description: 'Beautiful and thematic decoration of your home venue with flowers, lights, and custom décor for pre-wedding rituals.',
  },
  {
    title: 'Fire Show',
    image: FireShow,
    description: 'A thrilling and safe fire performance by professionals to captivate your guests and add a wow factor to the celebration.',
  },
  {
    title: 'Fire Show',
    image: FireShow,
    description: 'A repeat entry for Fire Show — consider removing or replacing this with another unique service to avoid duplicates.',
  },
];


const OurServices = () => {
  const navigate=useNavigate()
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


  const ViewMoreClicked = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => {
    navigate("/image-gallery");
  }, 500); // small delay to let scroll complete
};

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
        {wedingServiceList?.map((value, index) => {
          return (
            <div
              key={index}
              className={`step wedding-card border border-dark rounded-4 p-2 overflow-hidden position-relative ${isVisible ? 'visible' : ''}`}
              style={{ backgroundImage: `url(${value?.image})` }}
            >
              <div className="wedding-card-overlay"></div>

              <div className="wedding-card-content">
                <h3 className="text-white fw-bolder">{value?.title}</h3>
                <p className="text-white fw-bolder">
                  {value?.description}
                </p>
              </div>

              {/* Animated button */}
              <div className="wedding-card-btn-box">
                <a onClick={ViewMoreClicked} className="btn btn-white btn-animate text-white fw-bolder">View More</a>
              </div>
            </div>



          );
        })}


      </div>
    </section>
  );
};

export default OurServices;
