
import { ReactComponent as SearchIcon } from '../../assets/search_FILL0_wght300_GRAD0_opsz24.svg'
import './PatientCard.css'
export default function PatientsCard() {
    return (
        <div className="patient-card-main">
            <div className="heading">
                <h2>Patients</h2>
                <SearchIcon className='icon' />
            </div>
        </div>
    )

}