import React from 'react'

import { Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';

const ForumCategories = () => {
  return (
    <div>
      <div className='forum-nav-outter my-5'>
    <div className='forum-nav-container'>
      <div className='left-forum-nav'>
        <li><a href='/forumcategories'>Categories</a></li>
        <li><a href='/allposts'>All Posts</a></li>
        <li><a href='/userposts'>My Posts</a></li>
      </div>
      <div className='right-forum-nav'>
        <div id='forum-search-box'>
        <div class="relative mb-4 flex w-full flex-wrap items-stretch">
      <input
        type="search"
        class="relative m-0 block w-[1%] min-w-0 flex-auto border border-solid border-base-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-base-content outline-none transition duration-300 ease-in-out"
        placeholder="Search..."
        aria-label="Search"
        aria-describedby="button-addon2" />
     
        <button className='bg-base-300 px-3'><BsSearch id='magGlassIcon'/></button>

    </div>
        </div>
      </div>
    </div>
    </div>
    <div className='flex align-center justify-center mb-5'>
      <img src='https://placehold.co/1000x200'></img>
    </div>

    <div className='forum-main-container'>
      <div className='forum-grid grid grid-cols-1 md:grid-cols-3 mt-4'>
        <Link to='/chats'>
          <div
            className='premiere-item col-span-1 ml-24'
            id='thumbnailImg'
          ></div>
        </Link>
        <div className='premiere-item col-span-2 pt-4 font-semibold'>
          <h2 className='text-base-300 showDetail '>
            The Real Housewives of New York City S14
          </h2>
        </div>
        <div
          className='premiere-item col-span-1 ml-24'
          id='thumbnailImg'
        ></div>
        <div className='premiere-item col-span-2 justify-start pt-4 font-semibold'>
          <h2 className='text-base-300 showDetail '>
            The Real Housewives of New York City S14
          </h2>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ForumCategories