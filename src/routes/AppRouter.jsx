<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
=======
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
>>>>>>> 2384c91 (26/03/2025)
import Login from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Home from "../pages/Home";
import Filter from "../pages/Filter";
import ProfilePage from "../pages/ProfilePage";
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import Homeguest from "../pages/Home guest";

 
const AppRouter = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/guest" element={<Homeguest />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};
 
export default AppRouter;
 
=======
import Homeguest from "../pages/Home guest";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Optional: Protect routes that require authentication
 */
const ProtectedRoute = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // Example auth check
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const AppRouter = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/guest" element={<Homeguest />} />
          <Route path="/filter" element={<ProtectedRoute element={<Filter />} />} />
          <Route path="/profile" element={<ProtectedRoute element={<ProfilePage />} />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
};

export default AppRouter;
>>>>>>> 2384c91 (26/03/2025)
