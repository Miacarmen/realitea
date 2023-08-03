import React from 'react';

const Forum = () => {
  return (
    <div>
      <div>header image</div>
      {/* <div className='forum-main-container border'> */}
      <div className='grid grid-cols-1 md:grid-cols-3 mt-4'>
        <div className='premiere-item col-span-1 ml-24' id='thumbnailImg'></div>
        <div className='premiere-item col-span-2 justify-start pt-4 font-semibold'>
          <h2 className='text-base-300 showDetail '>
            The Real Housewives of New York City S14
          </h2>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Forum;
