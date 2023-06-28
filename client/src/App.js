import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import TopNav from './components/Navigation/TopNav';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import TitlePage from './pages/TitlePage';
import Episodes from './pages/Episodes';
import Chats from './pages/Chats';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <>
      <Router>
        <div className='gridContainer grid grid-cols-5 bg-base-300 border-none'>
          <div className='grid-item col1' id='col1'></div>
          <div className='grid-item col2 col-span-3' id='col2'>
            <TopNav />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/title' element={<TitlePage />} />
              <Route path='/episodes' element={<Episodes />} />
              <Route path='/chats' element={<Chats />} />
              <Route path='/searchresults' element={<SearchResults />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
            <Footer />
          </div>
          <div className='grid-item col1' id='col3'></div>
        </div>
      </Router>
    </>
  );
}

export default App;
