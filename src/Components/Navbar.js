import React from 'react';
import './Navbar.css';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <div className='logo'>
                    <h1 className='heading'>Shubham Ingole</h1>
                </div>
                <div className='links'>
                    <a href='#home'>Home</a>
                    <a href='#techStack'>Skills</a>
                    <a href='#myprojects'>Projects</a>
                    <a href='#about-me'>About</a>
                    <a href='#contact'>Contact</a>
                    <a href='https://www.github.com/i9shubham'>
                        <AiFillGithub size='1.6em' />
                    </a>
                    <a href='https://www.twitter.com/i9shubham'>
                        <AiFillTwitterCircle size='1.6em' />
                    </a>
                    <a href='https://www.linkedin.com/in/i9shubham'>
                        {' '}
                        <AiFillLinkedin size='1.6em' />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
