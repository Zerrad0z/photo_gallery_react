import React from 'react';
import PhotoGallery from './components/PhotoGallery';

function App() {
  const images = [
    {
      url: './image1.jpg',
      caption: 'Beautiful Sunset',
    },
    {
      url: './image2.jpg',
      caption: 'City Skyline',
    },
    {
      url: './image3.jpg',
      caption: 'Majestic Mountains',
    },
    // Add more image objects here
  ];

  return (
    <div className="App">
      <h1>Photo Gallery Demo</h1>
      <PhotoGallery images={images} />
    </div>
  );
}

export default App;
