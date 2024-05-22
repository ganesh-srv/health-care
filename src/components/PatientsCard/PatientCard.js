
import { ReactComponent as SearchIcon } from '../../assets/search_FILL0_wght300_GRAD0_opsz24.svg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH  } from '@fortawesome/free-solid-svg-icons';
import './PatientCard.css'
export default function PatientsCard({patients}) {

    return (
        <div className="patient-card-main">
            <div className="heading">
                <h2>Patients</h2>
                <SearchIcon className='icon' />
            </div>
            <div className="patient-listing">
                {patients.map((patient, index) => (
                    <div key={index} className="patient-profile">
                        <img src={patient.profile_picture} alt="Profile" />
                        <div className='profile-details'>
                            <div className='profile-names'>
                                <span className='profile-name'>{patient.name}</span>
                                <span className='profile-title'>{`${patient.gender}, ${patient.age}`}</span>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faEllipsisH} className='icon more-icon' />
                    </div>
                ))}
            </div>
        </div>
    )

}