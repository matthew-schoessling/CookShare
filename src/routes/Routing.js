import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Feed from '../pages/Feed';
import Browse from '../pages/Browse';

function Routing() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/feed" element={<Feed tab="Feed"/>} />
        <Route path="/browse" element={<Browse tab="Browse"/>} />
      </Routes>
    </Router>
  );
}

export default Routing;