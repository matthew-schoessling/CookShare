import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Feed from '../pages/Feed';
import Browse from '../pages/Browse';
import AuthLogin from '../pages/LandingPage/AuthLogin'; //For this and register, they're two different pages so maybe separate those folders
import AuthRegister from '../pages/LandingPage/AuthRegister';
import ProtectedRoute from "./ProtectedRoute";

// Routing from the nav bar
// Might want to add profile once we have login capabilities

function Routing() {
  return (
    <Router>
      <Routes>
        <Route exact path="/auth" element={<LandingPage />} />
        <Route path="/feed" element={<Feed tab="Feed"/>} />
        <Route path="/browse" element={<Browse tab="Browse"/>} />
        
        {/* Will Need to add routes for login, auth, etc */}
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route
          path="/"
          element={<ProtectedRoute path="/" element={Browse} />}
        />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  );
}

export default Routing;