import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
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
        this.setState({
          error: 'Error submitting application. Please try again.',
          applicationSubmitted: false,
        });
      });
  };

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            {this.state.applicationSubmitted ? (
              <div className="alert alert-success mt-3">Application submitted successfully!</div>
            ) : (
              <div className="card mt-3">
                <div className="card-body">
                  <h2 className="card-title">Apply for this Job</h2>
                  <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Candidate Name:</label>
                      <input
                        type="text"
                        name="candidateName"
                        value={this.state.candidateName}
                        onChange={this.handleInputChange}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email:</label>
                      <input
                        type="email"
                        name="candidateEmail"
                        value={this.state.candidateEmail}
                        onChange={this.handleInputChange}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Resume:</label>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={this.handleFileChange}
                        className="form-control"
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Apply
                    </button>
                  </form>
                </div>
              </div>
            )}
            {this.state.error && (
              <div className="alert alert-danger mt-3">{this.state.error}</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default JobApplication;
