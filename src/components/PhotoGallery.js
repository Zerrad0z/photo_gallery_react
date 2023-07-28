import React, { useState } from 'react';
import './PhotoGallery.css';

const PhotoGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullScreen, setShowFullScreen] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleFullScreen = () => {
    setShowFullScreen(true);
  };

  const handleCloseFullScreen = () => {
    setShowFullScreen(false);
  };

  return (
    <div className="photo-gallery">
      <div className="image-container">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].caption}
          onClick={handleFullScreen}
        />
        {images[currentIndex].caption && (
          <div className="caption">{images[currentIndex].caption}</div>
        )}
      </div>
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.caption}
            className={index === currentIndex ? 'active-thumbnail' : ''}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      {showFullScreen && (
        <div className="full-screen-overlay" onClick={handleCloseFullScreen}>
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].caption}
            className="full-screen-image"
          />
          {images[currentIndex].caption && (
            <div className="caption">{images[currentIndex].caption}</div>
          )}
          <div className="nav-buttons">
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
