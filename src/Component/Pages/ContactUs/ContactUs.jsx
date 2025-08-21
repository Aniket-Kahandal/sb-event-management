// ContactUs.js
import React, { useState } from 'react';


const ContactUs = () => {
  const [error, setError] = useState(false)
  const [contactUsForm, setContactUsForm] = useState({
    fullName: null, emailID: null, massage: null
  })

  const HandleChange = (e) => {
    const { id, value } = e.target;

    let updatedValue = value;

    if (id === 'fullName') {
      // Remove initial spaces
      updatedValue = updatedValue.trimStart();

      // Allow only letters and spaces
      updatedValue = updatedValue.replace(/[^a-zA-Z\s]/g, '');

      // Capitalize the first character, lowercase the rest (optional)
      if (updatedValue.length > 0) {
        updatedValue =
          updatedValue.charAt(0).toUpperCase() + updatedValue.slice(1);
      }


    }

    setContactUsForm((prev) => ({
      ...prev,
      [id]: updatedValue,

    }));
  };

  const HandleSubmit = () => {
    debugger
    let isValid = true
    if (contactUsForm?.fullName === null || contactUsForm?.fullName === undefined || contactUsForm?.fullName === "" ||
      contactUsForm?.emailID === null || contactUsForm?.emailID === undefined || contactUsForm?.emailID === "" ||
      contactUsForm?.massage === null || contactUsForm?.massage === undefined || contactUsForm?.massage === ""
    ) {
      isValid = false;
      setError(true)
    } else if (contactUsForm?.emailID !== null && contactUsForm?.emailID !== undefined && contactUsForm?.emailID !== "" && !isValidEmail(contactUsForm?.emailID)) {
      isValid = false;
      setError(true)
    }

    if (isValid) {
      const message = `Full Name: ${contactUsForm?.fullName}\nEmail: ${contactUsForm?.emailID}\nMassage= ${contactUsForm?.massage}`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappNumber = '919623576236'; // <-- Replace with your number
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappLink, '_blank');

    }
  }

  const isValidEmail = (email) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    return isValidEmail;
  }

  return (
    <section className="contact-us-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Get in Touch With Us</h2>

        <div className="row g-5">
          {/* Contact Form */}
          <div className="col-md-6">
            <form className="p-4 shadow rounded bg-light">
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" id='fullName' onChange={HandleChange} value={contactUsForm?.fullName} className="form-control" placeholder="Enter your name" />
                {error && (contactUsForm?.fullName === null || contactUsForm?.fullName === undefined || contactUsForm?.fullName === "") ? <span className='text-danger'>Field is mandatory.</span> : ''}
              </div>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input type="text" id='emailID' onChange={HandleChange} value={contactUsForm?.emailID} className="form-control" placeholder="Enter your email" />
                {error && (contactUsForm?.emailID === null || contactUsForm?.emailID === undefined || contactUsForm?.emailID === "") ? <span className='text-danger'>Field is mandatory.</span> :
                  error && (contactUsForm?.emailID !== null && contactUsForm?.emailID !== undefined && contactUsForm?.emailID !== "" && !isValidEmail(contactUsForm?.emailID)) ? <span className='text-danger'>Invali Email</span> : ''}
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" id='massage' onChange={HandleChange} value={contactUsForm?.massage} rows="4" placeholder="Your message..."></textarea>
                {error && ((contactUsForm?.massage === null || contactUsForm?.massage === undefined || contactUsForm?.massage === "")) ? <span className='text-danger'>Field is mandatory.</span> : ''}
              </div>
              <button type="button" onClick={HandleSubmit} className="btn btn-danger w-100 rounded-pill">Send Message</button>
            </form>
          </div>

          {/* About Our Journey */}
          <div className="col-md-6">
            <div className="bg-dark text-white p-4 rounded shadow">
              <h4 className="text-warning mb-3">Our Journey So Far</h4>
              <p>
                From intimate gatherings to grand-scale celebrations, ApnaEvent has been turning visions into reality for over 5 years.
                With a passionate team and unmatched attention to detail, we bring magic to every event.
              </p>
              <hr className="border-warning opacity-75 my-4" />
              <h5 className="text-warning">Why Choose Us?</h5>
              <ul className="ps-3">
                <li>✅ Trusted by over 500+ clients</li>
                <li>✅ Unique themes & personalized touch</li>
                <li>✅ Seamless planning & on-time execution</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;