import React from 'react';

import './PremiereGrid.styles.css';

const PremiereGrid = () => {
  return (
    <div className='premiere-container grid grid-cols-1 md:grid-cols-3 mt-4'>
      <div className='premiere-item col-span-1 ml-24' id='thumbnailImg'></div>
      <div className='premiere-item col-span-2 justify-start'>
        <p>The Real Housewives of New York City S14 <span>- July 16th</span></p>
        <p>Bravo/Peacock</p>
      </div>
    </div>
  );
};

export default PremiereGrid;
