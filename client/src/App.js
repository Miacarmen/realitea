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
        <TopNav />
          <div className='wrapper'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<ShowSearch />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
       </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
