import React from 'react';
import './App.css';
import Navbar from './components/navbar'; 
import JobListing from './components/joblisting'; 
import JobApplication from './components/jobapplication'; 
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Candidate from './components/candidate';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
                
          {/* Define your routes using Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Candidate />}/>
            <Route path="/register" element={<Register />} />
            <Route path="/joblisting" element={<JobListing />} />
            <Route path="/jobapplication/:jobId" element={<JobApplication />} />
          </Routes>
        </header>
      </Router>
    </div>
  );
}

export default App;
