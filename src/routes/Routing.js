import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../pages/AuthPage';
import Feed from '../pages/Feed';
import Browse from '../pages/Browse';
import AuthLogin from '../pages/AuthPage/AuthLogin'; //For this and register, they're two different pages so maybe separate those folders
import AuthRegister from '../pages/AuthPage/AuthRegister';
import ProtectedRoute from "./ProtectedRoute";

// Routing from the nav bar
// Might want to add profile once we have login capabilities

function Routing() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/register" element={<AuthRegister />} />
        <Route path="/login" element={<AuthLogin />} />

        <Route 
          path="/feed" 
          element={<ProtectedRoute path="/feed" element={Feed} />} 
        />
        <Route 
          path="/browse" 
          element={<ProtectedRoute path="/browse" element={Browse} />} 
        />
        <Route 
          path="/" 
          element={<ProtectedRoute path="/" element={LandingPage} />} 
        />
        {/* <Route path="/" element={<Browse tab="Browse"/>} /> */}
        
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default Routing;