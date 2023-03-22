import React from 'react'

import './filters.styles.css';

const Filter = () => {
  return (
    <div className='form-control'>
      <div className='input-group'>
        <select className='select select-bordered'>
          <option disabled selected>
            Pick category
          </option>
          <option>Popular</option>
          <option>Trending Now</option>
          <option>Recently Added</option>
          <option>Release Date - Newest</option>
          <option>Release Date - Oldest</option>
          <option>A-Z</option>
          <option>Z-A</option>
        </select>
        <button className='btn inputBtn bg-accent hover:bg-accent-focus'>Go</button>
      </div>
    </div>
  )
}

export default Filter