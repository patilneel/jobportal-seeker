import React, { Component } from 'react';
import './home.css';

import JobListing from './joblisting';
import JobApplications from './jobapplication';

class Home extends Component {
  state = {
    activeComponent: 'jobListing',
  };

  render() {
    let componentToRender = null;

    if (this.state.activeComponent === 'jobListing') {
      componentToRender = <JobListing />;
    } else if (this.state.activeComponent === 'jobApplications') {
      componentToRender = <JobApplications />;
    }

    return (
      <div className="home">
        <div className="navbar">
          <button onClick={() => this.setState({ activeComponent: 'jobListing' })}>Job Listings</button>
          <button onClick={() => this.setState({ activeComponent: 'jobApplications' })}>Job Applications</button>
          {/* Add more buttons for additional components */}
        </div>
        <div className="content">{componentToRender}</div>
      </div>
    );
  }
}

export default Home;
