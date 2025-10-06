import React, { useEffect, useRef, useState } from "react";
import './ImagesGallery.css';
// Assuming these paths are correct
import Sound from '../../../Asset/Images/Sound.png';
import SpecialEntry from '../../../Asset/Images/SpecialEntry.png';
import Vaidik from '../../../Asset/Images/Vaidik.png';
import HomeDecoration from '../../../Asset/Images/HomeDecoration.png';
import FireShow from '../../../Asset/Images/FireShow.png';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // import styles

const ImageGallery = () => {
     const modalRef = useRef(null);
    const [inquiryForm,setInquiryForm]=useState({
        functionDate:null,venue:null,note:null
    })
    const [images, setImages] = useState([
        { src: Sound, url: Sound, alt: 'Sound' },
        { src: SpecialEntry, url: SpecialEntry, alt: 'Special Entry' },
        { src: Vaidik, url: Vaidik, alt: 'Vaidik' },
        { src: FireShow, url: FireShow, alt: 'Fire Show' },
        { src: HomeDecoration, url: HomeDecoration, alt: 'Home Decoration' },
    ]);

    useEffect(() => {
        // Fetch images from Node API
        fetch("http://localhost:5000/api/images")
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then((data) => setImages(data))
            .catch((err) => console.error("Error fetching images:", err));

             const modal = new window.bootstrap.Modal(modalRef.current);
        modal.show();
    }, []);

    return (
        <>
            <div className="image-gallery-grid">
                {images?.map((img, index) => (
                    <div key={index} className={`image-card-item image-card-${index + 1}`}>
                        <img src={img.url || img.src} alt={img?.alt || `image-${index}`} />
                    </div>
                ))}
            </div>

            {/* Fixed Inquiry Button */}
            <button
                type="button"
                className="btn btn-primary inquiry-btn"
                data-bs-toggle="modal"
                data-bs-target="#inquiryModal"
            >
                Inquiry
            </button>

            {/* Modal */}
            <div
                className="modal fade"
                id="inquiryModal"
                tabIndex="-1"
                aria-labelledby="inquiryModalLabel"
                aria-hidden="true"
                ref={modalRef}
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h5 className="modal-title" id="inquiryModalLabel">
                                Send Us Your Inquiry
                            </h5>
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                style={{ opacity: 0.5 }}
                            ></button>
                        </div>
                        <div className="modal-body">
                           <div className="mb-3">
  <label htmlFor="functionDate" className="form-label">Function Date</label><br/>
  <DatePicker
    id="functionDate"
    selected={inquiryForm?.functionDate}
onChange={(date) => setInquiryForm((prev) => ({ ...prev, functionDate: date }))}
    className="form-control w-100"
    placeholderText="DD/MM/YYYY"
    dateFormat="dd/MM/yyyy"

  />
</div>
                            <div className="mb-3">
                                <label htmlFor="text" className="form-label">Venue</label>
                                <input type="text" className="form-control" id="text" placeholder="Lawns/event location" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Note</label>
                                <textarea className="form-control" id="message" rows="3" placeholder="Your message..."></textarea>
                            </div>
                            <button type="submit" className="btn submit-btn w-100">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImageGallery;
