import React, { useState } from 'react';
import { BsSuitHeart } from 'react-icons/bs';
import { BsSuitHeartFill } from 'react-icons/bs';

import './cards.styles.css';

const ShowCard = () => {
  const [isFavorited, setIsFavorited] = useState('black');

  const handleFavorite = () => {
    console.log('clicked');
    setIsFavorited(isFavorited === 'black' ? '#FF8698' : 'black');
  };

  return (
    <div className='card showCard w-96 bg-base-100 shadow-xl'>
      <div className='iconContainer'>
        <BsSuitHeartFill
          size={'20px'}
          style={{ color: isFavorited}}
          onClick={handleFavorite}
        />
      </div>
      <figure className='px-10 pt-10'>
        <img
          src='/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
          alt='Shoes'
          className='rounded-xl'
        />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>Show Title</h2>
        <p>Description or Dates</p>
        <div className='card-actions'>
          <button className='btn btn-primary'>View</button>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
