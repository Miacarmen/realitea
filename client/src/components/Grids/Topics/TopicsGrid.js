import React from 'react';

import './TopicsGrid.styles.css';

import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineLike } from 'react-icons/ai';
import { FiEye } from 'react-icons/fi';
import { BiComment } from 'react-icons/bi';

const TopicsGrid = () => {
  return (
    <div className='grid grid-cols-1 gap-7 lg:grid-cols-3 md:grid-cols-2'>
      <div className='topicCard bg-secondary'>
        <div className='cardBody px-5 py-5'>
          <div className='userIcon'>
            <FaUserCircle className='userIcon text-base-300' size={25} />
            <h2 className='pl-2 text-base-300'>Username</h2>
          </div>
          {/* Link to Related Forum page */}
          <div className='card-content'>
            <h2 className='card-title mb-5 mt-5 text-base-300'>
              User Comment Topic User Comment Topic User Comment Topic
            </h2>
          </div>
          <div className='card-actions justify-center mt-3'>
            <div className='card-actions-left justify-start text-base-300'>
              <button className='likeBtn'>
                <AiOutlineLike className='likeIcon text-base-300' size={22} />
              </button>
              <h2 className='pl-1 font-semibold text-base-300'>Like</h2>
            </div>

            <div className='card-actions-right justify-end text-base-300'>
              <BiComment className='commentIcon' size={16} />
              <h2 className='pl-1 pr-3 font-semibold'>0</h2>
              <FiEye className='eyeIcon' size={16} />
              <h2 className='pl-1 font-semibold'>0</h2>
            </div>
          </div>
        </div>
      </div>


      <div className='topicCard bg-secondary'>
        <div className='cardBody px-5 py-5'>
          <div className='userIcon'>
            <FaUserCircle className='userIcon' size={25} />
            <h2 className='pl-2'>Username</h2>
          </div>
          {/* Link to Related Forum page */}
          <div className='card-content'>
            <h2 className='card-title mb-5 mt-5'>
              User Comment Topic User Comment Topic User Comment Topic
            </h2>
          </div>
          <div className='card-actions justify-center mt-3'>
            <div className='card-actions-left justify-start text-base-300'>
              <button className='likeBtn'>
                <AiOutlineLike className='likeIcon' size={22} />
              </button>
              <h2 className='pl-1 font-semibold'>Like</h2>
            </div>

            <div className='card-actions-right justify-end text-base-300'>
              <BiComment className='commentIcon' size={16} />
              <h2 className='pl-1 pr-3 font-semibold'>0</h2>
              <FiEye className='eyeIcon' size={16} />
              <h2 className='pl-1 font-semibold'>0</h2>
            </div>
          </div>
        </div>
      </div>


      <div className='topicCard bg-primary'>
        <div className='cardBody px-5 py-5'>
          <div className='userIcon'>
            <FaUserCircle className='userIcon' size={25} />
            <h2 className='pl-2'>Username</h2>
          </div>
          {/* Link to Related Forum page */}
          <div className='card-content'>
            <h2 className='card-title mb-5 mt-5'>
              User Comment Topic User Comment Topic User Comment Topic
            </h2>
          </div>
          <div className='card-actions justify-center mt-3'>
            <div className='card-actions-left justify-start text-base-300'>
              <button className='likeBtn'>
                <AiOutlineLike className='likeIcon' size={22} />
              </button>
              <h2 className='pl-1 font-semibold'>Like</h2>
            </div>

            <div className='card-actions-right justify-end text-base-300'>
              <BiComment className='commentIcon' size={16} />
              <h2 className='pl-1 pr-3 font-semibold'>0</h2>
              <FiEye className='eyeIcon' size={16} />
              <h2 className='pl-1 font-semibold'>0</h2>
            </div>
          </div>
        </div>
      </div>

      <div className='topicCard bg-primary'>
        <div className='cardBody px-5 py-5'>
          <div className='userIcon'>
            <FaUserCircle className='userIcon' size={25} />
            <h2 className='pl-2'>Username</h2>
          </div>
          {/* Link to Related Forum page */}
          <div className='card-content'>
            <h2 className='card-title mb-5 mt-5'>
              User Comment Topic User Comment Topic User Comment Topic
            </h2>
          </div>
          <div className='card-actions justify-center mt-3'>
            <div className='card-actions-left justify-start text-base-300'>
              <button className='likeBtn'>
                <AiOutlineLike className='likeIcon' size={22} />
              </button>
              <h2 className='pl-1 font-semibold'>Like</h2>
            </div>

            <div className='card-actions-right justify-end text-base-300'>
              <BiComment className='commentIcon' size={16} />
              <h2 className='pl-1 pr-3 font-semibold'>0</h2>
              <FiEye className='eyeIcon' size={16} />
              <h2 className='pl-1 font-semibold'>0</h2>
            </div>
          </div>
        </div>
      </div>

      <div className='topicCard bg-primary'>
        <div className='cardBody px-5 py-5'>
          <div className='userIcon'>
            <FaUserCircle className='userIcon' size={25} />
            <h2 className='pl-2'>Username</h2>
          </div>
          {/* Link to Related Forum page */}
          <div className='card-content'>
            <h2 className='card-title mb-5 mt-5'>
              User Comment Topic User Comment Topic User Comment Topic
            </h2>
          </div>
          <div className='card-actions justify-center mt-3'>
            <div className='card-actions-left justify-start text-base-300'>
              <button className='likeBtn'>
                <AiOutlineLike className='likeIcon' size={22} />
              </button>
              <h2 className='pl-1 font-semibold'>Like</h2>
            </div>

            <div className='card-actions-right justify-end text-base-300'>
              <BiComment className='commentIcon' size={16} />
              <h2 className='pl-1 pr-3 font-semibold'>0</h2>
              <FiEye className='eyeIcon' size={16} />
              <h2 className='pl-1 font-semibold'>0</h2>
            </div>
          </div>
        </div>
      </div>

      <div className='topicCard bg-primary'>
        <div className='cardBody px-5 py-5'>
          <div className='userIcon text-base-300'>
            <FaUserCircle className='userIcon' size={25} />
            <h2 className='pl-2 text-base-300'>Username</h2>
          </div>
          {/* Link to Related Forum page */}
          <div className='card-content'>
            <h2 className='card-title mb-5 mt-5 text-base-300'>
              User Comment Topic User Comment Topic User Comment Topic
            </h2>
          </div>
          <div className='card-actions justify-center mt-3'>
            <div className='card-actions-left justify-start text-base-300'>
              <button className='likeBtn'>
                <AiOutlineLike className='likeIcon' size={22} />
              </button>
              <h2 className='pl-1 font-semibold'>Like</h2>
            </div>

            <div className='card-actions-right justify-end text-base-300'>
              <BiComment className='commentIcon' size={16} />
              <h2 className='pl-1 pr-3 font-semibold'>0</h2>
              <FiEye className='eyeIcon' size={16} />
              <h2 className='pl-1 font-semibold'>0</h2>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default TopicsGrid;
