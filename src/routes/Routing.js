import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../pages/AuthPage';
import Feed from '../pages/Feed';
import Browse from '../pages/Browse';
import Profile from '../pages/Profile';
import NewRecipe from '../pages/NewRecipe';
import Stream from '../pages/Stream';
// import LogIn from '../pages/LogIn';
// import SignUp from '../pages/SignUp';
import AuthLogin from '../pages/AuthPage/AuthLogin'; //For this and signup, they're two different pages so maybe separate those folders
import AuthSignUp from '../pages/AuthPage/AuthSignUp';
import ProtectedRoute from "./ProtectedRoute";
import UploadImage from '../pages/UploadImage';
import AddBio from '../pages/AddBio';


// Routing from the nav bar
// Might want to add profile once we have login capabilities

function Routing() {
  return (
    <Router>
      <Routes>
        {/* These routes are available even without being logged in */}
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/signup" element={<AuthSignUp />} />
        <Route path="/login" element={<AuthLogin />} />

        {/* These paths are exlusive to users who are signed in */}
        <Route 
          path="/feed" element={<ProtectedRoute path="/feed" element={Feed} />} 
        />
        <Route 
          path="/browse" element={<ProtectedRoute path="/browse" element={Browse} />} 
        />
        <Route 
          path="/profile" element={<ProtectedRoute path="/profile" element={Profile} />} 
        />
        <Route 
          path="/" element={<ProtectedRoute path="/" element={LandingPage} />} 
        />
        <Route
          path="/stream" element={<ProtectedRoute path="/" element={Stream}/>}
        />
        <Route 
          path="/newrecipe" element={<ProtectedRoute path="/newrecipe" element={NewRecipe} />} 
        />
        <Route 
          path="/uploadimage" element={<ProtectedRoute path="/uploadimage" element={UploadImage} />} 
        />
        <Route 
          path="/addbio" element={<ProtectedRoute path="/addbio" element={AddBio} />} 
        />
        {/* If somebody types some random route into the nav bar, they'll be sent to Landing Page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default Routing;