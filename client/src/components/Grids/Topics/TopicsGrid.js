import React from 'react';

import './TopicsGrid.styles.css';

import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineLike } from 'react-icons/ai';

const TopicsGrid = () => {
  return (
    <div className='grid grid-cols-1 gap-7 lg:grid-cols-3 md:grid-cols-2'>
      <div className='topicCard bg-primary'>
        <div className='card-body'>
          <h2 className='userIcon'>
            <FaUserCircle className='userIcon' size={25} />
          </h2>
          {/* Link to Related Forum page */}
          <h2 className='card-title'>User Comment</h2>

          <div className='card-actions justify-start'>
            <button className='likeBtn'>
              <AiOutlineLike className='likeIcon' size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className='topicCard bg-primary'>
        <div className='card-body'>
          <h2 className='userIcon'>
            <FaUserCircle className='userIcon' size={25} />
          </h2>
          {/* Link to Related Forum page */}
          <h2 className='card-title'>User Comment</h2>

          <div className='card-actions justify-start'>
            <button className='likeBtn'>
              <AiOutlineLike className='likeIcon' size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className='topicCard bg-primary'>
        <div className='card-body'>
          <h2 className='userIcon'>
            <FaUserCircle className='userIcon' size={25} />
          </h2>
          {/* Link to Related Forum page */}
          <h2 className='card-title'>User Comment</h2>

          <div className='card-actions justify-start'>
            <button className='likeBtn'>
              <AiOutlineLike className='likeIcon' size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className='topicCard bg-primary'>
        <div className='card-body'>
          <h2 className='userIcon'>
            <FaUserCircle className='userIcon' size={25} />
          </h2>
          {/* Link to Related Forum page */}
          <h2 className='card-title'>User Comment</h2>

          <div className='card-actions justify-start'>
            <button className='likeBtn'>
              <AiOutlineLike className='likeIcon' size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className='topicCard bg-primary'>
        <div className='card-body'>
          <h2 className='userIcon'>
            <FaUserCircle className='userIcon' size={25} />
          </h2>
          {/* Link to Related Forum page */}
          <h2 className='card-title'>User Comment</h2>

          <div className='card-actions justify-start'>
            <button className='likeBtn'>
              <AiOutlineLike className='likeIcon' size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className='topicCard bg-primary'>
        <div className='card-body'>
          <h2 className='userIcon'>
            <FaUserCircle className='userIcon' size={25} />
          </h2>
          {/* Link to Related Forum page */}
          <h2 className='card-title'>User Comment</h2>

          <div className='card-actions justify-start'>
            <button className='likeBtn'>
              <AiOutlineLike className='likeIcon' size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicsGrid;
