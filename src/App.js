import React from 'react';
import './App.css';
import Header from './components/header/Header';
import PatientsCard from './components/PatientsCard/PatientCard';
function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <div className='patients-listing '>
        <PatientsCard/>
        </div>
        <div className='diagnosis'>

        </div>
        <div className='profile-card'>

        </div>
      </div>
    </div>
  );
}

export default App;
