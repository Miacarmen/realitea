import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../components/Forums/Forums.styles.css';

// Components
import ForumNav from '../components/Forums/ForumNav';
import ForumCategoryBar from '../components/Forums/ForumCategoryBar';

const ForumCategories = () => {
  return (
    <div>
      <ForumNav />

      <div className='flex align-center justify-center mb-5 image-container'>
        <div className='text-overlay'>
          <div className='forum-title'>Forum</div>

          <div className='title-header'>Talk All The Trash You Want</div>
        </div>
      </div>

      <div className='btn-container flex mb-5'>
        <Button className='new-post-btn bg-base-300 text-primary border-none'>Create New Post</Button>
      </div>

      <div className='forum-main-container pb-4 px-4'>
        <ForumCategoryBar />
        <ForumCategoryBar />
      </div>
    </div>
  );
};

export default ForumCategories;
