import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-md-left">
        <div className="row text-md-left text-center">

          {/* About Section */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">SB Event Management</h6>
            <p style={{textAlign:'left'}}>
              At Lily Events & Marketing, we believe in transforming moments into cherished memories.
              With a deep understanding of the art of event planning and execution, we specialize in curating seamless experiences
              that reflect elegance, innovation, and personal touch.
            </p>
            <h6 className="mt-4 fw-bold">Follow Us On Social Media</h6>
            <div className="d-flex justify-content-center justify-content-md-center gap-3 mt-2 fs-5" >
              <FaFacebookF />
              <FaInstagram />
              <FaYoutube />
              <FaTwitter />
              <FaPinterestP />
              <FaLinkedinIn />
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Useful Links</h6>
            <p><a href="#" className="text-white text-decoration-none">Home</a></p>
            <p><a href="#" className="text-white text-decoration-none">About</a></p>
            <p><a href="#" className="text-white text-decoration-none">Services</a></p>
            <p><a href="#" className="text-white text-decoration-none">Gallery</a></p>
            <p><a href="#" className="text-white text-decoration-none">Contact</a></p>

            {/* Google Review */}
           <img
  src="https://www.kindpng.com/picc/m/355-3557482_google-review-5-stars-hd-png-download.png"
  alt="Google Review"
  className="img-fluid mt-3"
  style={{ maxWidth: '150px' }}
/>

          </div>

          {/* Contact Info */}
          <div className="col-md-5 col-lg-5 col-xl-5 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
            <p><strong>Email:</strong> lily.events11@gmail.com</p>
            <p><strong>Address:</strong> Shop No.428, Roongta Futurex Apt,<br />Near RD Circle, Nashik-422009</p>
            <p><strong>Days:</strong> Monday to Saturday</p>
            <p><strong>Time:</strong> 09 AM to 06 PM</p>
            <p className="mt-3"><strong>For Enquiry Call Now</strong></p>
            <p><strong>Call Us:</strong> <a href="tel:+919356684766" className="text-white">+91 93566 84766</a></p>
            <p><strong>Call Us:</strong> <a href="tel:+918805656725" className="text-white">+91 88056 56725</a></p>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/918805656725"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success d-inline-flex align-items-center mt-3"
            >
              <FaWhatsapp className="me-2" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-4 border-top pt-3">
        © 2025 Lily Events & Marketing. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
