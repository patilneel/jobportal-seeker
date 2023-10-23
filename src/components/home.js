import React, { Component } from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import JobListing from './joblisting';
import JobApplications from './jobapplication';
import Candidate from './candidate';
import Login from './login';
import Register from './register';

class Home extends Component {
  state = {
    activeComponent: 'jobListing',
  };

  render() {
    const { activeComponent } = this.state;

    return (
      <div className="container mt-5">
        {/* Header Section */}
        <header className="header">
          <h1>Beekin's Official Jobs Portal</h1>
        </header>

        {/* Navigation Bar */}
        <nav className="navbar mb-4">
          <Button
            className={`nav-button ${activeComponent === 'jobListing' ? 'active' : ''}`}
            onClick={() => this.setState({ activeComponent: 'jobListing' })}
          >
            Job Listings
          </Button>
          <Button
            className={`nav-button ${activeComponent === 'jobApplications' ? 'active' : ''}`}
            onClick={() => this.setState({ activeComponent: 'jobApplications' })}
          >
            Apply For Job
          </Button>
          <Button
            className={`nav-button ${activeComponent === 'candidate' ? 'active' : ''}`}
            onClick={() => this.setState({ activeComponent: 'candidate' })}
          >
            Candidates
          </Button>
          <Button
            className={`nav-button ${activeComponent === 'login' ? 'active' : ''}`}
            onClick={() => this.setState({ activeComponent: 'login' })}
          >
            Login
          </Button>
          <Button
            className={`nav-button ${activeComponent === 'register' ? 'active' : ''}`}
            onClick={() => this.setState({ activeComponent: 'register' })}
          >
            Register
          </Button>
          {/* Add other menu items as needed */}
        </nav>

        {/* Hidden Elements (like tooltips) */}
        <div className="hidden-elements">
          {/* Add hidden elements here */}
        </div>

        {/* Main Section with Job Listings */}
        <section className="main-section">
          {activeComponent === 'jobListing' && <JobListing />}
          {activeComponent === 'jobApplications' && <JobApplications />}
          {activeComponent === 'candidate' && <Candidate />}
          {activeComponent === 'login' && <Login />}
          {activeComponent === 'register' && <Register />}
        </section>

        {/* Footer Section */}
        <footer className="footer">
          <div className="about">
            <h3>About Us</h3>
            {/* Add about content here */}
          </div>
          {/* Add other footer components as needed */}
        </footer>
      </div>
    );
  }
}

export default Home;
