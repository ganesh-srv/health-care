import React from 'react';
import logo from '../../assets/TestLogo.svg'
import profilePic from '../../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png';
import { ReactComponent as OverViewIcon } from '../../assets/home_FILL0_wght300_GRAD0_opsz24.svg';
import { ReactComponent as PatientsIcon } from '../../assets/group_FILL0_wght300_GRAD0_opsz24.svg';
import { ReactComponent as ScheduleIcon } from '../../assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg';
import { ReactComponent as MessageIcon } from '../../assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg';
import { ReactComponent as TransactionIcon } from '../../assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg';
import { ReactComponent as SettingsIcon } from '../../assets/settings_FILL0_wght300_GRAD0_opsz24.svg';
import { ReactComponent as MoreIcon } from '../../assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg';
import './Header.css'
export default function Header() {
    return (
        <div className='header'>
            <div className='main'>
                <div className='logo'>
                    <img src={logo}></img>
                </div>
                <div className='tab-icons'>
                    <ul>
                        <li>
                            <OverViewIcon className='icon' />
                            Overview
                        </li>
                        <li>
                            <PatientsIcon className='icon' />
                            Patients
                        </li>
                        <li>
                            <ScheduleIcon className='icon' />
                            Schedule
                        </li>
                        <li>
                            <MessageIcon className='icon' />
                            Message
                        </li>
                        <li>
                            <TransactionIcon className='icon' />
                            Transactions
                        </li>
                    </ul>
                </div>
                <div className='profile-icon'>
                    <div className='profile-container'>
                        <img src={profilePic} alt="Profile" />
                        <div className='profile-names'>
                            <span className='profile-name'>Dr. Jose Simmons</span>
                            <span className='profile-title'>General Practitioner</span>
                        </div>
                        <div className='vertical-line'></div>
                        <div className='icons' >
                        <SettingsIcon className='icon' />
                        <MoreIcon className='icon' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}