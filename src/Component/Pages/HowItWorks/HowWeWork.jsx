import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HowWeWork.css";
import weddingImage from '../../../Asset/Images/enagementring.jpg'
import Aos from "aos";
const HowWeWork = () => {
  const steps = [
    {
      number: "01",
      title: "INTRODUCTORY CALL",
      desc: "During this session, we will walk you through all the details of organizing a wedding in India and learn what your dream wedding day looks like in order to get the best proposal tailored for you.",
      img: weddingImage,
    },
    {
      number: "02",
      title: "BUDGET PREPARATION",
      desc: "Based on your preferences, we will select several suitable venues in different price range and create a preliminary wedding budget for you.",
      img: weddingImage,
    },
    {
      number: "03",
      title: "CONTRACT SIGNING",
      desc: "If you're ready to work with us, we will sign the contract, secure your date, and provide services of a dedicated wedding planner.",
      img: weddingImage,
    },
     {
      number: "04",
      title: "CONTRACT SIGNING",
      desc: "If you're ready to work with us, we will sign the contract, secure your date, and provide services of a dedicated wedding planner.",
      img: weddingImage,
    },
     {
      number: "05",
      title: "CONTRACT SIGNING",
      desc: "If you're ready to work with us, we will sign the contract, secure your date, and provide services of a dedicated wedding planner.",
      img: weddingImage,
    },
  ];
 useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration in ms
      once: true,     // run animation only once
      offset: 100,    // trigger point
    });
  }, []);
  return (
    <section className="howwework py-5"data-aos="fade-up"
     data-aos-duration="3000">
      <div className="container-fluid">
        <h2 className="text-center mb-5 section-title">HOW WE WORK</h2>

        <div className="scroll-container d-flex overflow-auto">
          {steps.map((step, index) => (
            <div className="work-step flex-shrink-0 mx-3 text-center" key={index}>
              <div className="step-card p-4">
                <div className="step-image">
                  <img src={step.img} alt={step.title} className="img-fluid" />
                </div>
                <h3 className="step-number">{step.number}</h3>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
