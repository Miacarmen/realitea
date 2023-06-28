import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
const Episodes = () => {
  return (
    <div className='episodes-container'>
        <Link to='/title' className='backArrow arrowBtn py-3'>
        <FiArrowLeft size={22} />
      </Link>
      <div className='show-container'>
        <img src='https://via.placeholder.com/1000x400' alt='titleImg' />
        </div>

        <div className='episodes-header mt-12'>
        <h1>Episodes</h1>
      </div>

{/* Link to Related Forum Page */}
      <div className='episode-list-container grid grid-cols-5 gap-4 mt-4 mb-12'>
        <Link to='/episodes'><Button className='episode-item'>Episode 1</Button></Link>
        <Link to='/episodes'><Button className='episode-item'>Episode 2</Button></Link>
        <Link to='/episodes'><Button className='episode-item'>Episode 3</Button></Link>
        <Link to='/episodes'><Button className='episode-item'>Episode 4</Button></Link>
        <Link to='/episodes'><Button className='episode-item'>Episode 5</Button></Link>
        <Link to='/episodes'><Button className='episode-item'>Episode 6</Button></Link>
        <Link to='/episodes'><Button className='episode-item'>Episode 7</Button></Link>
        <Link to='/episodes'><Button className='episode-item'>Episode 8</Button></Link>
        <Link to='/episodes'><Button className='episode-item'>Episode 9</Button></Link>
        <Link to='/episodes'><Button className='episode-item'>Episode 10</Button></Link>
       
        
      </div>
    </div>
  )
}

export default Episodes