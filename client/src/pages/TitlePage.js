import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

const TitlePage = () => {
  return (
    <div className='show-container'>
      <Link to='/' className='backArrow arrowBtn py-3'>
        <FiArrowLeft size={22} />
      </Link>
      <div className='show-container'>
        <img src='https://via.placeholder.com/1000x400' alt='titleImg' />
        </div>

<div className='show-details-box'>
        <div className='show-details grid grid-cols-2'>
          <div className='currSeason grid-season-item'><h2 className='text-base-300 font-semibold'>Current Season:</h2>
          <p className='text-base-300'>0</p>
          </div>
          <div className='newEpisodes grid-season-item'>
          <h2>New Episodes:</h2>
          <p className='text-base-300'>Wednesday @ 7 pm PCT</p>
          </div>
          <div className='network grid-season-item'>
          <h2>Network:</h2>
          <p className='text-base-300'>Bravo</p>
          </div>
        </div>
      </div>
      <div className='seasons-header mt-12'>
        <h1>Seasons</h1>
      </div>

      <div className='seasons-container mt-4 mb-12'>
        <Link to='/episodes'><Button className='seasons-item'>Season 1</Button></Link>
        <Button className='seasons-item'>Season 2</Button>
        <Button className='seasons-item'>Season 3</Button>
      </div>
    </div>
  );
};

export default TitlePage;
