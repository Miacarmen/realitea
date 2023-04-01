import React from 'react';
import Logo from '../assets/trash-talk-logo.jpg';

import Gallery from '../components/Gallery/Gallery';
import Searchbar
 from '../components/Filters/Searchbar';
import '../styles/home.styles.css';

const Home = () => {
  return (
    <div className='bg-base-100'>
      <div>
        <img src={Logo} alt='logo' className='logoImg pb-5' />
      </div>
        <div className='searchBar'>
            <Searchbar />
        </div>
      {/* <div>
        <div class='line-1'></div>
      </div> */}
    <h1>Trending Now</h1>
      <div className='showGallery pt-5'>
        <Gallery />
      </div>
    </div>
  );
};

export default Home;
