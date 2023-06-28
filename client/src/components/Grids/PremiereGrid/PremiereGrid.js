import React from 'react';

import './PremiereGrid.styles.css';

const PremiereGrid = () => {
  return (
    <div className='premiere-container grid grid-cols-1 md:grid-cols-3 mt-4'>
      <div className='premiere-item col-span-1 ml-24' id='thumbnailImg'></div>
      <div className='premiere-item col-span-2 justify-start pt-4 font-semibold'>
        <h2 className='text-base-300 showDetail '>The Real Housewives of New York City S14 <span className='text-primary showDetail'>- July 16th</span></h2>
        <h2 className='text-primary showDetail'>Bravo/Peacock</h2>
      </div>

      <div className='premiere-item col-span-1 ml-24' id='thumbnailImg'></div>
      <div className='premiere-item col-span-2 justify-start pt-4 font-semibold'>
        <h2 className='text-base-300 showDetail '>The Real Housewives of New York City S14 <span className='text-primary showDetail'>- July 16th</span></h2>
        <h2 className='text-primary showDetail'>Bravo/Peacock</h2>
      </div>

      <div className='premiere-item col-span-1 ml-24' id='thumbnailImg'></div>
      <div className='premiere-item col-span-2 justify-start pt-4 font-semibold'>
        <h2 className='text-base-300 showDetail '>The Real Housewives of New York City S14 <span className='text-primary showDetail'>- July 16th</span></h2>
        <h2 className='text-primary showDetail'>Bravo/Peacock</h2>
      </div>
    </div>
  );
};

export default PremiereGrid;
