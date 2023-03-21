import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import TopNav from './components/Navigation/TopNav';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <TopNav />
          <div className='wrapper'>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
       </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
