import React from 'react';
import '../Pages/home.css';
import './NavPanel.css';

import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
const NavPanel = () => {
    return (
        <>
            <div className='nav-panel'>
                <div className='nav-panel__container'>
                    <div className='nav-panel__container__logo'>
                        <button className='menu'>
                            <a href='#home'>
                                <HomeIcon />
                            </a>
                            <span>Home</span>
                        </button>
                    </div>
                    <div className='nav-panel__container__logo'>
                        <button className='menu'>
                            <a href='#about-me'>
                                <SchoolIcon />
                            </a>
                            <span>About</span>
                        </button>
                    </div>
                    <div className='nav-panel__container__logo'>
                        <button className='menu'>
                            <a href='#myprojects'>
                                <WorkIcon />
                            </a>
                            <span>Experiance</span>
                        </button>
                    </div>
                    <div className='nav-panel__container__logo'>
                        <button className='menu'>
                            <a href='#contact'>
                                <EmailIcon />
                            </a>
                            <span>Contact</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavPanel;
