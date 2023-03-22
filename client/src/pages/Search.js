import React from 'react';

// Components
import SearchBar from '../components/Filters/Searchbar';
import Filter from '../components/Filters/Filter';
import ShowCard from '../components/Cards/ShowCard';
import Pagination from '../components/Pagination/Pagination';

const ShowSearch = () => {
  return (
    <div className='wrapper py-6'>
        <div className='titleSection bg-base-100 h-40 mb-12 mt-8'>Section</div>

      <div className='filterContainer flex px-4 mb-8 justify-between sm:px-12'>
        <div className='sInput '>
          <SearchBar />
        </div>
        <div className='fInput'>
          <Filter />
        </div>
      </div>

      <div className='flex justify-center pt-8 pb-6'>
        <div className='eventGrid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          <ShowCard />
          <ShowCard />
          <ShowCard />
          <ShowCard />
          <ShowCard />
          <ShowCard />
          <ShowCard />
          <ShowCard />
          <ShowCard />
          <ShowCard />
          <ShowCard />
          <ShowCard />
        </div>

      </div>
      <div className='paginationContainer flex justify-center mt-8'>
            <Pagination />
        </div>
    </div>
  );
};

export default ShowSearch;
