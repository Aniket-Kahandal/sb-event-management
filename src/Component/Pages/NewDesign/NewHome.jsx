import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NewHome.css";
import AOS from "aos";
import "aos/dist/aos.css";

const NewHome = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <div className="homepage-design">
            <section className="services-section py-5">
                <div className="container">
                    <h2 className="section-title text-center mb-5" data-aos="fade-up">Our Services</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4" data-aos="fade-right">
                            <div className="service-card p-4 shadow rounded">
                                <h4>Wedding Planning</h4>
                                <p>Comprehensive planning with expert coordinators ensuring stress-free weddings.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4" data-aos="fade-up">
                            <div className="service-card p-4 shadow rounded">
                                <h4>Venues</h4>
                                <p>Beautiful handpicked venues across Georgia to make your day special.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4" data-aos="fade-left">
                            <div className="service-card p-4 shadow rounded">
                                <h4>Photography</h4>
                                <p>Professional photographers capturing timeless memories of your big day.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Gallery Section */}
            <section className="gallery-section py-5 text-center">
                <div className="container">
                    <h2 className="section-title mb-5" data-aos="fade-up">Our Gallery</h2>
                    <div className="row g-3">
                        <div className="col-6 col-md-3" data-aos="zoom-in">
                            <img src="https://via.placeholder.com/300" alt="wedding1" className="img-fluid rounded shadow" />
                        </div>
                        <div className="col-6 col-md-3" data-aos="zoom-in">
                            <img src="https://via.placeholder.com/300" alt="wedding2" className="img-fluid rounded shadow" />
                        </div>
                        <div className="col-6 col-md-3" data-aos="zoom-in">
                            <img src="https://via.placeholder.com/300" alt="wedding3" className="img-fluid rounded shadow" />
                        </div>
                        <div className="col-6 col-md-3" data-aos="zoom-in">
                            <img src="https://via.placeholder.com/300" alt="wedding4" className="img-fluid rounded shadow" />
                        </div>
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="cta-section py-5 text-center">
                <div className="overlay"></div>
                <div className="container" data-aos="fade-up">
                    <h2>Start Planning Your Dream Wedding Today</h2>
                    <p>Let us handle every detail while you enjoy your unforgettable day.</p>
                    <button className="btn btn-outline-light px-4 py-2">Contact Us</button>
                </div>
            </section>
        </div>
    );
};

export default NewHome;
