import React from 'react';
import './App.css';
import Navbar from './components/navbar'; // Import the Navbar component
import JobListing from './components/joblisting'; // Import the JobListing component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar /> {/* Include the Navbar component */}
        
        {/* Render the JobListing component here */}
        <JobListing />
      </header>
    </div>
  );
}

export default App;
