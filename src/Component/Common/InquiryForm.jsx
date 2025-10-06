import React from 'react';

const InquiryForm = () => {
  return (
    <>
      {/* Button to trigger modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#inquiryModal"
      >
        Open Inquiry Form
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="inquiryModal"
        tabIndex="-1"
        aria-labelledby="inquiryModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="inquiryModalLabel">
                Send Us Your Inquiry
              </h5>
              {/* Subtle close button */}
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ opacity: 0.5 }} // less highlight
              ></button>
            </div>
            <div className="modal-body">
             
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea className="form-control" id="message" rows="3" placeholder="Your message..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InquiryForm;
