import React from 'react'

import './filters.styles.css';

const Searchbar = () => {
  return (
    <>
    <form
      className='flex'
      action='/search/'
      autoComplete='off'
      method='get'
      role='search'
    >
      <div className='form-control'>
        <div className='input-group'>
          <input
            type='text'
            placeholder='Search…'
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
            className='input input-bordered'
          />
          <button className='btn inputBtn btn-square bg-primary hover:bg-primary-focus'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  </>
  )
}

export default Searchbar