import React, { Component } from 'react';
import axios from 'axios';
import './jobapplication.css';

class JobApplication extends Component {
  state = {
    candidateName: '',
    candidateEmail: '',
    resumeFile: null,
    applicationSubmitted: false,
    error: null,
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFileChange = (e) => {
    this.setState({ resumeFile: e.target.files[0] });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('JobId', this.props.jobId); 
    formData.append('CandidateName', this.state.candidateName);
    formData.append('CandidateEmail', this.state.candidateEmail);
    formData.append('ResumeFile', this.state.resumeFile);

    axios
      .post('https://localhost:7197/api/applications', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      })
      .then((response) => {
        this.setState({ applicationSubmitted: true, error: null });
      })
      .catch((error) => {
        this.setState({ error: 'Error submitting application. Please try again.', applicationSubmitted: false });
      });
  };

  render() {
    return (
      <div className="job-application">
        {this.state.applicationSubmitted ? (
          <div className="confirmation-message">Application submitted successfully!</div>
        ) : (
          <div>
            <h2>Apply for this Job</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Job ID:</label>
                <input
                  type="text"
                  name="jobId" 
                  value={this.state.jobId}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Candidate Name:</label>
                <input
                  type="text"
                  name="candidateName" 
                  value={this.state.candidateName}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="candidateEmail" 
                  value={this.state.candidateEmail}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Resume:</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={this.handleFileChange}
                  required
                />
              </div>
              <button type="submit">Apply</button>
            </form>
          </div>
        )}
        {this.state.error && <div className="error-message">{this.state.error}</div>}
      </div>
    );
  }
  
}

export default JobApplication;
