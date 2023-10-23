import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import Modal from 'react-bootstrap/Modal'; // Import Bootstrap Modal component
import Button from 'react-bootstrap/Button'; // Import Bootstrap Button component
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
      <div className="container mt-4">
        <div className="row">
          {this.state.jobListings.map((job) => (
            <div key={job.jobId} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{job.jobTitle}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{job.companyName}</h6>
                  <p className="card-text">Location: {job.jobLocation}</p>
                  <p className="card-text">Salary: {job.salary}</p>
                  <p className="card-text">Posted Date: {job.postedDate}</p>
                  <p className="card-text">Application Deadline: {job.applicationDeadline}</p>
                  <p className="card-text">{job.jobDescription}</p>
                  <Button variant="primary" onClick={() => this.setState({ showApplicationForm: job.jobId })}>
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Modal show={this.state.showApplicationForm !== null} onHide={() => this.setState({ showApplicationForm: null })}>
          <Modal.Header closeButton>
            <Modal.Title>Job Application</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.showApplicationForm !== null && (
              <JobApplication jobId={this.state.showApplicationForm} />
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.setState({ showApplicationForm: null })}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default JobListing;
