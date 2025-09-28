import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImage from "../../../Asset/Images/bg-Stats.jpg";
import image from "../../../Asset/Images/client.jpg";
import "./StatsSection.css";
import Aos from "aos";

const StatsSection = () => {


  const circlesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              entry.target.getAttribute("data-anim")
            );
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.2 }
    );

    circlesRef.current.forEach((circle) => {
      if (circle) observer.observe(circle);
    });

    return () => observer.disconnect();
  }, []);

 useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration in ms
      once: true,     // run animation only once
      offset: 100,    // trigger point
    });
  }, []);
  return (
<section
  className="stats-section py-5 text-center"
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  data-aos="fade-up"
     data-aos-duration="3000"
>
  <div className="container d-flex flex-column align-items-center">
    {/* Top Row */}
    <div className="d-flex justify-content-center">
      <div className="circle">
        <h2>7+</h2>
        <p>years in tourism and MICE</p>
      </div>
      <div className="circle center-circle">
        <h2>600+</h2>
        <p>happy couples</p>
      </div>
      <div className="circle">
        <h2>&lt;1</h2>
        <p>day – to get a quote and proposal</p>
      </div>
    </div>

    {/* Bottom Row with Image Centered */}
    <div className="d-flex justify-content-center overlap-row">
      <div className="circle">
        <h2>180+</h2>
        <p>guests at our largest event</p>
      </div>

      <div className="circle image-circle center-circle">
        <img
          src={image}
          alt="Wedding"
        />
      </div>

      <div className="circle">
        <h2>14+</h2>
        <p>wedding destinations in Georgia</p>
      </div>
    </div>
  </div>
</section>



  );
};

export default StatsSection;
