import React from 'react';

import '../components/Forums/Forums.styles.css';

// Components
import ForumNav from '../components/Forums/ForumNav';
import ForumCategoryBar from '../components/Forums/ForumCategoryBar';

const ForumCategories = () => {
  return (
    <div>
      <ForumNav />

      <div className='flex align-center justify-center mb-5'>
        <img src='https://placehold.co/1000x200'></img>
      </div>

      <div className='forum-main-container pb-4 px-4'>
        <ForumCategoryBar />
        <ForumCategoryBar />
      </div>
    </div>
  );
};

export default ForumCategories;
