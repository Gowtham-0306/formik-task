import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ContentContainer } from './contentcontainer';
import FormComponent from './formikcomponent';


export default function Navbar({ cartcount = Number, values=()=>{} }) {
  return (
    <div className="container-fluid">
      <Router>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">GUVI</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
               
                <Link className="nav-link" to="/form">Form</Link>
                <Link className="nav-link" to="/content">Book details</Link>
                {/* Add more links for other pages */}
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          
          <Route path="/form" element={<FormComponent />} />
          <Route path="/content" element={<ContentContainer  />} />
          {/* Add more routes for other pages/components */}
        </Routes>
      </Router>
    </div>
  );
}

