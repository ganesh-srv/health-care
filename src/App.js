import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import PatientsCard from './components/PatientsCard/PatientCard';
import DiagnosisDashboard from './components/DiagnosisDashboard/DiagnosisDashboard';


function App() {
  const [patientRecords, setPatientRecords] = useState([]);
  useEffect(() => {
    const apiUrl = 'https://fedskillstest.coalitiontechnologies.workers.dev';
    let username = process.env.REACT_APP_USERNAME;
    let password = process.env.REACT_APP_PASSWORD;
    let auth = btoa(`${username}:${password}`);
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Authorization': `Basic ${auth}`,
            'Content-type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setPatientRecords(result)
      } catch (error) {
        alert("Error loading the data:", error.message)
      }
    }

    fetchData()

  }, [])
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <div className='patients-listing '>
          <PatientsCard patients={patientRecords} />
        </div>
        <div className='middle-container'>
          <div className='diagnosis'>
          <DiagnosisDashboard/>
          </div>
          <div className='diagnostic-list'>
            
          </div>
        </div>
        <div className='profile-card'>

        </div>
      </div>
    </div>
  );
}

export default App;
