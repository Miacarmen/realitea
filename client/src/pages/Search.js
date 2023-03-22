import React from 'react'

// Components
import SearchBar from '../components/Filters/Searchbar';
import Filter from '../components/Filters/Filter';

const ShowSearch = () => {
  return (
    <div className='wrapper py-6'>
        <div className='filterContainer flex px-4 justify-between sm:px-12'>
      <div className='sInput '>
      <SearchBar />
      </div>
      <div className='fInput'>
      <Filter />
      </div>
      </div>

    </div>
  )
}

export default ShowSearch