import React from 'react';

const images = [
    { id: 1, src: 'https://via.placeholder.com/300x300' },
    { id: 2, src: 'https://via.placeholder.com/300x300' },
    { id: 3, src: 'https://via.placeholder.com/300x300' },
    { id: 4, src: 'https://via.placeholder.com/300x300' },
    { id: 5, src: 'https://via.placeholder.com/300x300' },
    { id: 6, src: 'https://via.placeholder.com/300x300' },
    { id: 7, src: 'https://via.placeholder.com/300x300' },
    { id: 8, src: 'https://via.placeholder.com/300x300' },
    { id: 9, src: 'https://via.placeholder.com/300x300' },
  ];

const Gallery = () => {
  return (
    <div className='gallery-container'>
      {images.map((image) => (
        <div key={image.id} className='gallery-item'>
          <img src={image.src} alt='gallery item' />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
