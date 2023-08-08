import React from 'react';

import { Link } from 'react-router-dom';

import { FiEye } from 'react-icons/fi';
import { BiComment } from 'react-icons/bi';

const ForumCategoryBar = () => {
  return (
    <div>
      <div className='forum-grid grid grid-cols-1 md:grid-cols-8 mt-4'>
        <div className='f-grid-item col-span-5' id='showThumbnail'>
          <div className='thumbnail'>
            <Link to='/chats'>
              <img src='https://placehold.co/100x100'></img>
            </Link>
          </div>
          <div>
            <Link to='/chats'>
              <h2 className='showTitle pl-3'>
                The Real Housewives of New York City S14
              </h2>
            </Link>
          </div>
        </div>
        <div className='f-grid-item col-span-1'>
          <FiEye size={18} />
          <p className='viewCount pl-1'>0</p>
        </div>
        <div className='f-grid-item col-span-1'>
          <BiComment size={18} />
          <p className='commentCount pl-1'>0</p>
        </div>

        <div className='f-grid-item col-span-1 follow'>Follow</div>
      </div>
    </div>
  );
};

export default ForumCategoryBar;
