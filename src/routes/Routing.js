import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Feed from '../pages/Feed';
import Browse from '../pages/Browse';
import Publisher from '../components/streaming/Publisher';

// Routing from the nav bar
// Might want to add profile once we have login capabilities

function Routing() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/feed" element={<Feed tab="Feed"/>} />
        <Route path="/browse" element={<Browse tab="Browse"/>} />
        <Route path="/publisher" element={<Publisher />} />
      </Routes>
    </Router>
  );
}

export default Routing;