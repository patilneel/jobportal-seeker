import React, { Component, useState } from 'react';
import axios from 'axios';
import './joblisting.css';
import JobApplication from './jobapplication';

class JobListing extends Component {
  state = {
    jobListings: [],
    showApplicationForm: null,
  };

  componentDidMount() {
    // Make an API request to your JobController
    axios
      .get('https://localhost:7197/api/jobs')
      .then((response) => {
        this.setState({ jobListings: response.data });
      })
      .catch((error) => {
        console.error('Error fetching job listings:', error);
      });
  }

  render() {
    return (
      <div className="job-listings">
        {this.state.jobListings.map((job) => (
          <div key={job.jobId} className="job-card">
            <h2 className="job-title">{job.jobTitle}</h2>
            <p className="company-name">{job.companyName}</p>
            <p className="job-location">{job.jobLocation}</p>
            <p className="salary">{job.salary}</p>
            <p className="posted-date">{job.postedDate}</p>
            <p className="application-deadline">{job.applicationDeadline}</p>
            <p className="job-description">{job.jobDescription}</p>
            {this.state.showApplicationForm === job.jobId && (
              <div className="popup">
                <JobApplication jobId={job.jobId} />
                <button onClick={() => this.setState({ showApplicationForm: null })}>Close</button>
              </div>
            )}
            {!this.state.showApplicationForm && (
              <button onClick={() => this.setState({ showApplicationForm: job.jobId })}>
                Apply
              </button>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default JobListing;
