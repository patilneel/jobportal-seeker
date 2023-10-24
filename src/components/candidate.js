import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './candidate.css';

const Candidate = () => {
  const [candidates, setCandidates] = useState([]);
  const [newCandidate, setNewCandidate] = useState({
    FirstName: '',
    LastName: '',
    ContactInfo: '',
    Skills: '',
  });

  useEffect(() => {
    // the list of candidates when the component mounts
    axios.get('/api/candidates')
      .then((response) => {
        setCandidates(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCandidate({
      ...newCandidate,
      [name]: value,
    });
  };

  const handleAddCandidate = () => {
    // Send a POST request to create a new candidate
    axios.post('/api/candidates', newCandidate)
      .then(() => {
        // Refresh the list of candidates after adding a new one
        axios.get('/api/candidates')
          .then((response) => {
            setCandidates(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="candidate-container">
      <h2>Candidates</h2>
      <div className="candidate-list">
        <ul>
          {candidates.map((candidate) => (
            <li key={candidate.candidateId}>
              {candidate.firstName} {candidate.lastName} - {candidate.contactInfo}
            </li>
          ))}
        </ul>
      </div>
      <div className="add-candidate">
        <h3>Add New Candidate</h3>
        <input
          type="text"
          name="FirstName"
          placeholder="First Name"
          value={newCandidate.FirstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="LastName"
          placeholder="Last Name"
          value={newCandidate.LastName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="ContactInfo"
          placeholder="Contact Info"
          value={newCandidate.ContactInfo}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="Skills"
          placeholder="Skills"
          value={newCandidate.Skills}
          onChange={handleInputChange}
        />
        <button onClick={handleAddCandidate}>Add Candidate</button>
      </div>
    </div>
  );
};

export default Candidate;
