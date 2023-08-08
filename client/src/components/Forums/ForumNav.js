import React from 'react';

import {BsSearch} from 'react-icons/bs';

const ForumNav = () => {
  return (
    <div className='forum-nav-outter mt-5'>
      <div className='forum-nav-container'>
        <div className='left-forum-nav'>
          <li>
            <a href='/forumcategories'>Categories</a>
          </li>
          <li>
            <a href='/allposts'>All Posts</a>
          </li>
          <li>
            <a href='/userposts'>My Posts</a>
          </li>
        </div>
        <div className='right-forum-nav'>
          <div id='forum-search-box'>
            <div class='relative mb-4 flex w-full flex-wrap items-stretch'>
              <input
                type='search'
                class='relative m-0 block w-[1%] min-w-0 flex-auto border border-solid border-base-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-base-content outline-none transition duration-300 ease-in-out'
                placeholder='Search...'
                aria-label='Search'
                aria-describedby='button-addon2'
              />

              <button className='forum-search-btn bg-base-300 px-3'>
                <BsSearch id='magGlassIcon' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumNav;
