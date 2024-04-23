import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Depts from './Components/Depts';
import Emps from './Components/Emps';
import NotFound from './Components/NotFound';
import Details from './Components/Details';
import Login from './Components/Login';
import ProtectedRoute from './ProtectedRoute';


const routing = (
  <Router>
    <h3 style={{ textAlign: "center" }} >Routing Implementation in React Applications</h3>
    <hr />

    <div style={{ textAlign: "center" }} >
      <Link to="/">Home</Link>  |
      <Link to="/Emps">Employees</Link> |
      <Link to="/Depts">Departments</Link> |
      <Link to="/About">About Us</Link> |
      <Link to="/Contact">Contact Us</Link> |
      <Link to="/Hello">Invalid</Link> |
      <Link to="/Login">Login</Link> |
    </div>

    <hr />

    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/Emps" element={
        <ProtectedRoute returnUrl="/Emps">
          <Emps />
        </ProtectedRoute>
      } />

      <Route path="/Depts" element={
        <ProtectedRoute returnUrl="/Depts">
          <Depts />
        </ProtectedRoute>
      } />

      <Route path="/About" element={<About />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Details/:id" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

  </Router>);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);
