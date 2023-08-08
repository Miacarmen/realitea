import React from 'react';

import './TopicsGrid.styles.css';

import TopicCard from './TopicCard';

const TopicsGrid = () => {
  return (
    <div className='grid grid-cols-1 gap-7 lg:grid-cols-3 md:grid-cols-2'>
      <TopicCard />
      <TopicCard />
      <TopicCard />
      <TopicCard />
      <TopicCard />
      <TopicCard />
    </div>
  );
};

export default TopicsGrid;
