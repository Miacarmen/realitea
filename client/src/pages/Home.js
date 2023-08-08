import React from 'react';
import Logo from '../assets/trash-talk-logo-4.png';
import { Button } from 'react-bootstrap';
import '../styles/home.styles.css';

// Components
import Gallery from '../components/Grids/Gallery/Gallery';
import Searchbar from '../components/Filters/Searchbar';
import Premieres from '../components/Grids/PremiereGrid/PremiereGrid';
import Topics from '../components/Grids/Topics/TopicsGrid';

const Home = () => {
  return (
    <div className='bg-base-100'>
      <div>
        <img src={Logo} alt='logo' className='logoImg pb-5' />
      </div>
      <div className='searchBar my-3'>
        <Searchbar />
      </div>
      <div>
        <h1 className='head-title text-base-300'>Trending Now</h1>
      </div>

      <div className='gallery-wrapper'>
        <div className='showGallery pt-5'>
          <Gallery />
        </div>
        <div className='my-12'>
          <Button className='forumBtn bg-base-300 text-primary border-none rounded-none'>Join the Trash Talk</Button>
        </div>
      </div>

      <div>
        <h1 className='head-title text-base-300 pt-8'>Upcoming Season Premieres</h1>
      </div>

      <div className='premiere-wrapper flex mt-8'>
        <Premieres />
      </div>

      <div>
        <h1 className='head-title text-base-300 pt-24'>Trending Topics</h1>
      </div>
      <div className='topic-wrapper mt-8'>
        <Topics />
      </div>
      <div className='my-12'>
          <Button className='forumBtn bg-base-300 text-primary border-none rounded-none'>Join the Trash Talk</Button>
        </div>
    </div>
  );
};

export default Home;
