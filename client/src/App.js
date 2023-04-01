import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import TopNav from './components/Navigation/TopNav';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home';
import ShowSearch from './pages/Search';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Router>
        
        <div className='gridContainer grid grid-cols-5'>
          <div className='grid-item col1'>Column 1</div>
          <div className='grid-item col2 col-span-3'>
            Column 2
            <TopNav />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/search' element={<ShowSearch />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
            {/* <Footer /> */}
          </div>
          <div className='grid-item col1'>Column 3</div>
        </div>
      </Router>
    </>
  );
}

export default App;
