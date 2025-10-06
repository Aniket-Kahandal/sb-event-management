import React, { useEffect, useState } from "react";
import './ImagesGallery.css'
// Assuming these paths are correct
import Sound from '../../../Asset/Images/Sound.png'
import SpecialEntry from '../../../Asset/Images/SpecialEntry.png'
import Vaidik from '../../../Asset/Images/Vaidik.png'
import HomeDecoration from '../../../Asset/Images/HomeDecoration.png'
import FireShow from '../../../Asset/Images/FireShow.png'

const ImageGallery = () => {
    const [images, setImages] = useState([
        { src: Sound, url: Sound, alt: 'Sound' }, // Added url for initial state consistency
        { src: SpecialEntry, url: SpecialEntry, alt: 'Special Entry' },
        { src: Vaidik, url: Vaidik, alt: 'Vaidik' },
        { src: FireShow, url: FireShow, alt: 'Fire Show' },
        { src: HomeDecoration, url: HomeDecoration, alt: 'Home Decoration' },
    ]);

    useEffect(() => {
        // Fetch images from Node API
        fetch("http://localhost:5000/api/images")
            .then((res) => {
                if (!res.ok) {
                    // Check if a 404 or 500 error occurred
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => setImages(data))
            .catch((err) => console.error("Error fetching images:", err));
    }, []);

    return (
        // The main container will become the CSS Grid container
        <div className="image-gallery-grid"> 
            {images?.map((img, index) => (
                // Each image card gets a class to define its size/position in the grid
                <div key={index} className={`image-card-item image-card-${index + 1}`}>
                    {/* Use img.src for initial state and img.url for fetched data (or normalize your data) */}
                    <img src={img.url || img.src} alt={img?.alt || `image-${index}`} />
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;